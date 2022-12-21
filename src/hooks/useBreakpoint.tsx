import { useCallback, useEffect, useRef, useState } from 'react';

import useResize from './useResize';

const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

type BreakPoint = keyof typeof screens;

const useBreakpoint = (breakpoint: BreakPoint) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  const checkSize = useCallback(() => {
    const matchMediaResponse = window.matchMedia(
      `(min-width: ${screens[breakpoint]})`
    );

    setIsMatch(matchMediaResponse.matches);
  }, [breakpoint]);

  const checkSizeRef = useRef(checkSize);
  checkSizeRef.current = checkSize;

  useEffect(() => {
    checkSizeRef.current();
  }, []);

  useResize(checkSizeRef.current);

  return isMatch;
};

export default useBreakpoint;
