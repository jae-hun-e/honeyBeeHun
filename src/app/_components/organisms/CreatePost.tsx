"use client";
import EditorArea from "@molecules/EditorArea";
import PreviewArea from "@molecules/PreviewArea";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@atoms/Button";
import { useRouter } from "next/navigation";
import { request } from "@/app/_services/dataFetch";

// TODO: 디바운스 3초로 저장하기
export default function CreatePost() {
  const router = useRouter();
  const initDate = {
    initialValue: "내용을 입력해 주세요.",
    height: 500,
  };

  const editorRef = useRef<Editor | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(initDate.initialValue);

  const onSubmitContent = async () => {
    try {
      const res = await request("/api/post/addPost", "POST", {
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
        <div className="w-1/2" data-id="content">
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해 주세요"
            className="text-2xl my-3"
          />
          <EditorArea
            onSave={onSaveContent}
            initialValue={initDate.initialValue}
            editorRef={editorRef}
            size={{ height: initDate.height }}
          />
        </div>
        <div className="w-1/2 " data-id="content">
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
