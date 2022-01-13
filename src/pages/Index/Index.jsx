import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { TextItem, ItemContainer, ItemContainerInner } from "./index.styles";
import background from '../../assets/images/background.jpg';

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
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
  );
}

export default Index;
