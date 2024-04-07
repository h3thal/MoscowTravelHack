import {JSX} from "react";
import {TitleProps} from "../types/main.ts";

const Title = ({title}: TitleProps): JSX.Element => {
  return (
    <h1 className={'title-page'}>
      {title}
    </h1>
  )
}

export default Title;
