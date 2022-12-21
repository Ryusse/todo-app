import { FiArrowLeft } from 'react-icons/all';

import { useGeneralContext } from '@/context/GeneralContext';

export const Header = () => {
  const { setWindow } = useGeneralContext();

  const handleClose = () => {
    setWindow(false);
  };
  return (
    <header className="flex items-center gap-5 p-4 lg:px-5 lg:py-8">
      <button>
        <FiArrowLeft
          onClick={() => handleClose()}
          size="1.5rem"
          className="block lg:hidden text-light-primary-main dark:text-dark-primary-main"
        />
      </button>
      <h1 className="text-2xl text-light-text-primary dark:text-dark-text-primary">
        Titulo
      </h1>
    </header>
  );
};
