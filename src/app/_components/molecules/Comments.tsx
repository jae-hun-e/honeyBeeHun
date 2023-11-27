"use client";
import { useEffect, useRef } from "react";

interface IAttr {
  [key: string]: string;
}
const attr: IAttr = {
  src: "https://giscus.app/client.js",
  crossOrigin: "anonymous",
  async: "true",
  "data-repo": "jae-hun-e/honeyBeeHun",
  "data-repo-id": "R_kgDOKpOvjA",
  "data-category": "Announcements",
  "data-category-id": "DIC_kwDOKpOvjM4CbSM3",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "top",
  "data-theme": "preferred_color_scheme",
  "data-lang": "ko",
  "data-loading": "lazy",
};

interface IProps {
  className?: string;
}
const Comments = async ({ className }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const commentElement = document.createElement("script");
    Object.keys(attr).forEach((key) =>
      commentElement.setAttribute(key, attr[key])
    );
    ref.current.appendChild(commentElement);
  }, []);

  return <div ref={ref} className={className} />;
};

export default Comments;
