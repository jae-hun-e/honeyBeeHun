import { connectDB } from "@/app/_services/datebaseConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

type ResponseData = {
  message: string;
};
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  if (request.method === "DELETE") {
    const { _id } = JSON.parse(request.body);
    try {
      const db = (await connectDB).db("blog");
      await db.collection("posts").deleteOne({ _id: new ObjectId(_id) });
      return response.status(200).json({ message: "삭제 성공" });
    } catch (e) {
      return response.status(400).json({ message: "응 안돼~" });
    }
  }
}
