import { Dispatch, FC, ReactNode } from "react";
import CompoundContext from "@/app/_hooks/useCompoundContext";
import Input, { IInputProps } from "@atoms/Input";
import Label, { ILabelProps } from "@atoms/Label";
import Button, { IButtonProps } from "@atoms/Button";

const SearchBarInput: FC<IInputProps> = ({ ...props }) => {
  return <Input {...props} />;
};

const SearchBarLabel: FC<ILabelProps> = ({ className, type, children }) => {
  return (
    <Label className={className} type={type}>
      {children}
    </Label>
  );
};

const SearchBarButton: FC<IButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

interface IProps {
  children: ReactNode;
  className?: string;
  shareState?: {
    state: any;
    setState: Dispatch<any>;
  };
}

const SearchBar = ({ children, className, shareState }: IProps) => {
  return (
    <CompoundContext.Provider value={{ shareState }}>
      <div className={className}>{children}</div>
    </CompoundContext.Provider>
  );
};

SearchBar.input = SearchBarInput;
SearchBar.label = SearchBarLabel;
SearchBar.button = SearchBarButton;

export default SearchBar;
