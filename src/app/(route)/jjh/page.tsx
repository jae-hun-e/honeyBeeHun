import { connectDB } from "@/app/_services/datebaseConnect";
import Span from "@atoms/Span";

export default async function AboutMe() {
  const db = (await connectDB).db("blog");
  const result = await db.collection("myInfo").find().toArray();
  const { name, content } = result[0];

  return (
    <div>
      <Span text={name} />
      <Span text={content} />
    </div>
  );
}
