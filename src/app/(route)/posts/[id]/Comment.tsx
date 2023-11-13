"use client";
import React, { useEffect, useState } from "react";
import { ObjectId } from "mongodb";

interface IData {
  _id: ObjectId;
  content: string;
  parent_id: ObjectId;
}

const Comment = ({ id }: { id: string }) => {
  const [comment, setComment] = useState<string>("");
  const [data, setData] = useState<IData[] | null>(null);

  useEffect(() => {
    fetch(`/api/post/comment?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      <div>
        {data ? (
          !!data.length ? (
            data.map((comment: IData) => (
              <div key={comment._id.toString()}>
                <div>내용 : {comment.content}</div>
              </div>
            ))
          ) : (
            <div>댓글이 없습니다.</div>
          )
        ) : (
          <div>로딩중 ...</div>
        )}
      </div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={(e: React.MouseEvent) => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({ comment, id }),
          })
            .then((res) => res.json())
            .then((res) => {
              if (!data) return;
              setData((prev) => [...(prev as IData[]), res.data]);
            });
          const $input = (e.target as HTMLButtonElement)
            .previousSibling as HTMLInputElement;
          $input.value = "";
          $input.focus();
        }}
      >
        댓글등록
      </button>
    </div>
  );
};

export default Comment;
