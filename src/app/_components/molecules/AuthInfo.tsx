"use client";

import useAuth from "@/app/_hooks/useAuth";
import LoginBtn from "@molecules/LoginBtn";
import LogoutBtn from "@molecules/LogoutBtn";
import { IUserData } from "@/app/_recoil/auth";
import { SetterOrUpdater } from "recoil";

const AuthInfo = ({ user }: { user }) => {
  const [info] = useAuth(user);

  return (
    <>
      {info ? `로그인 성공${info.user.email}` : "로그인 해주세요"}
      {info ? <LogoutBtn /> : <LoginBtn />}
    </>
  );
};

export default AuthInfo;
