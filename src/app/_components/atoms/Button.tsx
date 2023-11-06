import React from "react";

interface IProps {
  classProps?: string;
  children?: React.ReactNode;
  text?: string;
  onClick(event: React.FormEvent<HTMLButtonElement>): void;
}

const Button = ({ classProps, children, text, onClick }: IProps) => {
  return (
    <button className={classProps} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
