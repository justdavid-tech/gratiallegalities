require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const makePublic = async () => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "gratia-documents",
      resource_type: "raw",
      max_results: 500,
    });

    console.log(`Found ${result.resources.length} files to update`);

    for (const resource of result.resources) {
      if (resource.access_mode !== "public") {
        console.log(`Updating ${resource.public_id} to public...`);
        try {
          await cloudinary.api.update("raw", resource.public_id, { access_mode: "public" });
          console.log(`  -> Updated`);
        } catch (updateErr) {
          console.error(`  -> Failed:`, updateErr.message);
        }
      } else {
        console.log(`Skipping ${resource.public_id} (already public)`);
      }
    }

    console.log("Done");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
};

makePublic();
