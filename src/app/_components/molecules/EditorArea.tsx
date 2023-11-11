import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject } from "react";

interface IProps {
  onSubmit(): void;
  onSave(): void;
  editorRef: MutableRefObject<Editor | null>;
  initialValue: string;
}
const EditorArea = ({ onSubmit, onSave, initialValue, editorRef }: IProps) => {
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
      <Editor
        apiKey={process.env.EDITOR_KEY}
        onKeyDown={onSave}
        onInit={(_, editor) => editorRef && (editorRef.current = editor)}
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
  );
};

export default EditorArea;
