import { getPageContents, getPageProperties } from "@/app/_services/notionAPI";
import RichText from "@molecules/RichText";
import RichTag from "@molecules/RichTag";
import RichImage from "@molecules/RichImage";
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { multi_select, title } from "@/app/_types/notionAPITypes";
import Comments from "@molecules/Comments";

export default async function DetailPost({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const {
    properties: { tag, title },
  } = (await getPageProperties(id)) as PageObjectResponse;
  const titleInfo = (title as title).title;
  const tagInfo = (tag as multi_select).multi_select;

  const { results } = await getPageContents(id);

  return (
    <div className="w-full flex flex-col items-center mt-20 ">
      <div className="w-5/6 flex flex-col gap-5 border-2 rounded-xl p-4">
        {/*title*/}
        <div className="flex justify-center">
          <RichText textInfo={titleInfo} type="title" />
          <RichTag tagInfo={tagInfo} />
        </div>
        {/*content*/}
        {/*  todo any 타입 변경하기*/}
        {results.map((content: any, idx) => {
          if (content[content.type].type === "file") {
            return (
              <RichImage
                url={content[content.type].file.url}
                key={content.id}
              />
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
        <Comments className="w-full" />
      </div>
    </div>
  );
}
