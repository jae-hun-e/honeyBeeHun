"use client";

import { ThemeProvider as StyledComponentTheme } from "styled-components";
import { ThemeProvider as TailwindTheme } from "next-themes";
import StyledComponentsRegistry from "@/app/_styles/registry";
import theme from "@/app/_styles/theme";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <StyledComponentTheme theme={theme}>
        <TailwindTheme attribute="class">{props.children}</TailwindTheme>
      </StyledComponentTheme>
    </StyledComponentsRegistry>
  );
};

export default Providers;
