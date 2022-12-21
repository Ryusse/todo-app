import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Theme } from '@/enums';
import useBreakpoint from '@/hooks/useBreakpoint';
import { ThemeType } from '@/types';
import { darkQuery } from '@/utils';
import { onWindowMatch } from '@/utils/on-window-match';

type GeneralContextType = {
  theme: ThemeType;
  window: boolean;
  setTheme: (e: ThemeType) => void;
  setWindow: (e: boolean) => void;
};

const contextDefaultValue: GeneralContextType = {
  theme: Theme.system,
  window: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setWindow: () => {},
};

const GeneralContext = createContext<GeneralContextType>(contextDefaultValue);
export const useGeneralContext = () => useContext(GeneralContext);

interface Props {
  children: ReactNode;
}

export function GeneralProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>(
    localStorage?.getItem('theme')
      ? localStorage?.getItem('theme')
      : contextDefaultValue.theme
  );
  const [window, setWindow] = useState<boolean>(contextDefaultValue.window);

  const isBreakpoint = useBreakpoint('lg');

  useEffect(() => {
    switch (theme) {
      case Theme.dark:
        document.documentElement.classList.add(Theme.dark);
        localStorage.setItem('theme', Theme.dark);
        break;
      case Theme.light:
        document.documentElement.classList.remove(Theme.dark);
        localStorage.setItem('theme', Theme.light);
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  useEffect(() => {
    darkQuery.addEventListener('change', (e) => {
      if (!('theme' in localStorage)) {
        if (e.matches) {
          document.documentElement.classList.add(Theme.dark);
        } else {
          document.documentElement.classList.remove(Theme.dark);
        }
      }
    });
  }, []);

  useEffect(() => {
    setWindow(isBreakpoint);
  }, [isBreakpoint]);

  useEffect(() => {
    onWindowMatch();
  }, []);

  const value = {
    theme,
    window,
    setTheme,
    setWindow,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}
