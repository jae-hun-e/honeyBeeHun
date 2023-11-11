import { WithId } from "mongodb";
import { IPostData } from "@/app/_types/postType";
import PostThumbnail from "@organisms/PostThumbnail";

interface IPosts {
  posts: WithId<IPostData>[];
}
// TODO: 로그인 유무로 나눠서 수정, 삭제 버튼 보이게 하기
const PostLists = ({ posts }: IPosts) => {
  return (
    <>
      {posts.map(({ _id, title }) => (
        <div key={_id.toString()} className="flex gap-5">
          <PostThumbnail _id={_id.toString()} title={title} />
          <div>수정</div>
          <div>삭제</div>
        </div>
      ))}
    </>
  );
};

export default PostLists;
