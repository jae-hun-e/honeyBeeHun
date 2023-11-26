import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_API_KEY; //
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});
export const getNotionDB = async () => {
  const db = await notion.databases.query({
    database_id: notionDatabaseId,
  });
  return db;
};

export const getPost = async (id: string) => {
  const post = await notion.pages.retrieve({ page_id: id });
  return post;
};

// block가져오기
export const getPostContent = async (id: string) => {
  // const post = await notion.blocks.retrieve({ block_id: id });
  const post = await notion.blocks.children.list({
    block_id: id,
  });
  return post;
};
