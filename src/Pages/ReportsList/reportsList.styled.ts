import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../GlobalStyles/theme';

export const ReportContainer = styled.div``;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 864px) {
    flex-direction: column;
  }
`;

export const ReportHeaderLeft = styled.div``;

export const SearchReportsInput = styled.input.attrs({
  placeholder: 'Search...',
  type: 'search',
})`
  width: 100%;
  max-width: 320px;
  padding: 10px;
  border-radius: 7px;
  border: 3px solid #e0e0e058;
  &:focus {
    box-shadow: 0px 1px 10px 0px #83a2ff;
  }
  @media screen and (max-width: 864px) {
    margin-bottom: 10px;
    max-width: 245px;
  }
`;

export const ReportHeaderRight = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media screen and (max-width: 864px) {
    justify-content: center;
  }
`;

export const CreateReportLink = styled(Link)``;

export const ReportCount = styled.p`
  color: #89cff3;
  margin-bottom: 15px;
  @media screen and (max-width: 864px) {
    text-align: center;
  }
`;

export const ReportName = styled.h2`
  margin-bottom: ${theme.margin.bottom};
  color: #89cff3;

  @media screen and (max-width: 864px) {
    margin-bottom: 0px;
  }
`;

export const ReportTitle = styled.h4`
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReportItem = styled.div`
  width: 100%;
  max-width: 950px;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 1px 10px 0px rgba(113, 99, 186, 25);
  margin: 20px auto;
`;

export const Content = styled.div`
  font-weight: bold;
  letter-spacing: 1;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
