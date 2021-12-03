import {
  Nav,
  Burger,
  WebsiteLogo,
  NavLink,
  Link,
  NavMenu
} from './Header.styles';

function Header() {
  /*
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementsByTagName('header')[0].style.height = '80px;';
    } else {
      document.getElementsByTagName('header')[0].style.height = '120px';
    }
  }
  */
  return (
    <Nav>
      <NavLink to='/'>
        <WebsiteLogo />
      </NavLink>
      <Burger/>
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
        <Link to='#'>
          ENG
        </Link>
        <Link to='#'>
          ISL
        </Link>
      </NavMenu>
    </Nav>
  );
}

export default Header;
