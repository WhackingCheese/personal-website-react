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
  IconLight,
  FillerDiv
} from './Navigation.styles';

function Navigation() {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ t, lang, changeLang ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  const [ theme, changeTheme ] = useContext(ThemeContext);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const icon = theme === 'light' ? <IconDark/> : <IconLight/>;

  window.addEventListener('DOMContentLoaded', () => {
    const fn = (() => {
      let header = document.getElementsByTagName('header')[0];
      if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth > 768) {
        header.style.fontSize = '10px';
      } else {
        header.style.fontSize = '14px';
      }
    });
    window.onscroll = fn;
    window.onresize = fn;
  });
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <WebsiteLogo/>
          <FillerDiv  posleft='true'/>
        </NavLink>
        <Burger onClick={toggleIsOpen}/>
        <NavMenu>
          {data.routes.map((route, i) => {
            return (
              <NavLink to={route.route} key={i} fontSize='14px'>
                {t(route.name)}
              </NavLink>
            );
          })}
        </NavMenu>
        <NavMenu>
          <NavLink to='#' onClick={changeLang} noactive='true' fontSize='14px'>
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
