import Span from "@atoms/Span";
import { Size, Weight } from "@/app/_types/globalEnum";
import LinkBtn from "@molecules/LinkBtn";
import Image from "@atoms/Image";

interface IPost {
  _id: string;
  title: string;
  style?: string;
}

// TODO: 대표 사진 추가하기
const PostThumbnail = ({ _id, title }: IPost) => {
  return (
    <div className="w-full h-full">
      <LinkBtn
        key={_id.toString()}
        url={`/posts/${_id.toString()}`}
        style={"w-full h-full"}
      >
        <Span text={title} size={Size.large} weight={Weight.regular} />
      </LinkBtn>
      <div>이미지 추가</div>
    </div>
  );
};
export default PostThumbnail;
