import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { IconContainer, IconLink, IndexContainer, IndexSlant, ResumeButton, IndexInfoContainer, IndexTitle, IndexSubtitle, IndexPrefix } from "./index.styles";

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <>
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
          <a href={data.index.button_ref}>
            <ResumeButton>
              {t(data.index.button)}
            </ResumeButton>
          </a>
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
    </>
  );
}

export default Index;
