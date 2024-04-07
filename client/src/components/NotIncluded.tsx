import {JSX, memo} from "react";
import {NotIncludedProps} from "../types/main.ts";
import Button from "./Button.tsx";

import tiketYellowSvg from '../assets/svg/ticket-yellow.svg';
import tiketBlueSvg from '../assets/svg/ticket-blue.svg';

const NotIncluded = ({residence = false, transfer = false}: NotIncludedProps): JSX.Element => {
  return (
    <div className={'not-included'}>
      <h4
        className="not-included__title">
        {`${residence && !transfer ? 'Проживание' : !residence && transfer ? 'Дорога' : residence && transfer && 'Проживание и дорога'}
        не ${residence && !transfer ? 'включено' : !residence && transfer ? 'включена' : residence && transfer && 'включены'} в стоимость тура`}
      </h4>
      <div className="not-included__container">
        {residence && <div className="item residence">
          <h5 className={'item__title'}>
            Забронируйте жилье у нас
            и получите скидку 5% на тур
          </h5>
          <Button type={'Secondary'} size={'L'} title={'Забронировать'}/>
          <img src={tiketYellowSvg} alt="tikcet" className="item__ticket"/>
        </div>}
        {transfer && <div className="item transfer">
          <h5 className={'item__title'}>
            10% скидка на Ж/Д
            или авиабилет
          </h5>
          <Button type={'Secondary'} size={'L'} title={'Забронировать'}/>
          <img src={tiketBlueSvg} alt="ticket" className="item__ticket"/>
        </div>}
      </div>
    </div>
  )
};

export default memo(NotIncluded);
