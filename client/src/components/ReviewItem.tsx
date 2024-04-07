import {JSX, memo} from "react";
import {ReviewItemProps} from "../types/main.ts";

import chevronArrowSvg from '../assets/svg/chevron-right.svg';

const ReviewItem = memo(({msg}: ReviewItemProps): JSX.Element => {
  return (
    <div className={'review-item'}>
      <div className="review-item__header">
        <div className="rating">
          8
        </div>
        <div className={'user'}>
          <span className="user__type">Совет местного</span>
          <span className="user__name">Иван И.</span>
        </div>
      </div>
      <div className="review-item__body">
        <p className={'msg'}>
          {msg.length > 128 ? msg.slice(0, 128) + '...' : msg}
        </p>
        <a className={'link'}>Подробнее <img src={chevronArrowSvg} alt={'arrow'}/></a>
      </div>
    </div>
  )
});

export default ReviewItem;
