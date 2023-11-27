import {
  getPageContents,
  getPageList,
  getPageProperties,
} from "@/app/_services/notionAPI";

export const getNotionPosts = async () => {
  const DB = await getPageList();
  const pageId = DB.results.map((post) => post.id);

  const pageProperties = await Promise.all(
    pageId.map(async (id) => await getPageProperties(id))
  );

  return pageProperties;
};
