import {JSX, memo, MemoExoticComponent} from "react";

import vkSvg from '../assets/svg/social/vk.svg'
import tgSvg from '../assets/svg/social/tg.svg'
import zenSvg from '../assets/svg/social/zen.svg'
import okSvg from '../assets/svg/social/ok.svg'
import devSvg from '../assets/svg/dev.svg';

const Footer: MemoExoticComponent<() => JSX.Element> = memo((): JSX.Element => {
  return (
    <footer className={'footer'}>
      <div className="footer__container">
        <div className={'body'}>
          <div className={'links'}>
            <div className="links__contacts">
              <span className="label">Контакты</span>
              <a href={'tel:88003006122'} className={'link'}>8 (800) 300-6-122</a>
              <a href={'mailto:press@welcome.moscow'} className={'link'}>press@welcome.moscow</a>
            </div>
            <div className="links__about">
              <a href="" className="link">О проекте</a>
              <a href="" className="link">Вход для партнеров</a>
            </div>
          </div>
          <div className={'social'}>
            <a><img src={vkSvg} alt={'vk'}/></a>
            <a><img src={zenSvg} alt={'zen'}/></a>
            <a><img src={tgSvg} alt={'tg'}/></a>
            <a><img src={okSvg} alt={'ok'}/></a>
          </div>
        </div>
        <hr/>
        <div className={'bottom'}>
          <img className={'dev'} src={devSvg} alt="dev"/>
          <div className="links">
            <a>Политика конфиденциальности</a>
            <a>Политика обработки персональных данных</a>
          </div>
        </div>
      </div>
    </footer>
  )
});

export default Footer;
