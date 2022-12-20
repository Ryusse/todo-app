import { Layout } from './elements/organisms';
import { useGeneralContext } from '@/context/GeneralContext';
import { Theme } from '@/enums';

function App() {
  const { setTheme } = useGeneralContext();

  return (
    <div className="App">
      <Layout className="h-screen bg-white dark:bg-black flex items-center justify-center">
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
}

export default App;
