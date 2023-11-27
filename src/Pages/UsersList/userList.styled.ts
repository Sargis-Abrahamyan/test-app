import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../../GlobalStyles/theme';

export const UserListTitle = styled.h2`
  margin-bottom: 45px;
  @media screen and (max-width: 500px) {
    margin-bottom: 25px;
  }
`;

export const UserCardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const CardUserEmail = styled.p`
  margin-bottom: ${theme.margin.bottom};
`;

export const CarDateUserInfo = styled.p`
  margin-bottom: ${theme.margin.bottom};
`;

export const UserReportsLink = styled(Link)`
  display: flex;
  justify-content: end;
`;
