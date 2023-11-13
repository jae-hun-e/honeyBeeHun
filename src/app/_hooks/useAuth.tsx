"use client";
import { useRecoilState } from "recoil";
import { userData } from "@/app/_recoil/auth";
import { useEffect } from "react";

const useAuth = (user: any) => {
  const [info, setInfo] = useRecoilState(userData);

  useEffect(() => {
    setInfo(user);
  }, []);

  return [info, setInfo];
};

export default useAuth;
