import { getNotionPosts } from "@/app/_lib/notionPages";

export default async function Tags() {
  const tags = await getNotionPosts();
  return <div></div>;
}
