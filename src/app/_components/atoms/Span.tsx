import { Size, Weight } from "@/app/_types/globalEnum";

interface IProps {
  className?: string;
  text: string;
  size?: Size;
  weight?: Weight;
}

const Span = ({
  className,
  size = Size.regular,
  text,
  weight = Weight.regular,
}: IProps) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
  };
  return (
    <span className={className} style={style}>
      {text}
    </span>
  );
};

export default Span;
