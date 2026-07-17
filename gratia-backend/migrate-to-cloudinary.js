require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const Client = require("./models/Client");

const uploadBufferToCloudinary = (buffer, filename) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "gratia-documents",
        resource_type: "raw",
        public_id: filename,
        format: "pdf",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.on("error", reject);
    stream.end(buffer);
  });
};

const migrateClient = async (client) => {
  const uploadsDir = path.join(__dirname, "uploads");
  let changed = false;

  const docs = client.documents || [];
  const newDocs = [];

  for (const doc of docs) {
    if (doc.path && doc.path.includes("/uploads/")) {
      const filename = path.basename(doc.path);
      const localPath = path.join(uploadsDir, filename);

      if (fs.existsSync(localPath)) {
        console.log(`Uploading ${filename} to Cloudinary...`);
        try {
          const buffer = fs.readFileSync(localPath);
          const ref = client.referenceNumber.replace(/[^a-zA-Z0-9-]/g, "");
          const publicId = `${ref}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
          const result = await uploadBufferToCloudinary(buffer, publicId);
          newDocs.push({
            path: result.secure_url,
            originalName: doc.originalName || filename,
            uploadedAt: new Date(),
          });
          changed = true;
          console.log(`  -> ${result.secure_url}`);
        } catch (err) {
          console.error(`  Failed to upload ${filename}:`, err.message);
          newDocs.push(doc);
        }
      } else {
        console.log(`File not found locally, removing stale path: ${filename}`);
        changed = true;
      }
    } else {
      newDocs.push(doc);
    }
  }

  if (client.pdfPath && client.pdfPath.includes("/uploads/")) {
    const filename = path.basename(client.pdfPath);
    const localPath = path.join(uploadsDir, filename);

    if (fs.existsSync(localPath)) {
      console.log(`Uploading main pdf ${filename} to Cloudinary...`);
      try {
        const buffer = fs.readFileSync(localPath);
        const ref = client.referenceNumber.replace(/[^a-zA-Z0-9-]/g, "");
        const publicId = `${ref}_main_${Date.now()}`;
        const result = await uploadBufferToCloudinary(buffer, publicId);
        client.pdfPath = result.secure_url;
        changed = true;
        console.log(`  -> ${result.secure_url}`);
      } catch (err) {
        console.error(`  Failed to upload main pdf ${filename}:`, err.message);
      }
    } else {
      console.log(`Main pdf not found locally, clearing pdfPath: ${filename}`);
      client.pdfPath = null;
      client.pdfOriginalName = null;
      changed = true;
    }
  }

  if (newDocs.length > 0 && client.pdfPath) {
    client.pdfOriginalName = newDocs[0].originalName;
  }

  if (changed) {
    client.documents = newDocs;
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
        { pdfPath: { $regex: "/uploads/" } },
        { "documents.path": { $regex: "/uploads/" } },
      ],
    });

    console.log(`Found ${clients.length} clients with old local paths`);

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
