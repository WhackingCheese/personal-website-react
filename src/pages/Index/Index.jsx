import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { IconContainer, IconLink, IndexContainer, IndexSlant, ResumeButton, IndexInfoContainer, IndexTitle, IndexSubtitle, IndexPrefix, Temp } from "./index.styles";

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <>
    <Temp/>
    <IndexSlant/>
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
        <a href='/resume'>
          <ResumeButton>
            {t(data.index.resume_button)}
          </ResumeButton>
        </a>
      </IndexInfoContainer>
    </IndexContainer>







      <IconContainer>
        {data.index.icons.map((link, i) => {
          let Elm = data.links[link].icon;
          return (
            <IconLink key={i} href={data.links[link].href}>
              <Elm size='2rem'/>
            </IconLink>
          )
        })}
      </IconContainer>
    </>
  );
}

export default Index;
