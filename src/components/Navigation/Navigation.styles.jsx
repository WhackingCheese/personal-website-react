import styled from "styled-components";

import { NavLink as Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ReactComponent } from '../../Assets/Images/Branding/logo-transparent.svg';

export const Nav = styled.header`
  background-color: ${(props) => props.theme.bg_secondary};
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
  
  @media screen and (min-width: 1024px) {
    padding: 0 calc((100% - 1024px) / 4);
  }
`;

export const Burger = styled(AiOutlineMenu)`
  display: none;
  color: ${(props) => props.theme.primary};
  transition: 0.5s;
  margin: 15px 1rem;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const WebsiteLogo = styled(ReactComponent)`
  display: block;
  height: 50px;
  width: 50px;
  fill: ${(props) => props.theme.primary};
  transition: 0.5s;
  margin: 15px 0;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.5s;

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
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  transition: 0.5s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-110%')};
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  transition: 0.5s;
  margin: 1rem;
  height: 50px;
  width: 50px;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const SidebarMenu = styled.div`
  ${(props) => props.margin ? 'margin-top: 3rem;' : ''}
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.5s ease-in-out;
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

export const IconDark = styled(BsSun)`
  margin-top: 3px;
  height: 21px;
  width: 21px;
`;

export const IconLight = styled(BsMoonStars)`
  margin-top: 3px;
  height: 21px;
  width: 21px;
`;
