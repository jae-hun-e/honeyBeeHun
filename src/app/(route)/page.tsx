import { connectDB } from "@/app/_services/datebaseConnect";
import ImageUpload from "@molecules/ImageUpload";

export default async function Home() {
  return (
    <div>
      메인 페이지
      <ImageUpload />
    </div>
  );
}
