import * as React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import logourl from '../assets/logo.svg';

export const Logo = styled.img.attrs({ src: logourl })`
  width: 250px;
  height: 50px;
`;

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #1e91e8;
`;

export const StyledMenu = styled(Menu)`
  background-color: #00000000;
  display: block;
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px;
  border: 0;
  .ant-menu-item {
    color: white !important;
    border-radius: 50px !important;
    margin-right: 10px !important;
  }
  .ant-menu-item-selected, .ant-menu-item:hover {
    color: #1e91e8 !important;
    background-color: white !important;
  };
  .ant-menu-item::after {
    border: 0 !important;
  }
`;
