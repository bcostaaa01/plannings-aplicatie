import React from "react";
import { SubtitleStyle } from "../styles";

export type SubtitleProps = {
    subtitle: string;
    style: object;
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
    return (
        <h3 style={SubtitleStyle}>{props.subtitle}</h3>
    )
}

const MemoizedSubtitle = React.memo(Subtitle);

export default MemoizedSubtitle;