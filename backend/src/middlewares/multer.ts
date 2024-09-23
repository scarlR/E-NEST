import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
const storage = multer.diskStorage({
  filename: function (req : Request, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
