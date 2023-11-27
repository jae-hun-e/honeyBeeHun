import { getServerSession } from "next-auth";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import { getNotionPosts } from "@/app/_lib/notionPages";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import PostLists from "@organisms/PostLists";

export const dynamic = "force-dynamic";
export default async function Posts() {
  const posts = (await getNotionPosts()) as PageObjectResponse[];

  // TODO : 로그인 유무 recoil로 전역관리 하기
  const userData: { user: { id: string; email: string } } | null =
    await getServerSession(authOptions as any);
  const isAdmin = !!userData && userData.user.email === process.env.ADMIN_ID;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <PostLists posts={posts} isAdmin={isAdmin} />
    </div>
  );
}
