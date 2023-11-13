import { connectDB } from "@/app/_services/datebaseConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const DB = (await connectDB).db("blog").collection("comments");
    if (req.method === "GET") {
      const result = await DB.find({
        parent_id: new ObjectId(String(req.query.id)),
      }).toArray();

      res.status(200).json(result);
    }

    if (req.method === "POST") {
      const { comment, id } = JSON.parse(req.body);
      const data = {
        content: comment,
        parent_id: new ObjectId(id),
      };

      const result = await DB.insertOne(data);
      // console.log("result", result);
      res.status(200).json({ message: "댓글 등록 성공", data });
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
}
