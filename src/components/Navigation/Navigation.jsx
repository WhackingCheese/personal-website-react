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
  FillerDiv
} from './Navigation.styles';
import { BsMoonStars, BsSun } from 'react-icons/bs';

function Navigation() {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ t, lang, changeLang ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  const [ theme, changeTheme ] = useContext(ThemeContext);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const Icon = theme === 'light' ? BsMoonStars : BsSun;

  window.addEventListener('DOMContentLoaded', () => {
    const fn = (() => {
      let header = document.getElementsByTagName('header')[0];
      if ((document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) && window.innerWidth > 768) {
        header.style.fontSize = '10px';
        header.style.boxShadow = '0 1px 10px 0 rgba(0, 0, 0, 0.25)';
      } else {
        if (window.innerWidth < 765) {
          header.style.boxShadow = '0 1px 10px 0 rgba(0, 0, 0, 0.25)';
          header.style.fontSize = '12px';
        } else {
          header.style.boxShadow = 'none';
          header.style.fontSize = '14px';
        }
      }
    });
    fn();
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
            {lang === 'is' ? 'EN' : 'IS'}
          </NavLink>
          <NavLink to='#' onClick={changeTheme} noactive='true'>
            <Icon size='18px'/>
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
            {lang === 'is' ? 'EN' : 'IS'}
          </SidebarLink>
          <SidebarLink to='#' onClick={changeTheme} noactive='true'>
            <Icon size='24px'/>
          </SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
}

export default Navigation;
