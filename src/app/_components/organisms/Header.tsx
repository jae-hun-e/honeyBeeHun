"use client";
import Button from "@atoms/Button";
import P from "@atoms/P";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // todo 초기 렌더링 전에 깜빡이는것을 막기 위해 똑같은 ui를 미리 띄우는데 이거를 개선해야함
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div className="w-full h-[50px]">
        <P text="현재 모드" />
        <P text="header" />
      </div>
    );
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full h-[50px] dark:bg-violet-300">
      <Button onClick={handleTheme}>
        {systemTheme ? "현재 Dark모드" : "현재 light모드"}
      </Button>
      <P text="header" />
    </div>
  );
};

export default Header;
