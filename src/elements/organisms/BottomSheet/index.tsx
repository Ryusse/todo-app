import React, { ReactNode, useEffect } from 'react';

import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

interface Props {
  open: boolean;
  onClose?: () => void;
  body: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onDismiss: any;
  onReady: any;
}

export const BottomSheetAddList = ({
  open,
  onClose,
  body,
  header,
  footer,
  onDismiss,
  onReady,
}: Props) => {
  useEffect(() => onDismiss, []);
  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? snapPoints[1]}
      header={header}
      footer={footer}
      snapPoints={({ height, minHeight, maxHeight }) => [
        maxHeight - maxHeight / 5,
        Math.min(Math.max(height, minHeight), maxHeight * 0.525),
      ]}
      expandOnContentDrag
    >
      {body}
    </BottomSheet>
  );
};
