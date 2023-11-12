"use client";
import EditorArea from "@molecules/EditorArea";
import PreviewArea from "@molecules/PreviewArea";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@atoms/Button";
import { useRouter } from "next/navigation";
import { request } from "@/app/_services/dataFetch";

interface IProps {
  initPostContent?: {
    title: string;
    content: string;
  };
}
// TODO: 디바운스 3초로 저장하기
export default function CreatePost({ initPostContent }: IProps) {
  const router = useRouter();
  const initDate = {
    title: "제목을 입력해 주세요",
    content: "내용을 입력해 주세요.",
    height: 500,
  };

  const editorRef = useRef<Editor | null>(null);

  const [title, setTitle] = useState(
    initPostContent ? initPostContent.title : initDate.title
  );
  const [content, setContent] = useState(
    initPostContent ? initPostContent.content : initDate.content
  );

  const onSubmitContent = async () => {
    try {
      const res = await request("/api/post/create", "POST", {
        title,
        content,
      });

      router.push("/posts");
    } catch (e) {
      console.log(e);
    }
  };

  const onSaveContent = () => {
    if (editorRef.current) {
      setContent(() => editorRef.current && editorRef.current.getContent());
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex w-full gap-3">
        <div className="sm:w-1/2 w-full" data-id="content">
          <input
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
            className="text-2xl my-3"
          />
          <EditorArea
            onSave={onSaveContent}
            initialValue={content}
            editorRef={editorRef}
            size={{ height: initDate.height }}
          />
        </div>
        <div className="sm:w-1/2 sm:block hidden" data-id="content">
          <PreviewArea
            title={title}
            content={content}
            size={{ height: initDate.height }}
          />
        </div>
      </div>
      <Button onClick={onSubmitContent} styleProps="text-2xl border-2 block">
        submit
      </Button>
    </div>
  );
}
