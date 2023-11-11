import { connectDB } from "@/app/_services/datebaseConnect";
import Span, { Size, Weight } from "@atoms/Span";
import Link from "next/link";

export default async function Posts() {
  const db = (await connectDB).db("blog");
  let posts = await db.collection("posts").find().toArray();

  return (
    <div>
      {/*  todo 관리자만 글 추가 할 수 있도록!*/}
      <div>
        <Link href="/admin/add">
          <Span text={"관리자만 post add 가능!"} />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <Span text={"posts"} size={Size.extraLarge} weight={Weight.bold} />
        {posts.map(({ _id, title }) => (
          <Link key={_id.toString()} href={`/posts/${_id.toString()}`}>
            <Span text={title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
