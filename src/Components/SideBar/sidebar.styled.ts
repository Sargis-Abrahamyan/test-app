import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { theme } from '../../GlobalStyles/theme';

export const SideBar = styled.div<{ $isOpenSideBar: boolean }>`
  width: ${({ $isOpenSideBar }) => ($isOpenSideBar ? '250px' : '70px')};
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0 0.3rem;
  overflow: ${theme.overflow.hedden};
  transition: ${theme.transition.primaryTranition};
  background-color: ${theme.colors.secondary};
`;

export const Menu = styled.ul`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  margin: 8px 0;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${theme.colors.active};
  }
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 1.5rem;
  color: ${theme.colors.primary};

  &.active {
    color: ${theme.colors.active};
  }
`;

export const MenuItemLIcons = styled.span`
  font-size: 24px;
`;

export const MenuItemLText = styled.span`
  overflow: ${theme.overflow.hedden};
`;
