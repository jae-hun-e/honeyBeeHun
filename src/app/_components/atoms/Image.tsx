import React from "react";

interface IProps {
  classProps?: string;
  type?: Type;
  src: string;
}

export enum Type {
  background = "background",
  img = "img",
}

const image: React.FC<IProps> = ({ classProps, src, type = Type.img }) => {
  return type === Type.img ? (
    <img className={classProps} src={src} />
  ) : (
    <div className={classProps} style={{ backgroundImage: `url(${src})` }} />
  );
};

export default image;
