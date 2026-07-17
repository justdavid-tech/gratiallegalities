const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const requiredSupabaseVars = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_BUCKET"];
for (const varName of requiredSupabaseVars) {
  if (!process.env[varName]) {
    console.error(`Missing Supabase env var: ${varName}`);
  }
}

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 },
});

const uploadToSupabase = (buffer, filename, contentType = "application/pdf") => {
  return new Promise((resolve, reject) => {
    const path = `${Date.now()}_${filename}`;
    supabase.storage
      .from(process.env.SUPABASE_BUCKET || "gratia-documents")
      .upload(path, buffer, { contentType, upsert: true })
      .then(({ data, error }) => {
        if (error) reject(error);
        else {
          const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET || "gratia-documents"}/${path}`;
          resolve({ ...data, path, publicUrl });
        }
      })
      .catch(reject);
  });
};

const deleteFromSupabase = (path) => {
  return supabase.storage
    .from(process.env.SUPABASE_BUCKET || "gratia-documents")
    .remove([path]);
};

module.exports = { upload, supabase, uploadToSupabase, deleteFromSupabase };