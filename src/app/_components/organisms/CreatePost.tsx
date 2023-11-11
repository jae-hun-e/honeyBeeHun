"use client";
import EditorArea from "@molecules/EditorArea";
import PreviewArea from "@molecules/PreviewArea";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@atoms/Button";

// TODO: 디바운스 3초로 저장하기
export default function CreatePost() {
  const initDate = {
    initialValue: "내용을 입력해 주세요.",
    size: 500,
  };

  const editorRef = useRef<Editor | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(initDate.initialValue);

  const onSubmitContent = () => {
    editorRef.current && console.log(editorRef.current.getContent());
  };

  const onSaveContent = () => {
    if (editorRef.current) {
      setContent(() => editorRef.current.getContent());
    }
  };
  // useEffect(() => {
  //   onSaveContent();
  // }, [content]);

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex w-full gap-3">
        <div className="w-1/2" data-id="content">
          <input
            onChange={() => {}}
            placeholder="제목을 입력해 주세요"
            className="text-2xl my-3"
          />
          <EditorArea
            onSave={onSaveContent}
            initialValue={initDate.initialValue}
            editorRef={editorRef}
            height={initDate.size}
          />
        </div>
        <div className="w-1/2" data-id="content">
          <PreviewArea title={title} content={content} height={initDate.size} />
        </div>
      </div>
      <Button onClick={onSubmitContent}>submit</Button>
    </div>
  );
}
