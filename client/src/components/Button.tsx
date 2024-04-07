import {JSX} from "react";
import {ButtonProps} from "../types/main.ts";
import classNames from "classNames";

const Button = ({title, caption, type, size, onClick}: ButtonProps): JSX.Element => {
  const classListsButton = classNames({
    'caption': type === 'Caption',
    'primary': type === 'Primary',
    'secondary': type === 'Secondary',
    'secondary caption': type === 'Secondary-Caption',
    'secondary2': type === 'Secondary 2',
    'thetriary': type === 'Thetriary',
    'outline': type === 'Outline',
    'outline caption': type === 'Outline-Caption',
    'outline-yellow': type === 'Outline-Yellow',
    's': size === 'S',
    'm': size === 'M',
    'l': size === 'L'
  })
  return (
    <button className={'button ' + classListsButton} onClick={onClick}>
      {
        caption ? <div className={'caption'}>
          <span className={'first-line'}>{title}</span>
          <span className={'second-line'}>{caption}</span>
        </div> : title
      }
    </button>
  )
}

export default Button;
