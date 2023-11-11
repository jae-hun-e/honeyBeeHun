import CreatePost from "@organisms/CreatePost";

export default function AddPost() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <h1 className="text-center mt-10">포스트 추가 페이지</h1>
      <CreatePost />
    </div>
  );
}
