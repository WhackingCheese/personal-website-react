import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { TextItem, ItemContainer, IconContainer, ItemContainerInner, IconLink, IndexBackground, ProfileImage } from "./index.styles";
import background from '../../assets/images/background.jpg';
import profileTransparent from '../../assets/images/profile-transparent.png';

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <IndexBackground image={background}>
      <ItemContainer>
        <ItemContainerInner>
          <TextItem fontSize='24px' fontWeight='600'>
            {t(data.index.title)}
          </TextItem>
          <TextItem fontSize='24px' fontWeight='600'>
            {t(data.index.subtitle)}
          </TextItem>
        </ItemContainerInner>
      </ItemContainer>
      <ProfileImage src={profileTransparent}/>
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
    </IndexBackground>
  );
}

export default Index;
