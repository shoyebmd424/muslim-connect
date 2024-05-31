const multer = require("multer");
const uploadMuiltiFieldFiles = (destination) => {
  const storage = multer.diskStorage({
    destination: (req, res, cb) => {
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
      file.mimetype === "image/gif"
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
      fileSize: 1024 * 2024 * 2,
    },
    fileFilter: fileFilter,
  });

  return function (req, res, next) {
    upload.fields([{ name: "idProof" }, { name: "certificate" }])(
      req,
      res,
      function (err) {
        if (err instanceof multer.MulterError) {
          console.log(err);
          return res.status(400).send({ message: "File upload error" });
        } else if (err) {
          console.log(err);
          return res.status(400).send({ message: err.message });
        }
        //   req.filePath = req.file.path;
        next();
      }
    );
  };
};
module.exports = uploadMuiltiFieldFiles;
