"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/app/_lib/registry";
import theme from "@/app/_styles/theme";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
