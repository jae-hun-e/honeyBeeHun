import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";
import multer from "multer";
import { createEdgeRouter } from "next-connect";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read",
    key(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});

const apiRoute = createEdgeRouter();

apiRoute.use(upload.single("image"));

apiRoute.post(async (req, res) => {
  console.log("req", req);
  console.log("제바아알", req.file);
  console.log("제발 body", req.body);
  // 성공했다는 메시지를 주고 user 정보를 리턴함
  res.status(200).json({ user });
});

export default apiRoute.handler({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).end(err.toString());
  },
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
