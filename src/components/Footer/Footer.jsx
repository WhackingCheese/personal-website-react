import { FooterContainer, IconContainer, StyledFooter, Link, TextItem } from "./Footer.styles";
import { useContext } from "react";
import { DataContext, LanguageContext } from '../../components';
import { useLocation } from "react-router";

function Footer() {

  const [ data ] = useContext(DataContext);
  const [ t ] = useContext(LanguageContext);

  if (useLocation().pathname === '/') {
    return ( <></> );
  }

  return (
    <StyledFooter>
      <FooterContainer>
        <IconContainer>
          {data.footer.links.map((link, i) => {
            let Elm = data.links[link].icon;
            return (
              <Link key={i} color='white' href={data.links[link].href} margin='15px'>
                <Elm size='30px'/>
              </Link>
            );
          })}
        </IconContainer>
        <TextItem margin='10px 0' fontWeight='500' fontSize='14px'>
          {t(data.footer.text)}
        </TextItem>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
