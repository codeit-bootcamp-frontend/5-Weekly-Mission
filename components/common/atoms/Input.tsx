import { Relative } from '@/styles/commonStyle';
import { ChangeEvent, ReactNode, useRef, useState } from 'react';
import Button from './Button';
import { InputModule } from './inputStyle';

interface IButtonModule {
  id?: string;
  type?: string;
  inputClass?: string;
  btnShow?: boolean;
  placeholder?: string;
  $beforeIcon?: string;
  btnClass?: string;
  clickEventType?: string | undefined;
  children?: ReactNode;
  onclick?: () => void;
  onchange?: (value: string) => void;
}

function Input({ id, btnShow = false, type = 'text', inputClass, placeholder, $beforeIcon = '', btnClass = '', clickEventType, children, onchange }: IButtonModule) {
  const [value, setValue] = useState('');
  const refInput = useRef(null);

  const handleChangInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    if (onchange) {
      // value값 전달
      onchange(value);
    }
  };
  const handleEventInput = (event: string) => {
    if (!event) return;
    if (event === 'reset') {
      setValue('');
      if (onchange) {
        onchange('');
      }
    }
  };

  return (
    <>
      <Relative>
        <InputModule
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={handleChangInput}
          $beforeIcon={$beforeIcon}
          ref={refInput}
        />
        {btnShow && clickEventType && (
          <Button
            btnClass={btnClass}
            onclick={() => handleEventInput(clickEventType)}>
            {children}
          </Button>
        )}
      </Relative>
    </>
  );
}
export default Input;
