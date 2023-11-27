import {
  getPageContents,
  getPageList,
  getPageProperties,
} from "@/app/_services/notionAPI";

const NotionTest = async () => {
  const DB = await getPageList();

  // DB에서 개별 page가져오기
  const pageId = DB.results.map((post) => post.id);
  console.log(await getPageProperties(pageId[0]));

  const pageProperties = await Promise.all(
    pageId.map(async (id) => await getPageProperties(id))
  );

  // const pageProperties = pageId.map(async (id) => await getPageProperties(id));

  // const pageContents = pageId.map(async (id) => await getPageContents(id));
  // console.log(pageProperties);
  // 글 가져오기!
  // console.log(postContent.results[0].paragraph.rich_text[0].text.content);
  //
  // console.log(postContent.results[1]["heading_2"].rich_text[0]);

  // const tmp = postContent.results.map((data) => [
  //   data.type,
  //   data?.paragraph?.rich_text.text,
  // ]);
  // console.log(tmp);

  return <div>test</div>;
};

export default NotionTest;
