"use client";
import Button from "@atoms/Button";
import Span from "@atoms/Span";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ToggleBtn from "@molecules/ToggleBtn";
import Link from "next/link";
import LinkBtn from "@atoms/LinkBtn";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // todo 초기 렌더링 전에 깜빡이는것을 막기 위해 똑같은 ui를 미리 띄우는데 이거를 개선해야함
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div className="flex justify-between items-center w-full h-[50px] ">
        <Span
          text="HBH"
          className="mr-10 no-underline text-black dark:text-white ml-3"
        />
        <div>
          <Span text="Posts" className="mr-10 text-black dark:text-white" />
          <Span text="Tags" className=" text-black dark:text-white" />
        </div>

        <div>
          <ToggleBtn onToggleClick={() => {}}></ToggleBtn>
        </div>
      </div>
    );
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between items-center w-full h-[50px] ">
      <LinkBtn href="/" className=" no-underline text-black dark:text-white">
        <Span text="HBH" className="ml-3" />
      </LinkBtn>
      <div>
        <LinkBtn href="/posts" className="mr-10 text-black dark:text-white">
          Posts
        </LinkBtn>
        <LinkBtn href="/tags" className="text-black dark:text-white">
          Tags
        </LinkBtn>
      </div>
      <div>
        <ToggleBtn onToggleClick={handleTheme}></ToggleBtn>
      </div>
    </div>
  );
};

export default Header;
