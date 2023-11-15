import { FC, ReactNode } from "react";

export interface ILabelProps {
  className?: string;
  type?: string;
  children?: ReactNode;
}

const Label: FC<ILabelProps> = ({ className, type, children }) => {
  return (
    <label className={className} htmlFor={type}>
      {children}
    </label>
  );
};

export default Label;
