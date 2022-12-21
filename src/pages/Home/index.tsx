import { useGeneralContext } from '@/context/GeneralContext';
import { Layout } from '@/elements/organisms';
import { Theme } from '@/enums';

const Home = () => {
  const { setTheme } = useGeneralContext();
  return (
    <div className="App">
      <Layout className="h-screen bg-light-background-paper dark:bg-dark-background-paper">
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
      </Layout>
    </div>
  );
};

export default Home;
