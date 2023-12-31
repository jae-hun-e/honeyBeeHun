import { connectDB } from "@/app/_services/datebaseConnect";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  if (request.method === "POST") {
    const { title, content } = JSON.parse(request.body);
    if (title === "" || content === "") {
      return response.status(500).json({ message: "글 쓰고 보내라" });
    }
    try {
      const db = (await connectDB).db("blog");

      await db
        .collection("posts")
        .insertOne({ date: new Date(), title, content });

      response.status(200).json({ message: "업로드 성공" });
    } catch (e) {
      return response.status(400).json({ message: "응 안돼~" });
    }
  }
}
