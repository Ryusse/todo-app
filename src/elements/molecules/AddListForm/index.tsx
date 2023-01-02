import { useForm } from 'react-hook-form';

import { Input } from '@/elements/atoms';

type FormValues = {
  listTitle: string;
};

export const AddListForm = () => {
  const {
    register,
    control,
    watch,
    formState,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });
  console.log(watch('listTitle'));

  return (
    <div>
      <Input
        type="text"
        hasError={!!errors.listTitle}
        placeholder="Enter list title"
        {...register('listTitle', { required: true, minLength: 8 })}
      />
    </div>
  );
};
