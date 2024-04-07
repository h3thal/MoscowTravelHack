import {JSX, memo} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import testImg from '../assets/images/test.jpeg';
import {Pagination} from "swiper/modules";
import 'swiper/css/pagination';

import starSvg from '../assets/svg/star.svg';
import parkingSvg from '../assets/svg/parking.svg';
import wifiSvg from '../assets/svg/wifi.svg';
import cafeSvg from '../assets/svg/cafe.svg';
import HeartButton from "./HeartButton.tsx";
import {CardHotelsProps} from "../types/main.ts";
import Button from "./Button.tsx";

const CardHotels = memo(({title, star, rating, onOpen, parking, wifi, cafe}: CardHotelsProps): JSX.Element => {

  return (
    <div className={'card'}>
      <div className="card__photo">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination
          modules={[Pagination]}
          grabCursor
        >
          <SwiperSlide><img src={testImg} alt={'hotels'}/></SwiperSlide>
          <SwiperSlide><img src={testImg} alt={'hotels'}/></SwiperSlide>
          <SwiperSlide><img src={testImg} alt={'hotels'}/></SwiperSlide>
          <SwiperSlide><img src={testImg} alt={'hotels'}/></SwiperSlide>
          <SwiperSlide><img src={testImg} alt={'hotels'}/></SwiperSlide>
        </Swiper>
        <div className="labels">
          <div className="labels__left">
            {rating && <div className="item rating">{rating}</div>}
          </div>
          <div className="labels__right">
            <HeartButton isActive={false} onClick={() => {
            }} size={'M'} onImage/>
          </div>
        </div>
      </div>
      <div className="card__body">
        <div className="title">
          <span>{star} <img src={starSvg} alt={'star'}/></span>
          {title}
        </div>
        <div className="info">
          <div className="info__left">
            <span>Петропавловск-Камчатский</span>
            <span>Мини-отель</span>
            <span>0,5 км от центра</span>
          </div>
          <div className="info__right">
            <span>Бесплатная отмена</span>
            <span>Питание включено</span>
          </div>
        </div>
        <div className="actions">
          <div className="tags">
            {parking && <img src={parkingSvg} alt={'parking'}/>}
            {wifi && <img src={wifiSvg} alt={'wifi'}/>}
            {cafe && <img src={cafeSvg} alt={'cafe'}/>}
            <span>11+</span>
          </div>
          <Button type={'Caption'} title={'от 400 ₽'} caption={'Купить билеты'} size={'L'} onClick={onOpen}/>
        </div>
      </div>
    </div>
  )
});

export default CardHotels;
