import {JSX} from "react";

import logoSvg from '../assets/svg/Logo.svg';
import logoRussiaSvg from '../assets/svg/Logo-russia.svg';
import arrowDownSvg from '../assets/svg/arrow-down.svg';
import burgerSvg from '../assets/svg/burger.svg';
import bonusCoinSvg from '../assets/svg/bonus-coin.svg';
import mosRuSvg from '../assets/svg/mos-ru.svg';
import heartSvg from '../assets/svg/heart.svg';
import userSvg from '../assets/svg/user.svg';
import flagSvg from '../assets/svg/circle-flags.svg';

const Header = (): JSX.Element => {
  return (
    <div className={'header'}>
      <div className="header__left">
        <div className={'logo'}>
          <img src={logoSvg} alt={'logo'}/>
        </div>
        <div className={'line'}/>
        <div className={'types'}>
          <img src={logoRussiaSvg} alt={'logo Russia'}/>
          <img src={arrowDownSvg} alt={'arrow down'}/>
        </div>
        <div className="header__item menu">
          <img src={burgerSvg} alt="burger"/>
          <span>Меню</span>
        </div>
        <div className="header__item bonus">
          <img src={bonusCoinSvg} alt="bonus coin"/>
          <span>Бонусы</span>
        </div>
      </div>
      <div className="header__right">
        <div className="header__item project">
          <img src={mosRuSvg} alt="mos ru"/>
          <span>Проекты Мостуризм</span>
        </div>
        <div className="header__item plans">
          <img src={heartSvg} alt=""/>
          <span>Мои планы</span>
        </div>
        <div className="header__item sign-in">
          <img src={userSvg} alt="user"/>
          <span>Войти</span>
        </div>
        <img src={flagSvg} alt="flag" className="header__item flag"/>
      </div>
    </div>
  )
}

export default Header;
