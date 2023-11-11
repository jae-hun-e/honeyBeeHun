import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject } from "react";

interface IProps {
  onSave(): void;
  editorRef: MutableRefObject<Editor | null>;
  initialValue: string;
  height: number;
}
const EditorArea = ({ onSave, initialValue, editorRef, height }: IProps) => {
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
    "wordcount",
  ];
  const toolbar = [
    "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat ",
  ];
  const content_style =
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }";

  const init = {
    language: "ko_KR",
    height,
    width: "100%",
    menubar: false,
    plugins,
    toolbar,
    content_style,
  };

  // TODO: onKeyUp일때만 즉시 반영됨, onKeyDown, onKeyPress는 반영 안됨 이들의 차이를 알아보자
  return (
    <div className="flex">
      <Editor
        apiKey={process.env.EDITOR_KEY}
        onKeyUp={onSave}
        onInit={(_, editor) => editorRef && (editorRef.current = editor)}
        initialValue={initialValue}
        init={init}
      />
    </div>
  );
};

export default EditorArea;
