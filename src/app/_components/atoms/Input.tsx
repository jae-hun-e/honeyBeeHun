import { ChangeEvent, FC } from "react";

export interface IInputProps {
  className?: string;
  type?: InputType;
  defaultValue?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export enum InputType {
  text = "text",
  button = "button",
  checkbox = "checkbox",
  date = "date",
  dataLocal = "datatime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  password = "password",
  radio = "radio",
  range = "range",
}

const Input: FC<IInputProps> = ({
  className,
  type,
  defaultValue,
  id,
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      defaultValue={defaultValue}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
