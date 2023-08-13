import * as React from 'react';
import { Navigation, StyledMenu, StyledMenuItem } from '../styles';
import type { MenuProps } from 'antd';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigator = useNavigate();

  function routeMenu(route: string) {
    console.log(route);
    navigator(`/${route}`);
  }

  return (
    <Navigation>
      <img src={logo} style={{height: 50, width: 200}} />
      <StyledMenu disabledOverflow={true} onClick={(e: any) => routeMenu(e.key)} mode='horizontal'>
        <StyledMenuItem key=''>Home</StyledMenuItem>
        <StyledMenuItem key='page1'>Page 1</StyledMenuItem>
        <StyledMenuItem key='page2'>Page 2</StyledMenuItem>
      </StyledMenu>
    </Navigation>
  )
}
