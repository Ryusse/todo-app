import { forwardRef } from 'react';

interface Props {
  name: string;

  type: string;
  placeholder: string;
  maxLength?: number;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, type, placeholder, maxLength, className }: Props, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full border-b-light-divider border-[2px] border-t-transparent border-x-transparent p-4 rounded-t-sm placeholder:text-light-divider-main placeholder:font-light text-sm bg-light-background-paper dark:border-b-dark-divider-main dark:bg-dark-background-paper placeholder:dark:text-dark-divider-main transition-all ease-in-out hover-input focus-input active-input ${className}`}
      />
    );
  }
);
