import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: Props) => {
  return <div className={`max-w-[1200px] px-4 ${className}`}>{children}</div>;
};
