// pages/api/upload-handler.js
import formidable from "formidable";

const parsedFormData = async (request) =>
  await new Promise((resolve, reject) => {
    const form = formidable();

    // 왜 못받니....
    form.parse(request, (err, fields, files) => {
      console.log(request, request);
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });

export default async function handler(req, res) {
  const { fields, files } = await parsedFormData(req);

  console.log("fields", fields);
  console.log("files", files);

  res.status(200).json({ fields, files });
}
