interface IProps {
  content: string;
}
const PreviewArea = ({ content }: IProps) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default PreviewArea;
