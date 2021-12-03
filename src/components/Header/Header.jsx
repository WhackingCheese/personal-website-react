import {
  Nav,
  Burger,
  WebsiteLogo,
  NavLink,
  Link,
  NavMenu
} from './Header.styles';

function Header() {
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
          ISL
        </Link>
      </NavMenu>
    </Nav>
  );
}

export default Header;
