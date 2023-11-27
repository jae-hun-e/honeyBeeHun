import { IPostData } from "@/app/_types/postType";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import { getNotionPosts } from "@/app/_lib/notionPages";
import RichText from "@molecules/RichText";
import RichTag from "@molecules/RichTag";
import Link from "next/link";

const columns = ["title", "tag"];
export const dynamic = "force-dynamic";
export default async function Posts() {
  const posts = await getNotionPosts();

  // TODO : 로그인 유무 recoil로 전역관리 하기
  const userData: { user: { id: string; email: string } } | null =
    await getServerSession(authOptions as any);

  const isAdmin = !!userData && userData.user.email === process.env.ADMIN_ID;
  return (
    <div className="flex flex-col gap-4">
      {/*  todo 관리자만 글 추가 할 수 있도록!*/}
      {posts.map((post) => {
        const id = post.id;
        const properties = post.properties;
        const title = properties[columns[0]].title[0];
        const tag = properties[columns[1]].multi_select[0];

        return (
          <Link key={id} href={`/posts/${id}`}>
            <RichText textInfo={title} />
            <RichTag tagInfo={tag} />
          </Link>
        );

        // return richText(title);
      })}
    </div>
  );
}
