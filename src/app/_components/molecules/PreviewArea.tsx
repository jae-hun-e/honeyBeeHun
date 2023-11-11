"use client";
import { useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  content: string;
  height: number;
}
const PreviewArea = ({ title, content, height }: IProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    contentRef.current &&
      (contentRef.current.scrollTop = contentRef.current.scrollHeight);
  }, [content]);

  return (
    <div>
      <h1
        dangerouslySetInnerHTML={{
          __html: title ? title : "제목을 입력해 주세요",
        }}
        className="my-3"
      />
      <div>
        <PreviewContent
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: content }}
          className="pt-[90px] overflow-y-auto"
          height={height - 20}
        />
      </div>
    </div>
  );
};

export default PreviewArea;

interface ILayout {
  width?: number;
  height?: number;
}
const PreviewContent = styled.div<ILayout>`
  height: ${(props) => `${props.height}px`};
`;
