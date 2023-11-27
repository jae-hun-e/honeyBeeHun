import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const RichText = ({ textInfo }: { textInfo: RichTextItemResponse[] }) => {
  return (
    <div>
      {textInfo.map((textInfo, idx) => {
        if (textInfo.type === "text") {
          const { type, text, annotations, plain_text, href } = textInfo;
          return <div key={idx}>{plain_text}</div>;
        } else return "";
      })}
    </div>
  );
};

export default RichText;
