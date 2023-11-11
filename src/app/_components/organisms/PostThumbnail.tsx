import Span from "@atoms/Span";
import Link from "next/link";
import { Size, Weight } from "@/app/_types/globalEnum";

interface IPost {
  _id: string;
  title: string;
}

// TODO: 대표 사진 추가하기
const PostThumbnail = ({ _id, title }: IPost) => {
  return (
    <Link key={_id.toString()} href={`/posts/${_id.toString()}`}>
      <Span text={title} size={Size.small} weight={Weight.regular} />
    </Link>
  );
};
export default PostThumbnail;
