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
  if (request.method === "GET") {
    const { _id, title, content } = JSON.parse(request.body);
    try {
      const db = (await connectDB).db("blog");
      const res = await db
        .collection("posts")
        .findOne({ _id: new ObjectId(_id) });
      return response.status(200).json({ data: res });
    } catch (e) {
      return response.status(400).json({ message: "응 안돼~" });
    }
  }
}
