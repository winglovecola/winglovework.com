'use client';

import { useState } from 'react';
import { CircleLoader } from 'react-spinners';


function Button(props: {
  variant: 'PRIMARY' | 'SECONDARY' | 'WARNING' | 'DANGER' | 'SUCCESS' | 'TEAL',
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => Promise<void>
}) {
  const [isLoading, setIsLoading] = useState(false);
  const primaryClasses = `
    bg-black border border-yellow-600 text-white ${!props.disabled && 'hover:bg-pink-600 duration-300'}
  `;
  const secondaryClasses = `
    text-neutral-700 bg-neutral-100 ${!props.disabled && 'hover:bg-neutral-300'}
  `;

  const warningClasses = `
    text-white bg-pink-500 ${!props.disabled && 'hover:bg-pink-600'}
  `;

  const successClasses = `
    text-white bg-green-600 ${!props.disabled && 'hover:bg-green-700'}
  `;

  const dangerClasses = `
    text-white bg-red-700 ${!props.disabled && 'hover:bg-red-600'}
  `;

  const tealClasses = `
    text-white bg-teal-500 ${!props.disabled && 'hover:bg-teal-600'}
  `;

  async function handleOnClick() {
    if (props.onClick) {
      setIsLoading(true);
      await props.onClick();
      setIsLoading(false);
    }
  }

  const variantClasses = props.variant === 'PRIMARY'
    ? primaryClasses
    : props.variant === 'SECONDARY'
      ? secondaryClasses
      : props.variant === 'WARNING'
        ? warningClasses
          : props.variant === 'DANGER'
            ? dangerClasses
            : props.variant === 'SUCCESS'
              ? successClasses
              : tealClasses;

  return <button
    type={props.type}
    className={`flex items-center justify-center py-2 rounded-md text-nowrap ${variantClasses}
       
      ${props.disabled && 'opacity-50 cursor-not-allowed'}
      ${props.className}
    `}
    disabled={props.disabled}

    onClick={handleOnClick}
  >
     {isLoading ? <div className='flex flex-1 flex-row justify-center text-center items-center'><CircleLoader color={props.variant === 'PRIMARY' ? '#fff': '#000' } loading={isLoading} size={20}/>&nbsp;Loading ...</div> : props.children}
  </button>;
}

export default Button;
