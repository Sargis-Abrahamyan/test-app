import { useState, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { deleteReports } from '../../Store/Slice/reportSlice';

export const useReports = () => {
  const [filterReport, setFilterReport] = useState<string>('');
  const { id, name } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { reports, loading } = useAppSelector((state) => state.report);
  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const reportsUserFilter = reports.filter((repo) => repo.userId === Number(id));

  const showedUserReports = useMemo(() => {
    if (reportsUserFilter.length) {
      return reportsUserFilter;
    } else if (!reportsUserFilter.length && id) {
      return [];
    }
    return reports;
  }, [id, reports, reportsUserFilter]);

  const filteredUsers = useMemo(() => {
    return showedUserReports.filter((user) =>
      user.title.toLowerCase().includes(filterReport.toLowerCase())
    );
  }, [showedUserReports, filterReport]);

  const userInfo = (userId: number) => {
    const usersInfoItem = users
      .filter((item) => item.id === userId)
      .map((report) => report.name)
      .join();
    return pathname === '/reports' ? usersInfoItem : '';
  };

  const handelDeleteReport = async (id: number) => {
    await dispatch(deleteReports(id));
  };

  return {
    showedUserReports,
    id,
    name,
    loading,
    reports,
    handelDeleteReport,
    setFilterReport,
    filterReport,
    filteredUsers,
    userInfo,
    navigate,
  };
};
