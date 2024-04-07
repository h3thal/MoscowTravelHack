import {JSX} from "react";
import photo1 from "../assets/images/test.jpeg";

const Album = (): JSX.Element => {
  return (
    <div className={'album'}>
      <div className="album__item">
        <div className={'photo'}>
          <img src={photo1} alt={'photo'}/>
        </div>
      </div>
      <div className="album__item">
        <div className={'photo'}>
          <img src={photo1} alt={'photo'}/>
        </div>
      </div>
      <div className="album__right">
        <div className={'photo'}>
          <img src={photo1} alt={'photo'}/>
        </div>
        <div className={'photo'}>
          <img src={photo1} alt={'photo'}/>
        </div>
      </div>
    </div>
  )
};

export default Album;
