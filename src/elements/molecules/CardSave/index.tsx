import { BsPlusLg } from 'react-icons/all';

import { Button } from '@/elements/atoms';
import { ButtonType } from '@/types';

interface Props {
  disabled: boolean;
  onSave: () => void;
  closeBottomSheet?: () => void;
  cancelButton?: boolean;
  buttonText: string;
  buttonType: ButtonType;
}

export const CardSave = ({
  disabled,
  onSave,
  closeBottomSheet,
  cancelButton,
  buttonText,
  buttonType,
}: Props) => {
  return (
    <div className="flex items-center gap-4 justify-between">
      {cancelButton && (
        <Button
          type="button"
          text="Cancel"
          classButton="text"
          onClick={closeBottomSheet}
        />
      )}
      <Button
        type={buttonType}
        text={buttonText}
        disabled={disabled}
        onClick={onSave}
        classButton="filled"
        icon={<BsPlusLg className="w-4" />}
      />
    </div>
  );
};
