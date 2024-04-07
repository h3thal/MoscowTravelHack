import {JSX, memo, useState} from "react";
import {CheckboxProps} from "primereact/checkbox";
import classNames from "classNames";

const Checkbox = memo(({title, onInput}: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={'checkbox'}>
      <input className={'checkbox__input ' + classNames({'checkbox__input--checked': isChecked})} type={'checkbox'}
             checked={isChecked}
             onChange={() => setIsChecked(prev => !prev)} onInput={onInput}/>
      <span className={'checkbox__title'}>{title}</span>
    </label>
  )
});

export default Checkbox;
