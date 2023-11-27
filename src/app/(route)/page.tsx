import {
  getMyPage,
  getPageContents,
  getPageProperties,
} from "@/app/_services/notionAPI";
import RichText from "@molecules/RichText";
import RichImage from "@molecules/RichImage";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { multi_select, title } from "@/app/_types/notionAPITypes";

export default async function Home() {
  const { results } = await getMyPage();
  const {
    properties: { tag, title },
  } = (await getPageProperties(results[0].id)) as PageObjectResponse;
  const titleInfo = (title as title).title;
  const tagInfo = (tag as multi_select).multi_select;
  const { results: myInfo } = await getPageContents(results[0].id);
  return (
    <div className="w-5/6 flex flex-col gap-5 border-2 rounded-xl p-4">
      {/*title*/}
      <div className="flex justify-center">
        <RichText textInfo={titleInfo} type="title" />
      </div>
      {/*content*/}

      {/*  todo any 타입 변경하기*/}
      {myInfo.map((content: any, idx) => {
        if (content[content.type].type === "file") {
          return (
            <RichImage url={content[content.type].file.url} key={content.id} />
          );
        }
        const textInfo = content[content.type]?.rich_text;
        return (
          textInfo && (
            <RichText
              textInfo={textInfo}
              key={content.id}
              type={content.type}
            />
          )
        );
      })}
    </div>
  );
}
