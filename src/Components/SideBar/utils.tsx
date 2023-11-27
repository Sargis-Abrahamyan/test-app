import { FaUsers } from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';
import { IoMdAnalytics } from 'react-icons/io';

export const menuItem = [
  {
    id: 1,
    name: 'Users',
    path: '/',
    icon: <FaUsers />,
  },
  {
    id: 2,
    name: 'Reports',
    path: '/reports',
    icon: <TbReportSearch />,
  },

  {
    id: 3,
    name: 'Analytics',
    path: '/analytics',
    icon: <IoMdAnalytics />,
  },
];
