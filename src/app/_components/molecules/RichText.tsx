"use client";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import styled from "styled-components";
import { AnnotationResponse } from "@/app/_types/notionAPITypes";
import Link from "next/link";

const RichText = ({
  textInfo,
  type,
}: {
  textInfo: RichTextItemResponse[];
  type: string;
}) => {
  return (
    <div className="flex flex-wrap">
      {textInfo.map((textInfo, idx) => {
        if (textInfo.type === "text") {
          const { text, annotations, plain_text, href } = textInfo;

          if (text.link)
            return <SLink href={text.link.url}>{plain_text}</SLink>;

          if (type === "title")
            return <div className="text-[4rem]">{plain_text}</div>;
          if (type === "heading_1") return <h1>{plain_text}</h1>;
          if (type === "heading_2") return <h2>{plain_text}</h2>;
          if (type === "heading_3") return <h3>{plain_text}</h3>;

          return (
            <SRichText key={idx} type={type} annotations={annotations}>
              {plain_text}
            </SRichText>
          );
        } else return "";
      })}
    </div>
  );
};

const SRichText = styled.div<{
  type: string;
  annotations: AnnotationResponse;
}>`
  display: inline-block;
  font-weight: ${({ annotations }) => (annotations.bold ? "1.5rem" : "1rem")};
  font-style: ${({ annotations }) =>
    annotations.italic ? "italic" : "normal"};
  text-decoration: ${({ annotations }) =>
    annotations.strikethrough ? "line-through" : "none"};
  text-decoration: ${({ annotations }) =>
    annotations.underline ? "underline" : "none"};
  color: ${({ annotations }) => annotations.color};
`;

const SLink = styled(Link)`
  text-decoration: underline;
  color: gray;
`;

export default RichText;
