import {JSX, memo} from "react";

import heartSvg from '../assets/svg/heart.svg';
import heartActiveSvg from '../assets/svg/heart-active.svg';
import {HeartButtonProps} from "../types/main";
import classNames from "classNames";

const HeartButton = memo(({isActive = false, onClick, size, onImage = false}: HeartButtonProps): JSX.Element => {
  return (
    <button className={classNames({
      'button-heart': true,
      'm': size === 'M',
      'l': size === 'L',
      'on-image': onImage,
    })} onClick={() => onClick()}>
      <img src={isActive ? heartActiveSvg : heartSvg} alt={'heart'}/>
    </button>
  )
});

export default HeartButton;
