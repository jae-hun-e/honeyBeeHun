"use client";
import Button from "@atoms/Button";
import Span from "@atoms/Span";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ToggleBtn from "@molecules/ToggleBtn";
import Link from "next/link";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // todo 초기 렌더링 전에 깜빡이는것을 막기 위해 똑같은 ui를 미리 띄우는데 이거를 개선해야함
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div className="flex justify-between items-center w-full h-[50px] bg-white px-5">
        <Span text="HBH" />
        <div>
          <ToggleBtn onToggleClick={() => {}} text="현재 Dark모드"></ToggleBtn>
        </div>
      </div>
    );
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between items-center w-full h-[50px] bg-white px-5">
      <Span text="HBH" />
      <div>
        <Link
          href="/posts"
          className="mr-10 no-underline text-black dark:text-white"
        >
          Posts
        </Link>
        <Link
          href="/jjh"
          className="mr-10 no-underline text-black dark:text-white"
        >
          About Me
        </Link>
      </div>
      <div>
        <ToggleBtn
          onToggleClick={handleTheme}
          text={systemTheme ? "현재 Dark모드" : "현재 light모드"}
        ></ToggleBtn>
      </div>
    </div>
  );
};

export default Header;
