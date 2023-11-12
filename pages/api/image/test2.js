import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read",
    key: function (_req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

export default upload.single("image", async function handler(req, res, next) {
  try {
    const imageUrl = req.file.location; // 'location'은 multer-s3에서 S3에 업로드된 파일의 URL입니다.
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "이미지 업로드 실패" });
  }
});

// export default async function handler(req, res) {
//   const s3 = new S3Client({
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY,
//       secretAccessKey: process.env.S3_SECRET_KEY,
//     },
//     region: "ap-northeast-2",
//   });
//
//   const upload = multer({
//     storage: multerS3({
//       s3,
//       bucket: process.env.S3_BUCKET_NAME,
//       acl: "public-read",
//       key(req, file, cb) {
//         cb(null, `${Date.now()}_${file.originalname}`);
//       },
//     }),
//   });
//
//   const fileName = req.query.file;
//   const file = req.body;
//
//   // console.log("req", fileName);
//   console.log("file", file);
//
//   res.status(200).json({ name: "John Doe" });
// }
