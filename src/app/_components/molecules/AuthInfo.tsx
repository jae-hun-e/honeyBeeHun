"use client";

import useAuth from "@/app/_hooks/useAuth";
import LoginBtn from "@molecules/LoginBtn";
import LogoutBtn from "@molecules/LogoutBtn";

const AuthInfo = ({ user }: { user: any }) => {
  const [info] = useAuth(user);

  return (
    <>
      {info ? `로그인 성공${info.user.email}` : "로그인 해주세요"}
      {info ? <LogoutBtn /> : <LoginBtn />}
    </>
  );
};

export default AuthInfo;
