import { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to: string;
}

export const Link = ({ children, to }: Props) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`px-5 py-3 flex justify-between items-center ${
            isActive ? 'bg-light-primary-light dark:bg-dark-primary-light' : ''
          }`}
        >
          {children}
        </div>
      )}
    </NavLink>
  );
};
