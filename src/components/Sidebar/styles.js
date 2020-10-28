import styled from 'styled-components';

import logo from '../../assets/logo.svg';

import { shade } from 'polished';


export const SidebarContainer = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: -47.44%;
  width: 220px;
  height: 100%;

  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    .sidebarHeader {
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      height: 68px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 35px;
      display: flex;
      align-items: center;
      text-align: center;
      text-align: center;
      padding-left: 20px;

      color: #FFFFFF;

      background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    }
`;

export const LogoContainer = styled.div`
  width: 220px;
  height: 258px;

  position: relative;
  background: url(${logo}) no-repeat;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  position: relative;
  display: flex;
  flex-direction: column;
  left: 0%;
  right: 0%;
  top: 0%;
  align-items: left;
  padding-left: 0;
  text-align: left;
  font-family: 'Quicksand', sans-serif;
    li {
      padding-top: 7px;
      height: 33px;
      border: 1px solid #c3c3c3;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding-left: 24px;
      background: #fff;
      transition: background-color 0.2s;
      transition: border-left 0.2s;

      &:hover {
      background: ${shade(0.2, '#FDF1EB')};
      border-left: 5px solid #ED7839;
    }
  }
`;