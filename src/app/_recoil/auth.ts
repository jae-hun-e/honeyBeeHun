import { atom } from "recoil";

interface IUserData {
  user: {
    id: number;
    email: string;
  };
}
export const userData = atom<IUserData>({
  key: "userinfo",
  default: {
    user: {
      id: 0,
      email: "",
    },
  },
});
