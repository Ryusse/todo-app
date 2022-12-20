import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Theme } from '@/enums';
import { ThemeType } from '@/types';
import { darkQuery } from '@/utils';
import { onWindowMatch } from '@/utils/on-window-match';

type GeneralContextType = {
  theme: ThemeType;
  setTheme: (e: ThemeType) => void;
};

const contextDefaultValue: GeneralContextType = {
  theme: Theme.system,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
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
    onWindowMatch();
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}
