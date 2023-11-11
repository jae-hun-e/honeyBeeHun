import { MutableRefObject, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@atoms/Button";

interface IProps {
  onSubmit(): void;
}
const EditorArea = ({ onSubmit }: IProps) => {
  const editorRef = useRef<Editor | null>(null);
  const initialValue = "내용을 입력해 주세요.";
  const [content, setContent] = useState(initialValue);
  const onSaveContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
      document.querySelector("[data-id=content]").innerHTML = content;
    }
  };

  const plugins = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "code",
    "help",
    "wordcount",
  ];

  const toolbar = [
    "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help",
  ];

  return (
    <div className="flex">
      <div className="w-1/2">
        <Editor
          apiKey={process.env.EDITOR_KEY}
          onKeyPress={onSaveContent}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={initialValue}
          init={{
            language: "ko_KR",
            height: 500,
            width: "100%",
            menubar: false,
            plugins,
            toolbar,
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <div className="w-1/2" data-id="content"></div>
      <Button onClick={onSubmit}>submit</Button>
    </div>
  );
};

export default EditorArea;
