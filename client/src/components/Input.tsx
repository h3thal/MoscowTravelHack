import {JSX, memo} from "react";

import {InputProps} from "@/client/src/types/main.ts";

const Input = memo(({
                      type = 'text',
                      name = '',
                      placeholder = '',
                      value,
                      onChange,
                      disabled = false,
                      leftIcon,
                    }: InputProps): JSX.Element => {
  return (
    <div className={'input'}>
      <div className="input__container">
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}/>
        {leftIcon}
      </div>
    </div>
  )
});

export default Input;
