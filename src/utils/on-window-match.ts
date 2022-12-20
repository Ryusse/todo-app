import { Theme } from '@/enums';
import { darkQuery } from '@/utils/get-theme-query';

export const onWindowMatch = () => {
  if (
    localStorage.theme == Theme.dark ||
    (!('theme' in localStorage) && darkQuery.matches)
  ) {
    document.documentElement.classList.add(Theme.dark);
  } else {
    document.documentElement.classList.remove(Theme.dark);
  }
};
