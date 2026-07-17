require("dotenv").config();
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const { createClient } = require("@supabase/supabase-js");
const https = require("https");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const Client = require("./models/Client");

const downloadFromCloudinary = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks)));
      response.on("error", reject);
    }).on("error", reject);
  });
};

const migrateClient = async (client) => {
  let changed = false;
  const docs = client.documents || [];
  const newDocs = [];

  for (const doc of docs) {
    if (doc.path && doc.path.includes("res.cloudinary.com")) {
      console.log(`Downloading from Cloudinary: ${doc.originalName}`);
      try {
        const buffer = await downloadFromCloudinary(doc.path);
        const ext = doc.originalName.split(".").pop() || "pdf";
        const filename = `${client.referenceNumber.replace(/[^a-zA-Z0-9-]/g, "")}_${Date.now()}.${ext}`;
        const { data, error } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET || "gratia-documents")
          .upload(filename, buffer, { contentType: "application/pdf", upsert: true });

        if (error) throw error;
        console.log(`  -> Uploaded to Supabase: ${filename}`);
        newDocs.push({
          path: filename,
          originalName: doc.originalName,
          uploadedAt: new Date(),
        });
        changed = true;
      } catch (err) {
        console.error(`  -> Failed:`, err.message);
        newDocs.push(doc);
      }
    } else {
      newDocs.push(doc);
    }
  }

  if (client.pdfPath && client.pdfPath.includes("res.cloudinary.com")) {
    console.log(`Downloading main PDF from Cloudinary: ${client.pdfOriginalName}`);
    try {
      const buffer = await downloadFromCloudinary(client.pdfPath);
      const ext = client.pdfOriginalName.split(".").pop() || "pdf";
      const filename = `${client.referenceNumber.replace(/[^a-zA-Z0-9-]/g, "")}_main_${Date.now()}.${ext}`;
      const { data, error } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET || "gratia-documents")
        .upload(filename, buffer, { contentType: "application/pdf", upsert: true });

      if (error) throw error;
      console.log(`  -> Uploaded to Supabase: ${filename}`);
      client.pdfPath = filename;
      changed = true;
    } catch (err) {
      console.error(`  -> Failed:`, err.message);
    }
  }

  if (changed) {
    client.documents = newDocs;
    if (newDocs.length > 0 && !client.pdfPath) {
      client.pdfPath = newDocs[0].path;
      client.pdfOriginalName = newDocs[0].originalName;
    }
    await client.save();
    console.log(`Updated client: ${client.referenceNumber}`);
  }
};

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const clients = await Client.find({
      $or: [
        { pdfPath: { $regex: "res.cloudinary.com" } },
        { "documents.path": { $regex: "res.cloudinary.com" } },
      ],
    });

    console.log(`Found ${clients.length} clients with Cloudinary paths`);

    for (const client of clients) {
      await migrateClient(client);
    }

    console.log("Migration complete");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
};

run();
