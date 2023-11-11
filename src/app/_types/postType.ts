import { ObjectId } from "mongodb";

export interface IPostData {
  _id: ObjectId;
  date: Date;
  title: string;
  content: string;
}

export interface IMyInfo {
  _id: ObjectId;
  title: string;
  comments: string;
}
