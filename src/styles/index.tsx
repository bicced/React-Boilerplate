import styled from 'styled-components';
import { Menu } from 'antd';

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
  background-color: blue;
`;

export const StyledMenu = styled(Menu)`
  background-color: blue;
  display: block;
`;

export const StyledMenuItem = styled(Menu.Item)`
  color: white;
`;
