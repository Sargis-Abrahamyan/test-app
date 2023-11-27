import { FC } from 'react';

import { useReports } from './useReports';
import Button from '../../Components/Ui/Button';
import Card from '../../Components/Ui/Card';

import * as Styled from './reportsList.styled';

const ReportsList: FC = () => {
  const {
    filterReport,
    setFilterReport,
    filteredUsers,
    showedUserReports,
    handelDeleteReport,
    name,
    id,
    userInfo,
    navigate,
  } = useReports();

  return (
    <Styled.ReportContainer>
      <Styled.ReportHeader>
        <Styled.ReportHeaderLeft>
          <Styled.ReportName>{id ? name : 'All Reports'}</Styled.ReportName>
          <Styled.ReportCount>
            Count : {showedUserReports.length}
          </Styled.ReportCount>
        </Styled.ReportHeaderLeft>
        <Styled.SearchReportsInput
          value={filterReport}
          onChange={(e: any) => setFilterReport(e.target.value)}
        />
        <Styled.ReportHeaderRight>
          {id && (
            <>
              <Button
                content="All Reports"
                bgColor="#FFD28F"
                click={() => navigate('/reports')}
              />
              <Styled.CreateReportLink to={`/report/create/${name}/${id}`}>
                <Button content="Create Report" bgColor="#83A2FF" />
              </Styled.CreateReportLink>
            </>
          )}
        </Styled.ReportHeaderRight>
      </Styled.ReportHeader>
      {filteredUsers.length !== 0 &&
        filteredUsers.map(({ id, userId, title, content }) => {
          return (
            <Styled.CardContainer key={id}>
              <Card maxWidth="850px" name={userInfo(userId)} title={title}>
                <Styled.Content>{content}</Styled.Content>
                <Styled.ButtonBlock>
                  <Button
                    content="Delete"
                    bgColor="red"
                    width="74px"
                    click={() => handelDeleteReport(id)}
                  />
                  <Button content="Update" bgColor="orange" width="74px" />
                </Styled.ButtonBlock>
              </Card>
            </Styled.CardContainer>
          );
        })}
    </Styled.ReportContainer>
  );
};

export default ReportsList;
