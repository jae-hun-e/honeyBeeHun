import { atom } from "recoil";

export interface IUserData {
  user: {
    id: number;
    email: string;
    image: string;
  };
}
export const userData = atom<IUserData | null>({
  key: "userinfo",
  default: null,
});
