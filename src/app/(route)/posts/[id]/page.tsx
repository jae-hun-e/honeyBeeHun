import { connectDB } from "@/app/_services/datebaseConnect";
import { IPostData } from "@/app/_types/postType";
import { ObjectId } from "mongodb";
import Span from "@atoms/Span";

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

  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];

  return (
    <div className="w-full flex flex-col items-center mt-20 ">
      <div className="w-5/6 flex flex-col gap-5 border-2 rounded-xl p-4">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-center "
        ></h1>
        <Span text={`${year}년 ${month}월 ${day}일`} styleProps="text-end" />
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
