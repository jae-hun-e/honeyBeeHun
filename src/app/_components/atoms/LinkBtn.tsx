import Link from "next/link";
import React from "react";
import Button from "@atoms/Button";
import { cls } from "@/app/_lib/utils";

interface IProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const LinkBtn = ({ children, className = "", href }: IProps) => {
  return (
    <Link
      href={href}
      className={cls("no-underline hover:cursor-pointer ", className)}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
