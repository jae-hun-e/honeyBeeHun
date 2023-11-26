import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_API_KEY; //
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

async function addItems(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: notionDatabaseId || "" },
      properties: {
        title: [
          {
            text: {
              content: name, // 📌input에 작성한 텍스트가 표에 들어가게 됨
            },
          },
        ],
      },
    });
    console.log(response);
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  if (name === null) {
    return res.status(400).json({ message: "No name" });
  }
  try {
    await addItems(String(name));
    // 📌 성공 또는 실패시 보여질 메세지
    res.status(200).json({ message: `Success ${name} added` });
  } catch (error) {
    res.status(400).json({ message: `Failed ${name} added` });
  }
}
