import { connectDB } from "@/app/_services/datebaseConnect";
import { IPostData } from "@/app/_types/postType";
import { ObjectId } from "mongodb";
import Span from "@atoms/Span";
import Comment from "@/app/(route)/posts/[id]/Comment";
import { getPageContents, getPageProperties } from "@/app/_services/notionAPI";
import RichText from "@molecules/RichText";
import RichTag from "@molecules/RichTag";
import RichImage from "@molecules/RichImage";

export default async function DetailPost({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const {
    properties: { tag, title },
  } = await getPageProperties(id);
  const titleInfo = title.title[0];
  const tagInfo = tag.multi_select[0];

  const { results } = await getPageContents(id);

  return (
    <div className="w-full flex flex-col items-center mt-20 ">
      <div className="w-5/6 flex flex-col gap-5 border-2 rounded-xl p-4">
        {/*title*/}
        <div className="flex justify-center">
          <RichText textInfo={titleInfo} />
          <RichTag tagInfo={tagInfo} />
        </div>
        {/*content*/}
        {results.map((content, idx) => {
          if (content[content.type].type === "file") {
            return (
              <RichImage
                url={content[content.type].file.url}
                key={content.id}
              />
            );
          }

          const textInfo = content[content.type]?.rich_text[0];
          console.log(textInfo);

          return textInfo && <RichText textInfo={textInfo} key={content.id} />;
        })}
      </div>

      <div>댓글 기능</div>
    </div>
  );
}
