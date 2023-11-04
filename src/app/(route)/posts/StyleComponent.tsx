"use client";

import styled from "styled-components";
import { useState } from "react";

interface props {
  width: string;
  height: string;
}

export default function CssTest({ width, height }: props) {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <SkeletonInner
        width={width}
        height={height}
        className={`text-3xl bg-[#4e893a] p-1 rounded-2xl`}
      >
        cnt : {cnt}
      </SkeletonInner>
      <button onClick={() => setCnt(cnt + 1)}>버튼</button>
    </div>
  );
}
const SkeletonInner = styled.div<props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
