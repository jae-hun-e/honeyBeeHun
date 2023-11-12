// pages/api/upload-handler.js
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const acceptedOrigins = ["http://localhost:3000", "http://192.168.1.1"];
  const imageFolder = "public/";

  // handle same-origin requests
  if (req.headers.origin && acceptedOrigins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  } else {
    res.status(403).send("Origin Denied");
    return;
  }

  // Prevent uploads on an OPTIONS request
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.status(200).end();
    return;
  }

  // handle file upload
  const form = new IncomingForm({ uploadDir: imageFolder });

  await form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server Error");
      return;
    }

    const temp = files.file;

    if (temp && temp.size > 0) {
      // sanitize and verify images before they arrive on the server
      const fileName = temp.name.replace(
        /([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/g,
        ""
      );

      if (
        !["gif", "jpg", "png"].includes(fileName.split(".").pop().toLowerCase())
      ) {
        res.status(400).send("Invalid extension.");
        return;
      }

      const fileToWrite = imageFolder + fileName;
      fs.rename(temp.path, fileToWrite, (renameErr) => {
        if (renameErr) {
          console.error(renameErr);
          res.status(500).send("Server Error");
          return;
        }

        const protocol = req.headers["x-forwarded-proto"] || "http";
        const localAddress = req.headers.host || "localhost:3000";
        const baseUrl = `${protocol}://${localAddress}/images/`;

        // Send the required JSON object that has 'location' as a property back to TinyMCE
        res.json({ location: baseUrl + fileName });
      });
    } else {
      res.status(400).send("Invalid file.");
    }
  });
}
