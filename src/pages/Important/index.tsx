import { useGeneralContext } from '@/context/GeneralContext';
import { Theme } from '@/enums';

const Important = () => {
  const { setTheme } = useGeneralContext();
  return (
    <div>
      <div>
        <button
          className="bg-red-600 w-[10rem] mx-auto rounded-3xl p-6 text-black dark:text-white"
          onClick={() => setTheme(Theme.dark)}
        >
          Dark mode
        </button>
        <button
          className="bg-red-600 w-[10rem] mx-auto rounded-3xl p-6 text-black dark:text-white"
          onClick={() => setTheme(Theme.light)}
        >
          Light
        </button>
        <button
          className="bg-red-600 w-[10rem] mx-auto rounded-3xl p-6 text-black dark:text-white"
          onClick={() => setTheme(Theme.system)}
        >
          System
        </button>
      </div>
    </div>
  );
};

export default Important;
