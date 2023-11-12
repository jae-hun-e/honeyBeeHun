"use client";
import Button from "@atoms/Button";
import { request } from "@/app/_services/dataFetch";

interface IProps {
  _id: string;
  style?: Style;
}

interface Style {
  width?: string;
  height?: string;
}
const DeleteBtn = async ({ _id, style }: IProps) => {
  const onDelete = async () => {
    const res = await request(`/api/post/delete`, "DELETE", { _id });
  };

  return <Button onClick={onDelete}>❌</Button>;
};

export default DeleteBtn;
