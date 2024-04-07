import {JSX, useMemo} from "react";

import Button from "./Button.tsx";

import testimg from '../assets/images/test.jpeg';
import coinSvg from '../assets/svg/coin.svg';
import cameraSvg from '../assets/svg/camera.svg';
import markerSvg from '../assets/svg/marker-pin.svg';
import clockSvg from '../assets/svg/clock-fast-forward.svg';
import bookOpenSvg from '../assets/svg/book-open.svg';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {CardProps} from "../types/main.ts";
import HeartButton from "./HeartButton.tsx";

// import '../assets/scss/components/_card.scss'

const Card = ({bonus, discount, rating, onOpen, title}: CardProps): JSX.Element => {
  const sliceTitle = useMemo(() => {
    return title.slice(0, 34) + '...'
  }, [title]);
  return (
    <div className={'card'}>
      <div className={'card__photo'}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide><img src={testimg} alt={'test'}/></SwiperSlide>
          <SwiperSlide><img src={testimg} alt={'test'}/></SwiperSlide>
          <SwiperSlide><img src={testimg} alt={'test'}/></SwiperSlide>
          <SwiperSlide><img src={testimg} alt={'test'}/></SwiperSlide>
          <SwiperSlide><img src={testimg} alt={'test'}/></SwiperSlide>
        </Swiper>
        <div className="labels">
          <div className="labels__left">
            {rating && <div className="item rating">{rating}</div>}
            {discount && <div className={'item discount'}><span>Скидка {discount}%</span></div>}
            {bonus && <div className={'item bonus'}><img src={coinSvg} alt={'coin'}/></div>}
          </div>
          <div className="labels__right">
            <HeartButton isActive={false} onClick={() => {
            }} size={'M'} onImage/>
          </div>
        </div>
      </div>
      <div className={'card__body'}>
        <div className={'title'}>{sliceTitle}</div>
        <div className={'tags'}>
          <div className="tags__type">
            <img src={cameraSvg} alt={'camera'}/>
            Экскурсия
          </div>
          <div className="tags__geo">
            <img src={markerSvg} alt="geo"/>
            Москва
          </div>
          <div className="tags__time">
            <img src={clockSvg} alt="clock"/>
            1,5 часа
          </div>
          <div className="tags__list">
            <img src={bookOpenSvg} alt="book"/>
            Пешеходные, авторские, необычные
          </div>
        </div>
        <div className="actions">
          <Button type={'Caption'} title={'от 400 ₽'} caption={'Купить билеты'} size={'L'} onClick={onOpen}/>
        </div>
      </div>
    </div>
  )
}

export default Card;
