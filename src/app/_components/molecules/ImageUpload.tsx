"use client";
import { useState } from "react";

const ImageUpload = () => {
  let [src, setSrc] = useState("");
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          const fileName = encodeURIComponent(file.name);
          const res = await fetch(`/api/image/upload?file=${fileName}`).then(
            (res) => res.json()
          );
          console.log("res", res);

          // todo : createObjectURL로 변경해서 업로드 버튼 누른다음에 S3에 저장하기

          //S3 업로드
          const formData = new FormData();
          Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
          });
          let s3res = await fetch(res.url, {
            method: "POST",
            body: formData,
          });
          console.log("s3 업로드 결과", s3res);

          if (s3res.ok) {
            setSrc(s3res.url + "/" + fileName);
          } else {
            console.log("실패");
          }
        }}
      />

      {/*  Todo createObjectUrl 로 변경하기*/}
      <img src={src} />
    </div>
  );
};

export default ImageUpload;
