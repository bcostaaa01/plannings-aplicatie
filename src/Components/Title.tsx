import React from "react";
import { TitleStyle } from "../styles";

export type TitleProps = {
  title: string;
  style: object;
};

export const Title: React.FC<TitleProps> = (props) => {
  return <h1 style={TitleStyle}>{props.title}</h1>;
};

const MemoizedTitle = React.memo(Title);

export default MemoizedTitle;
