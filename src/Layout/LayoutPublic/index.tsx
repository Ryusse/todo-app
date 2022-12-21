import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import { useGeneralContext } from '@/context/GeneralContext';
import { Header, Sidebar } from '@/elements/organisms';
import useBreakpoint from '@/hooks/useBreakpoint';

const LayoutPublic = () => {
  const isBreakpoint = useBreakpoint('lg');
  const { window } = useGeneralContext();

  return (
    <div className="flex w-full relative">
      <Sidebar />

      <motion.div
        className={`w-full h-screen bg-light-background-paper dark:bg-dark-background-paper ${
          !isBreakpoint ? 'absolute z-10 top-0 left-0' : ''
        }`}
        animate={{
          x: window ? 0 : 1024,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
      >
        <Header />
        <main className="p-4 lg:px-5 lg:py-8">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
};

export default LayoutPublic;
