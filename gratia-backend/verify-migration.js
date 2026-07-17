require("dotenv").config();
const mongoose = require("mongoose");
const Client = require("./models/Client");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const clients = await Client.find({
    $or: [
      { pdfPath: { $regex: "/uploads/" } },
      { "documents.path": { $regex: "/uploads/" } },
    ],
  });
  console.log("Clients still with old paths:", clients.length);
  clients.forEach(c => {
    console.log(c.referenceNumber, "pdfPath:", c.pdfPath);
    (c.documents || []).forEach((d, i) => {
      if (d.path && d.path.includes("/uploads/")) console.log("  doc", i, d.path);
    });
  });
  await mongoose.disconnect();
  process.exit(0);
}).catch(e => { console.error(e); process.exit(1); });
