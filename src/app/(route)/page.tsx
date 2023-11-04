import { connectDB } from "@/app/_services/datebaseConnect";

export default async function Home() {
  const db = (await connectDB).db("blog");
  let result = await db.collection("posts").find().toArray();
  console.log("DB 연결 완료", result);

  return <div>메인 페이지</div>;
}
