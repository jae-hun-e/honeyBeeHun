interface IProps {
  styleProps?: string;
  text: string;
  size?: Size;
  weight?: Weight;
}

export enum Size {
  small = 14,
  regular = 16,
  large = 20,
  extraLarge = 30,
}

export enum Weight {
  regular = 400,
  bold = 700,
  extraBold = 800,
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
    <p className={styleProps} style={style}>
      {text}
    </p>
  );
};

export default Span;
