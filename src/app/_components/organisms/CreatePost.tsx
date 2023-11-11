"use client";
import EditorArea from "@molecules/EditorArea";
import PreviewArea from "@molecules/PreviewArea";
import { MutableRefObject, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@atoms/Button";

export default function CreatePost() {
  const editorRef = useRef<Editor | null>(null);
  const onSubmitContent = () => {
    editorRef.current && console.log(editorRef.current.getContent());
  };
  const initialValue = "내용을 입력해 주세요.";
  const [content, setContent] = useState(initialValue);

  const onSaveContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2" data-id="content">
          <EditorArea
            onSubmit={onSubmitContent}
            onSave={onSaveContent}
            initialValue={initialValue}
            editorRef={editorRef}
          />
        </div>
        <div className="w-1/2" data-id="content">
          <PreviewArea content={content} />
        </div>
      </div>
      <Button onClick={onSubmitContent}>submit</Button>
    </>
  );
}
