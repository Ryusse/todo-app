import { ReactNode } from 'react';

import { ButtonType } from '@/types';

interface Props {
  type: ButtonType;
  children: ReactNode;
  disabled: boolean;
  icon?: boolean;
  className?: string;
}

export const Button = ({
  type,
  children,
  disabled,
  icon,
  className = '',
}: Props) => {
  return (
    <button type={type} disabled={disabled} className={`${className}`}>
      {children}
    </button>
  );
};
