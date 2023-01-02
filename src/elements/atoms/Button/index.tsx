import { ReactNode } from 'react';

import { ButtonName, ButtonType } from '@/types';

interface Props {
  type: ButtonType;
  text: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  classButton: ButtonName;
}

export const Button = ({
  type,
  text,
  disabled,
  icon,
  className = '',
  classButton,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full flex justify-center bg-transparent font-medium items-center gap-3 px-6 py-3 rounded-md button-${classButton} ${className}`}
    >
      {icon && <>{icon}</>}
      <p className=" text-center text-sm">{text}</p>
    </button>
  );
};
