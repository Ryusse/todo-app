import { forwardRef, useState } from 'react';

interface Props {
  defaultValue?: any;
  name: string;
  hasError?: boolean;
  type: string;
  placeholder: string;
  maxLength?: number;
  className?: string;
  onChange: (e: any) => void;
  onInput?: (e: any) => void;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      defaultValue,
      name,
      hasError,
      type,
      placeholder,
      maxLength,
      className,
      onChange,
      onInput,
    }: Props,
    ref
  ) => {
    const [value, setValue] = useState<string>(defaultValue);

    return (
      <input
        ref={ref}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          onInput?.(e.currentTarget.value);
        }}
        className={`base-input border-[2px] placeholder-input ${className} ${
          hasError ? 'input-error' : 'input-default'
        }`}
      />
    );
  }
);
