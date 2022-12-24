import React, { ReactNode, useEffect } from 'react';

import { BottomSheet as BottomSheetMobile } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';
import { useGeneralContext } from '@/context';
import { Theme } from '@/enums';

interface Props {
  open: boolean;
  onClose?: () => void;
  body: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onDismiss: any;
  onReady: any;
  classNameBody?: string;
}

export const BottomSheet = ({
  open,
  onClose,
  body,
  header,
  footer,
  onDismiss,
  onReady,
  classNameBody,
}: Props) => {
  const { theme } = useGeneralContext();
  const backgroundColor = theme === Theme.dark ? '#201F24' : '#FFFFFF';
  const borderColor =
    theme === Theme.dark
      ? 'rgba(230, 225, 229, 0.38)'
      : 'rgba(28, 27, 31, 0.38)';

  useEffect(() => onDismiss, []);

  return (
    <BottomSheetMobile
      open={open}
      onDismiss={onDismiss}
      defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? snapPoints[1]}
      header={header && <Header>{header}</Header>}
      footer={footer && <Footer>{footer}</Footer>}
      snapPoints={({ height, minHeight, maxHeight }) => [
        maxHeight - maxHeight / 5,
        Math.min(Math.max(height, minHeight), maxHeight * 0.525),
      ]}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '--rsbs-bg': backgroundColor,
        '--rsbs-handle-bg': borderColor,
      }}
      expandOnContentDrag
    >
      <div className={`p-4 ${classNameBody}`}>{body}</div>
    </BottomSheetMobile>
  );
};

interface headerProps {
  children: ReactNode;
}

const Header = ({ children }: headerProps) => {
  return (
    <header className="py-4 border-b-[0.5px] border-b-light-divider-light dark:border-b-dark-divider-light">
      {children}
    </header>
  );
};

interface footerProps {
  children: ReactNode;
}

const Footer = ({ children }: footerProps) => {
  return <footer className="">{children}</footer>;
};
