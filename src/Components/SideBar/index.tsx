import { FC } from 'react';

import { menuItem } from './utils';
import { useSidebar } from './useSidebar';
import * as Styled from './sidebar.styled';

const SideBar: FC = () => {
  const { isOpenSideBar, setIsOpenSideBar, sidebarStatus } = useSidebar();

  return (
    <Styled.SideBar
      $isOpenSideBar={isOpenSideBar}
      onMouseMove={() => sidebarStatus && setIsOpenSideBar(true)}
      onMouseOut={() => setIsOpenSideBar(false)}>
      <Styled.Menu>
        {menuItem.map(({id,path,icon,name}) => (
          <Styled.MenuItem key={id}>
            <Styled.MenuItemLink to={`${path}`}>
              <Styled.MenuItemLIcons>{icon}</Styled.MenuItemLIcons>
              <Styled.MenuItemLText> {name}</Styled.MenuItemLText>
            </Styled.MenuItemLink>
          </Styled.MenuItem>
        ))}
      </Styled.Menu>
    </Styled.SideBar>
  );
};

export default SideBar;
