import { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../';
import {
  Nav,
  Burger,
  WebsiteLogo,
  NavLink,
  NavMenu,
  CloseIcon,
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  IconDark,
  IconLight
} from './Navigation.styles';

function Navigation(props) {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ lang, changeLang ] = useContext(LanguageContext);
  const [ theme, changeTheme ] = useContext(ThemeContext);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const icon = theme === 'light' ? <IconLight/> : <IconDark/>;
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <WebsiteLogo />
        </NavLink>
        <Burger onClick={toggleIsOpen}/>
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/portfolio'>
            Portfolio
          </NavLink>
          <NavLink to='/resume'>
            Resume
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to='#' onClick={changeLang} noactive='true'>
            {lang === 'is' ? 'ENG' : 'ISL'}
          </NavLink>
          <NavLink to='#' onClick={changeTheme} noactive='true'>
            {icon}
          </NavLink>
        </NavMenu>
      </Nav>
      <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
        <CloseIcon onClick={toggleIsOpen}/>
        <SidebarMenu>
          <SidebarLink to='/'>
            Home
          </SidebarLink>
          <SidebarLink to='/about'>
            About
          </SidebarLink>
          <SidebarLink to='/portfolio'>
            Portfolio
          </SidebarLink>
          <SidebarLink to='/resume'>
            Resume
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu margin={true}>
          <SidebarLink to='#' onClick={changeLang} noactive='true'>
            {lang === 'is' ? 'ENG' : 'ISL'}
          </SidebarLink>
          <SidebarLink to='#' onClick={changeTheme} noactive='true'>
            {icon}
          </SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
}

export default Navigation;
