import LinkBtn from "@atoms/LinkBtn";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { multi_select, title } from "@/app/_types/notionAPITypes";
import RichText from "@molecules/RichText";
import RichTag from "@molecules/RichTag";

interface IPosts {
  posts: PageObjectResponse[];
  isAdmin: boolean;
}
// TODO: 로그인 유무로 나눠서 수정, 삭제 버튼 보이게 하기
const PostLists = ({ posts, isAdmin }: IPosts) => {
  const columns = ["title", "tag"];
  return (
    <div className="flex justify-center flex-wrap gap-2 ">
      {posts.map((post: PageObjectResponse) => {
        const lastEdit = new Date(post.last_edited_time);

        const id = post.id;
        const properties = post.properties;
        const title = (properties[columns[0]] as title).title;
        const tag = (properties[columns[1]] as multi_select).multi_select;
        return (
          <LinkBtn
            key={id}
            href={`/posts/${id}`}
            className="flex flex-col gap-2 relative  p-2 rounded-2xl shadow-md transition-scale duration-500 w-1/2 h-[400px] min-w-[360px]
          dark:bg-sky-300 bg-sky-100 hover:scale-110 hover:shadow-2xl hover:z-10"
          >
            <div className="w-full h-3/4 bg-gray-500 rounded-xl"></div>
            <RichText textInfo={title} type="thumnail" />
            <RichTag tagInfo={tag} />
            <span className="text-end"> {lastEdit.toLocaleString()}</span>
          </LinkBtn>
        );
      })}
    </div>
  );
};

export default PostLists;
