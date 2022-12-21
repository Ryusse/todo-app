import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/elements/organisms';

const LayoutPublic = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
