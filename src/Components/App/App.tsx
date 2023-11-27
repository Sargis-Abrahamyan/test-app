import { useEffect, FC } from 'react';

import { useAppDispatch } from '../../Hooks/hooks';
import { fetchUsers } from '../../Store/Slice/userSlice';
import Dashboard from '../Layout/Dashboard';
import { fetchReports } from '../../Store/Slice/reportSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);
  
  return <Dashboard />;
};

export default App;
