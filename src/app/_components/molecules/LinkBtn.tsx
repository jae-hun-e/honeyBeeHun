import Link from "next/link";
import React from "react";

interface IProps {
  url: string;
  style?: string;
  children?: React.ReactNode;
}

const LinkBtn = ({ children, style, url }: IProps) => {
  return (
    <Link href={url} className={style}>
      {children}
    </Link>
  );
};

export default LinkBtn;
