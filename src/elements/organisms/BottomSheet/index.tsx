import React from 'react';

import { BottomSheet } from 'react-spring-bottom-sheet';

export const BottomSheetAddList = () => {
  return (
    <BottomSheet
      open={true}
      expandOnContentDrag
      header={<Header />}
      footer={<Footer />}
    >
      <Body />
    </BottomSheet>
  );
};
const Header = () => (
  <div>
    <p>Optional Header</p>
  </div>
);

const Footer = () => (
  <div>
    <p>Optional Footer</p>
  </div>
);

const Body = () => (
  <div>
    <div>
      Just as with content, if the header or footer changes their height the
      sheet will readjust accordingly.
    </div>
  </div>
);
