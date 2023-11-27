import CssTest from "@/app/(route)/test/StyleComponent";
import Compound from "@/app/(route)/test/Compound";
import Notion from "@/app/(route)/test/Notion";

export default function Posts() {
  return (
    <div>
      <CssTest width="200px" height="300px" />
      <Notion />
    </div>
  );
}
