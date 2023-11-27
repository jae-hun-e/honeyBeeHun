import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notionSecret = process.env.NOTION_API_KEY; //
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion: Client = new Client({
  auth: notionSecret,
});

export const getPageList = async (): Promise<QueryDatabaseResponse> => {
  const db: QueryDatabaseResponse = await notion.databases.query({
    database_id: notionDatabaseId,
    filter: {
      property: "myInfo",
      checkbox: {
        equals: false,
      },
    },
    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  } as QueryDatabaseParameters);
  return db;
};

export const getMyPage = async (): Promise<QueryDatabaseResponse> => {
  const db: QueryDatabaseResponse = await notion.databases.query({
    database_id: notionDatabaseId,
    filter: {
      property: "myInfo",
      checkbox: {
        equals: true,
      },
    },
  } as QueryDatabaseParameters);
  return db;
};

export const getPageProperties = async (
  id: string
): Promise<GetPageResponse> => {
  const post: GetPageResponse = await notion.pages.retrieve({ page_id: id });
  return post;
};

export const getPageContents = async (
  id: string
): Promise<ListBlockChildrenResponse> => {
  const post: ListBlockChildrenResponse = await notion.blocks.children.list({
    block_id: id,
  });
  return post;
};
