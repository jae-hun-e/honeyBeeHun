const RichText = ({ textInfo }) => {
  const { type, text, annotations, plain_text, href } = textInfo;

  return <div> {plain_text}</div>;
};

export default RichText;
