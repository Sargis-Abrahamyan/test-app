import { useEffect, useState } from 'react';

export const useSidebar = () => {
  const isDesktop = () => window.innerWidth >= 598;
  let screen = window.innerWidth >= 598 ? true : false;
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [sidebarStatus, setSidebarStatus] = useState<boolean>(screen);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSidebarStatus(isDesktop());
    });
    return () => window.removeEventListener('resize', isDesktop);
  }, []);

  return {
    isOpenSideBar,
    setIsOpenSideBar,
    sidebarStatus,
  };
};
