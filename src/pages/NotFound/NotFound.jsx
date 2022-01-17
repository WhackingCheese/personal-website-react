import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";
import { NotFound404, NotFoundContainer, NotFoundMessageContainer, NotFoundSubtext, NotFoundText } from "./NotFound.styles";

function NotFound() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <NotFoundContainer>
      <NotFoundMessageContainer>
        <NotFound404>
          {'<404/>'}
        </NotFound404>
        <NotFoundText>
          {t(data.notfound.text)}
        </NotFoundText>
        <NotFoundSubtext>
          {t(data.notfound.subtext)}
        </NotFoundSubtext>
      </NotFoundMessageContainer>
    </NotFoundContainer>
  );
}

export default NotFound;
