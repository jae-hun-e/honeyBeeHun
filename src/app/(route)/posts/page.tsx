import { connectDB } from "@/app/_services/datebaseConnect";
import PostLists from "@organisms/PostLists";
import { IPostData } from "@/app/_types/postType";
import Span from "@atoms/Span";
import { Size, Weight } from "@/app/_types/globalEnum";
import LinkBtn from "@molecules/LinkBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";

export const dynamic = "force-dynamic";
export default async function Posts() {
  const db = (await connectDB).db("blog");
  const posts = await db.collection<IPostData>("posts").find().toArray();

  // TODO : 로그인 유무 recoil로 전역관리 하기
  const userData: { user: { id: string; email: string } } | null =
    await getServerSession(authOptions as any);

  const isAdmin = !!userData && userData.user.email === process.env.ADMIN_ID;
  return (
    <div className="flex flex-col gap-4">
      {isAdmin && (
        <div className="flex m-10 fixed right-2 z-10">
          <LinkBtn url={`/admin/add`}>
            <Span
              text={"post 쓰자!"}
              styleProps="rounded-xl p-2 bg-red-400 shadow-md pointer"
              weight={Weight.regular}
              size={Size.large}
            />
          </LinkBtn>
        </div>
      )}
      <div className="flex flex-col items-center ">
        <Span text={"posts"} size={Size.extraLarge} weight={Weight.bold} />
        <PostLists posts={posts} isAdmin={isAdmin} />
      </div>

      {/*  todo 관리자만 글 추가 할 수 있도록!*/}
    </div>
  );
}
