import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowWidth } from './utils/window';
import { Logo, Navigation, StyledMenu } from '../styles';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { HomeOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const MOBILE_BREAKPOINT = 650;
const menuItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'Profile',
    key: '/profile',
    icon: <UserOutlined />,
  },
  {
    label: 'Settings',
    key: '/settings',
    icon: <SettingOutlined />,
  },
];

export default () => {
  const navigator = useNavigate();
  const width = useWindowWidth();
  const location = useLocation();
  const isMobile = width < MOBILE_BREAKPOINT;

  function routeMenu({key}: {key: string}) {
    navigator(`${key}`);
  };

  function desktopMenu() {
    return (
      <StyledMenu items={menuItems} defaultSelectedKeys={[location.pathname]} disabledOverflow={true} onClick={routeMenu} mode='horizontal' />
    )
  };

  function mobileMenu() {
    return (
      <Dropdown menu={{ items: menuItems, onClick: routeMenu }} >
        <Button style={{width: 50, height: 50}} icon={<MenuOutlined />} />
      </Dropdown>
    )
  }

  return (
    <Navigation>
      <Logo />
      { isMobile ? mobileMenu() : desktopMenu()}
    </Navigation>
  );
}
