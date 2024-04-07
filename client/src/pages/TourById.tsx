import {JSX, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {Tag} from 'primereact/tag';

import Title from "../components/Title.tsx";
import Card from "../components/Card.tsx";
import Album from "../components/Album.tsx";

import flagSmallSvg from '../assets/svg/smallFlag.svg';
import heartSvg from '../assets/svg/heart.svg';
import mosRu from '../assets/svg/mos-ru-mess.svg';
import NotIncluded from "../components/NotIncluded.tsx";
import TourProgram from "../components/TourProgram.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import Review from "../components/Review.tsx";
import SearchBar from "../components/SearchBar.tsx";
import AccommodationTour from "../components/AccommodationTour.tsx";

const TourById = (): JSX.Element => {
  const params = useParams();
  const location = useLocation();
  const [textInput, setTextInput] = useState('');
  useEffect(() => {
    console.log(params.id, '/tour' + location.pathname);
  }, [params]);

  useEffect(() => {
    console.log(textInput);
  }, [textInput]);
  return (
    <div className={'tour'}>
      <div className={'tour__header'}>
        <div className={'tour__header-left'}>
          <Title title={'Две столицы: Москва — Санкт-Петербург «Семейные каникулы»'}/>
          <div className={'footer'}>
            <Tag value="4.5" className={'tag'}/>
            <Tag className={'top'}>
              <img src={flagSmallSvg} alt="flag small"/>
              Лучший в Москве
            </Tag>
            <a href={''} className={'footer__review'}>
              48 563 отзыва
            </a>
            <span className="footer__dot">.</span>
            <span className={'footer__address'}>ул. Большая Дмитровка, д. 6, стр. 8</span>
            <span className="footer__dot">.</span>
            <span className="footer__nights">7 ночей</span>
          </div>
        </div>
        <div className={'tour__like'}>
          <img src={heartSvg} alt="heart"/>
        </div>
      </div>
      <div className={'tour__preview'}>
        <Album/>
      </div>
      <div className={'tour__body'}>
        <div className={'content'}>
          <div className="content__description">
            <p>Тематическая образовательная программа для школьников Москвы и Московской области дает ребятам
              возможность познакомиться с современными тенденциями транспортной отрасли, а также помогает в развитии
              системного мышления и совершенствовании навыков командной работы. Дети побывают в центре профориентации,
              посетят знаменитый павильон «Космос» на ВДНХ и смогут попробовать себя в роли конструкторов будущего. А
              накануне поездки гиды-кураторы проведут деловую игру «Приключения в СКИЛЛГОРОДЕ» в классе, где обучаются
              ребята (возможны альтернативные варианты за дополнительную плату).</p>
            <div className="partner">
              <img src={mosRu} alt="mos ru"/>
              <span>Информация предоставлена партнером</span>
            </div>
          </div>
          <NotIncluded residence={true} transfer={true}/>
          <AccommodationTour/>
          <TourProgram/>
          <TourProgram/>
          <div className={'content__free-time'}>
            <h3 className="title">Сможете посетить в свободное время</h3>
            <div className={'slider'}>
              <Swiper
                slidesPerView={3}
                spaceBetween={24}
              >
                <SwiperSlide><Card rating={5.8} discount={10} bonus onOpen={() => {
                }} title={'Экскурсия по Таганскому району города Москва экскурсия по Таганскому району'}/></SwiperSlide>
                <SwiperSlide><Card rating={7.2} bonus onOpen={() => {
                }} title={'Экскурсия по Таганскому району города Москва экскурсия по Таганскому району'}/></SwiperSlide>
                <SwiperSlide><Card rating={9.9} onOpen={() => {
                }} title={'Экскурсия по Таганскому району города Москва экскурсия по Таганскому району'}/></SwiperSlide>
                <SwiperSlide><Card rating={10} onOpen={() => {
                }} title={'Экскурсия по Таганскому району города Москва экскурсия по Таганскому району'}/></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <Review/>
          <SearchBar title={'Не нашли нужный тур?'}/>
        </div>
        <div className={'sidebar'}>
          <Card title={'Экскурсия по Таганскому району города Москва экскурсия по Таганскому району'} onOpen={() => {
          }}/>
        </div>
      </div>
    </div>
  )
}

export default TourById;
