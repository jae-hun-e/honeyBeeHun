import { connectDB } from "@/app/_services/datebaseConnect";
import Link from "next/link";
import PostLists from "@organisms/PostLists";
import { IPostData } from "@/app/_types/postType";
import Span from "@atoms/Span";
import { Size, Weight } from "@/app/_types/globalEnum";

export default async function Posts() {
  const db = (await connectDB).db("blog");
  const posts = await db.collection<IPostData>("posts").find().toArray();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Span text={"posts"} size={Size.extraLarge} weight={Weight.bold} />
        <PostLists posts={posts} />
      </div>

      {/*  todo 관리자만 글 추가 할 수 있도록!*/}
      <div className="flex justify-center mt-10">
        <Link href="/admin/add">
          <Span text={"관리자만 post add 가능!"} styleProps="border-2 " />
        </Link>
      </div>
    </div>
  );
}
