import React from "react";

interface IProps {
  styleProps?: string;
  children?: React.ReactNode;
  text?: string;
  onClick(event: React.FormEvent<HTMLButtonElement>): void;
}

const Button = ({ styleProps, children, text, onClick }: IProps) => {
  return (
    <button className={styleProps} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
