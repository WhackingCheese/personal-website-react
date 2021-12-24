import styled from "styled-components";

import { NavLink as Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ReactComponent } from '../../assets/images/branding/logo-transparent.svg';

export const Nav = styled.header`
  background-color: ${(props) => props.theme.bg_secondary};
  position: fixed;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  transition: background-color 0.5s, font-size 0.5s;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 100 !important;

  @media screen and (min-width: 1024px) {
    padding: 0 calc((100% - 1024px) / 4);
    width: calc(100% - ( 2 * ((100% - 1024px) / 4)));
  }

  @media print {
    display: none;
  }
`;

export const Burger = styled(AiOutlineMenu)`
  display: none;
  color: ${(props) => props.theme.primary};
  margin: 1em;
  height: 3.125em;
  width: 3.125em;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const WebsiteLogo = styled(ReactComponent)`
  transition: 0.5s;
  display: block;
  height: 3.125em;
  width: 3.125em;
  fill: ${(props) => props.theme.primary};
  transition: fill 0.5s;
  margin: 1em 0;
`;

export const NavLink = styled(Link)`
  font-size: ${(props) => props.fontSize ? props.fontSize : ''};
  display: flex;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  margin: 0 1em;
  transition: color 0.5s;

  &.active {
    color: ${(props) => props.noactive === 'true' ? props.theme.primary : props.theme.accent};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
    ${WebsiteLogo} {
      fill: ${(props) => props.theme.accent};
    }
  }
`;

export const FillerDiv = styled.div`
  width: 0px;
  transition: width 0.5s;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.posleft === 'true' ? 'calc(64px - 3.125em)' : 'max-content'};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg_secondary};
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  transition: right 0.5s, background-color 0.5s;
  right: ${({ isOpen }) => (isOpen ? '0' : '-110%')};
  
  @media print {
    display: none;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
  margin: 1em;
  height: 3.125em;
  width: 3.125em;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const SidebarMenu = styled.div`
  ${(props) => props.margin ? 'margin-top: 3em;' : ''}
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  font-size: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) => props.theme.primary};

  &.active {
    color: ${(props) => props.noactive === 'true' ? props.theme.primary : props.theme.accent};
  }
  
  &:hover {
    color: ${(props) => props.theme.accent};
  }

  @media screen and (max-height: 768px) {
    height: 60px;
  }
`;
