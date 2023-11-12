import { WithId } from "mongodb";
import { IPostData } from "@/app/_types/postType";
import PostThumbnail from "@organisms/PostThumbnail";
import LinkBtn from "@molecules/LinkBtn";
import DeleteBtn from "@molecules/DeleteBtn";
import EditorArea from "@molecules/EditorArea";
import CreatePost from "@organisms/CreatePost";

interface IPosts {
  posts: WithId<IPostData>[];
}
// TODO: 로그인 유무로 나눠서 수정, 삭제 버튼 보이게 하기
const PostLists = ({ posts }: IPosts) => {
  const onSubmitEdit = async () => {
    console.log("submit edit");
  };
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {posts.map(({ _id, title }) => (
        <div
          key={_id.toString()}
          className="flex relative w-[300px] h-[100px] bg-white p-2 border-2 rounded-2xl shadow-md transition-opacity duration-500"
        >
          <PostThumbnail _id={_id.toString()} title={title} />
          <div className="absolute bottom-1 right-1 flex gap-2">
            <LinkBtn url={`/admin/edit/${_id.toString()}`}>✏️</LinkBtn>
            <DeleteBtn _id={_id.toString()} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
