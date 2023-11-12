import CreatePost from "@organisms/CreatePost";
import { connectDB } from "@/app/_services/datebaseConnect";
import { IPostData } from "@/app/_types/postType";
import { ObjectId } from "mongodb";

export default async function EditPost({ params }: { params: { id: string } }) {
  const db = (await connectDB).db("blog");
  const data = await db
    .collection<IPostData>("posts")
    .findOne({ _id: new ObjectId(params.id) });

  if (data === null) return <div>없는 글이에요</div>;
  const { title, content } = data;

  return (
    <div className="flex flex-col justify-center gap-10">
      <h1 className="text-center mt-10">포스트 수정 페이지</h1>
      <CreatePost initPostContent={{ title, content }} />
    </div>
  );
}
