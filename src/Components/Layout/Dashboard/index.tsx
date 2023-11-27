import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from '../../SideBar';
import UserList from '../../../Pages/UsersList';
import ReportsList from '../../../Pages/ReportsList';
import AddReport from '../../../Pages/AddReport';
import * as Styled from './dashboard.styled';

const Dashboard: FC = () => {
  return (
    <Styled.Dashboard>
      <SideBar />
      <Styled.MainContent>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/reports" element={<ReportsList />} />
          <Route path="/user/:reports/:name/:id" element={<ReportsList />} />
          <Route path="/report/:create/:name/:id" element={<AddReport />} />
        </Routes>
      </Styled.MainContent>
    </Styled.Dashboard>
  );
};

export default Dashboard;
