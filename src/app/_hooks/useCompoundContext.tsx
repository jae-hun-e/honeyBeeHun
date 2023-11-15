import { createContext, useContext } from "react";

const CompoundContext = createContext<any | null>(null);
export const useCompoundContext = () => {
  const context = useContext(CompoundContext);

  if (!context) {
    throw new Error("CompoundContext is not found");
  }
  return context;
};

export default CompoundContext;
