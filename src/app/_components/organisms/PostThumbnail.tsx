import Span from "@atoms/Span";
import { Size, Weight } from "@/app/_types/globalEnum";
import LinkBtn from "@molecules/LinkBtn";
import Image from "@atoms/Image";
import { ReactNode } from "react";

interface IPost {
  _id: string;
  title: string;
  style?: string;
}

const PostLinkBtn = ({ _id, title, style }: IPost) => {
  return (
    <LinkBtn
      key={_id.toString()}
      url={`/posts/${_id.toString()}`}
      style={style}
    >
      <Span text={title} size={Size.large} weight={Weight.regular} />
    </LinkBtn>
  );
};

// TODO: 대표 사진 추가하기
const PostThumbnail = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-full">{children}</div>;
};

PostThumbnail.linkBtn = PostLinkBtn;
PostThumbnail.image = Image;

export default PostThumbnail;
