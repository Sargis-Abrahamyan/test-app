import styled from 'styled-components';

import { theme } from '../../../GlobalStyles/theme';

export const Button = styled.button`
  width: 120px;
  height: 35px;
  color: ${theme.colors.primary};
  border-radius: 5px;
  font-size: 13px;
  background: ${theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
