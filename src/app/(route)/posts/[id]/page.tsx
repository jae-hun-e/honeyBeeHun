import { connectDB } from "@/app/_services/datebaseConnect";
import { ObjectId } from "bson";

interface IPostData {
  _id: ObjectId;
  title: string;
  content: string;
  date: Date;
}

export default async function DetailPost({
  params,
}: {
  params: { id: string };
}) {
  const db = (await connectDB).db("blog");
  const data = await db
    .collection<IPostData>("posts")
    .findOne({ _id: new ObjectId(params.id) });

  if (data === null) return <div>없는 글이에요</div>;

  const { title, content, date } = data;

  return (
    <div className="w-full flex flex-col items-center mt-20 ">
      <div className="w-5/6 flex flex-col gap-5 border-2 rounded-xl p-4">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-center"
        ></h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
