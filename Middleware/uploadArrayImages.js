const multer = require("multer");

const uploadArrayImages = (destination) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/svg" ||
      file.mimetype === "image/webp" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/gif" ||
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/quicktime"
    ) {
      cb(null, true);
    } else {
      const error = new Error("Invalid file type");
      error.status = 400;
      cb(error);
    }
  };

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 2024 * 50, // 2MB file size limit
    },
    fileFilter: fileFilter,
  });

  return upload.array("gigsImages", 10);
};

module.exports = uploadArrayImages;
