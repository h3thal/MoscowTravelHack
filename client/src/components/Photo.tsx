import {JSX} from "react";

import photo1 from '../assets/images/test.jpeg';

const Photo = (): JSX.Element => {
  return (
    <div className={'photo'}>
      <img src={photo1} alt={'photo'}/>
    </div>
  )
}

export default Photo;
