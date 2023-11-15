import { FC, FormEvent, ReactNode } from "react";
export interface IButtonProps {
  className?: string;
  children?: ReactNode;
  text?: string;
  onClick(event: FormEvent<HTMLButtonElement>): void;
}

const Button: FC<IButtonProps> = ({ className, children, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
