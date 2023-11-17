import { WithId } from "mongodb";
import { IPostData } from "@/app/_types/postType";
import LinkBtn from "@molecules/LinkBtn";
import DeleteBtn from "@molecules/DeleteBtn";
import PostThumbnail from "@organisms/PostThumbnail";

interface IPosts {
  posts: WithId<IPostData>[];
  isAdmin: boolean;
}
// TODO: 로그인 유무로 나눠서 수정, 삭제 버튼 보이게 하기
const PostLists = ({ posts, isAdmin }: IPosts) => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {posts.map(({ _id, title }) => (
        <div
          key={_id.toString()}
          className="flex relative w-[300px] h-[100px]  p-2  rounded-2xl shadow-md transition-scale duration-500
          dark:bg-sky-300 bg-sky-100 hover:scale-110 hover:shadow-lg"
        >
          <PostThumbnail>
            <PostThumbnail.linkBtn _id={_id.toString()} title={title} />
          </PostThumbnail>
          {isAdmin && (
            <div className="absolute bottom-1 left-1 flex gap-2">
              <LinkBtn url={`/admin/edit/${_id.toString()}`}>✏️</LinkBtn>
              <DeleteBtn _id={_id.toString()} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostLists;
