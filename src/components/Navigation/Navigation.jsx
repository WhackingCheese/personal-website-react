import { useContext, useState } from 'react';
import { DataContext, LanguageContext, ThemeContext } from '../';
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
  const [ t, lang, changeLang ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  const [ theme, changeTheme ] = useContext(ThemeContext);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const icon = theme === 'light' ? <IconLight/> : <IconDark/>;
  
  return (
    <>
      <Nav>
        <NavLink to='/' posleft='true'>
          <WebsiteLogo/>
        </NavLink>
        <Burger onClick={toggleIsOpen}/>
        <NavMenu>
          {data.routes.map((route, i) => {
            return (
              <NavLink to={route.route} key={i}>
                {t(route.name)}
              </NavLink>
            );
          })}
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
      <SidebarContainer isOpen={isOpen}>
        <CloseIcon onClick={toggleIsOpen}/>
        <SidebarMenu>
          {data.routes.map((route, i) => {
            return (
              <SidebarLink to={route.route} onClick={toggleIsOpen} key={i}>
                {t(route.name)}
              </SidebarLink>
            );
          })}
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
