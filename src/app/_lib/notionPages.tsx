import {
  getPageContents,
  getPageList,
  getPageProperties,
} from "@/app/_services/notionAPI";
import {
  GetPageResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const getNotionPosts = async (): Promise<GetPageResponse[]> => {
  const DB: QueryDatabaseResponse = await getPageList();
  const pageId = DB.results.map((post) => post.id);

  const pageProperties: GetPageResponse[] = await Promise.all(
    pageId.map(async (id) => await getPageProperties(id))
  );

  return pageProperties;
};
