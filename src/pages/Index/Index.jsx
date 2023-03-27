import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { IconContainer, IconLink, IndexContainer, IndexSlant, ResumeButton, IndexInfoContainer, IndexTitle, IndexSubtitle, IndexPrefix, IndexOuterContainer } from "./index.styles";
import { NavLink as Link } from 'react-router-dom';

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <IndexOuterContainer>
      <IndexContainer>
        <IndexInfoContainer>
          <IndexPrefix>
            {t(data.index.prefix)}
          </IndexPrefix>
          <div>
            <IndexTitle>
                {t(data.index.title)}
            </IndexTitle>
            <IndexTitle accented={true}>
                {t(data.index.name[0])}
            </IndexTitle>
            <IndexTitle>
                {t(data.index.name[1])}
            </IndexTitle>
          </div>
          <IndexSubtitle>
            {t(data.index.subtitle)}
          </IndexSubtitle>
          <Link to={data.index.button_ref}>
            <ResumeButton>
              {t(data.index.button)}
            </ResumeButton>
          </Link>
        </IndexInfoContainer>
      </IndexContainer>
      <IndexSlant/>
      <IconContainer>
        {data.index.icons.map((link, i) => {
          let Elm = data.links[link].icon;
          return (
            <IconLink key={i} href={data.links[link].href}>
              <Elm/>
            </IconLink>
          )
        })}
      </IconContainer>
    </IndexOuterContainer>
  );
}

export default Index;
