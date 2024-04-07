import {JSX, memo} from "react";

import testImg from '../assets/images/test.jpeg';
import HeartButton from "./HeartButton.tsx";

const MiniCard = (): JSX.Element => {
  return (
    <div className={'mini-card'}>
      <img className={'mini-card__image'} src={testImg} alt="preview"/>
      <div className="mini-card__overlay">
        <HeartButton isActive={false} onClick={() => {
        }} size={'M'} onImage/>
        <div className="footer">
          <span className="footer__tag">Музей</span>
          <div className="footer__title">Галерея картин Рубенса</div>
        </div>
      </div>
    </div>
  )
}


export default memo(MiniCard);
