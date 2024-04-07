import {Swiper, SwiperSlide} from "swiper/react";
import {memo} from "react";

import testImg from '../assets/images/test.jpeg';
import entirePlace from '../assets/svg/entire-place.svg';

const AccommodationTour = memo(() => {
  return (
    <div className={'accommodation-tour'}>
      <h3 className={'accommodation-tour__title'}>Проживание во время тура</h3>
      <div className={'accommodation-tour__info'}>
        <div className={'album'}>
          <Swiper slidesPerView={1} spaceBetween={10}>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
            <SwiperSlide><img src={testImg} alt={'test'}/></SwiperSlide>
          </Swiper>
        </div>
        <div className={'about-hotel'}>
          <h4 className={'title'}>Harbor Club Hotel</h4>
          <div className={'tags'}>
            <span className={'tag green'}>4.9</span>
            <span className={'tag'}>Близко к морю</span>
            <a className={'link'}><span>48 563 отзывов</span></a>
          </div>
          <div className="list">
            <span className={'item'}><img src={entirePlace} alt={'place'}/>1 км до центра</span>
            <span className={'item'}><img src={entirePlace} alt={'place'}/>Трехразовое питание</span>
            <span className={'item'}><img src={entirePlace} alt={'place'}/>Wi-Fi</span>
          </div>
        </div>
      </div>
      <div className={'accommodation-tour__actions'}>

      </div>
    </div>
  )
});

export default AccommodationTour;
