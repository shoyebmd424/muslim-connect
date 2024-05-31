const multer = require("multer");

const uploadSingleVideoFile = (destination) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "video/mp4" || file.mimetype === "video/quicktime") {
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
      fileSize: 1024 * 1024 * 100, // 100 MB file size limit
    },
    fileFilter: fileFilter,
  });

  return function (req, res, next) {
    upload.single("gigVideo")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(400).send({ message: "File upload error" });
      } else if (err) {
        console.log(err);
        return res.status(400).send({ message: err.message });
      }
      next();
    });
  };
};

module.exports = uploadSingleVideoFile;
