import styled from 'styled-components';
import { theme } from '../../../GlobalStyles/theme';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: ${theme.colors.primary};
  box-shadow: 0px 1px 10px 0px ${theme.colors.secondary};
  padding: 10px;
  transition: all 0.7s;
  margin-top: 15px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
`;

export const CardCount = styled.span`
  color: rgba(113, 99, 186, 255);
  font-weight: 300;
`;

export const CardUserName = styled.h4`
  font-weight: 700;
  font-size: 17px;
`;

export const CardContent = styled.div`
  padding: 12px 0px;
`;
