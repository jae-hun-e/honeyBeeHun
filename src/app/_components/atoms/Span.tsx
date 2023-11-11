import { Size, Weight } from "@/app/_types/globalEnum";

interface IProps {
  styleProps?: string;
  text: string;
  size?: Size;
  weight?: Weight;
}

const Span = ({
  styleProps,
  size = Size.regular,
  text,
  weight = Weight.regular,
}: IProps) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
  };
  return (
    <span className={styleProps} style={style}>
      {text}
    </span>
  );
};

export default Span;
