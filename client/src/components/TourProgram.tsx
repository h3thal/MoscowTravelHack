import {JSX, memo} from "react";

import testImg from '../assets/images/test.jpeg';
import MiniCard from "./MiniCard.tsx";

const TourProgram = (): JSX.Element => {
  return (
    <div className={'tour-program'}>
      <div className="tour-program__album">
        <div className="main">
          <img src={testImg} alt={'album'}/>
          <div className="main__content">
            <h4>
              1 день. Знакомство с Москвой,
              вторая строчка
            </h4>
          </div>
        </div>
        <div className="side">
          <img src={testImg} alt="album"/>
          <img src={testImg} alt="album"/>
          <img src={testImg} alt="album"/>
          <img src={testImg} alt="album"/>
        </div>
      </div>
      <div className="tour-program__visit">
        <h4>Вы посетите:</h4>
        <div className="row">
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
        </div>
      </div>
      <div className={'tour-program__list'}>
        <h5 className={'title'}>Программа:</h5>
        <ul>
          <li>Самостоятельное прибытие в гостиницу (гарантированное размещение ― после 15:00).</li>
          <li>10:30–11:30 ― встреча с гидом в холле гостиницы.</li>
          <li>Загородная экскурсия в Царское Село с посещением Екатерининского дворца и Янтарной комнаты.</li>
          <li>Свободное время для прогулки по паркам и посещения Царскосельского лицея.</li>
          <li>По желанию ― экскурсия в Павловск с посещением Павловского дворца (за дополнительную плату).</li>
        </ul>
      </div>
    </div>
  )
}

export default memo(TourProgram);
