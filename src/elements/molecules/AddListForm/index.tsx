import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { Input } from '@/elements/atoms';
import { Form } from '@/interfaces';

type FormProps = {
  listTitle: string;
};

interface Props {
  onHandleValue: (e: Form<FormProps>) => void;
}

export const AddListForm = ({ onHandleValue }: Props) => {
  const {
    register,
    watch,
    formState,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    onHandleValue({
      value: watch() as FormProps,
      isValid: formState.isValid,
    });
  }, [formState.isValid]);

  return (
    <div className="block">
      <div className="form-group">
        <Input
          type="text"
          hasError={!!errors.listTitle}
          placeholder="Enter list title"
          {...register('listTitle', { required: true, minLength: 4 })}
        />
        {errors.listTitle && errors.listTitle.type === 'required' && (
          <p className="form-error">This field is required</p>
        )}
        {errors.listTitle && errors.listTitle.type === 'minLength' && (
          <p className="form-error">Minimum eight characters</p>
        )}
      </div>
    </div>
  );
};
