import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject, useEffect, useState } from "react";
import { request } from "@/app/_services/dataFetch";
import header from "@organisms/Header";

interface IProps {
  onSave(): void;
  editorRef: MutableRefObject<Editor | null>;
  initialValue: string;
  size: Size;
}
interface Size {
  height?: number;
  width?: number;
}
const EditorArea = ({ onSave, initialValue, editorRef, size }: IProps) => {
  const url = "/api/image/test3";

  const handleImageUpload_1 = async (
    blobInfo: any,
    success: any,
    failure: any
  ) => {
    const formData = new FormData();
    const blob = blobInfo.blob();
    const fileName = blobInfo.filename();
    const file = new File([blob], fileName, { type: blob.type });
    // console.log("file", file);

    // Blob 객체를 URL로 변환
    const imageUrl = URL.createObjectURL(blob);
    // success(imageUrl);
  };

  const handleImageUpload = async (
    blobInfo: any,
    success: any,
    failure: any
  ) => {
    // const file = new File([blobInfo.blob()], blobInfo.filename(), {
    //   type: blobInfo.blob().type,
    // });
    // const url = URL.createObjectURL(file);
    // console.log(file, url);
    // success(url);

    const formData = new FormData();
    // 이미지 파일 추가
    formData.append("image", blobInfo.blob(), blobInfo.filename());

    fetch(url, {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("이미지 업로드 실패");
        }
        return response.json();
      })
      .then((data) => {
        console.log("성공!", data.imageUrl);
        success(data.imageUrl);
      })
      .catch((error) => {
        console.error(error);
        // failure("이미지 업로드 실패");
      });
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
    "wordcount",
  ];
  const toolbar = [
    "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | ",
  ];
  const content_style =
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }";

  const init = {
    language: "ko_KR",
    height: size.height || 500,
    width: size.width || "100%",
    menubar: false,
    plugins,
    toolbar,
    content_style,
    // images_upload_url: url,
    images_upload_handler: handleImageUpload,
  };

  const [content, _] = useState(initialValue);

  // TODO: onKeyUp일때만 즉시 반영됨, onKeyDown, onKeyPress는 반영 안됨 이들의 차이를 알아보자
  return (
    <div className="flex">
      <Editor
        apiKey={process.env.EDITOR_KEY}
        onKeyUp={onSave}
        onInit={(_, editor) => editorRef && (editorRef.current = editor)}
        initialValue={content}
        init={init}
      />
    </div>
  );
};

export default EditorArea;
