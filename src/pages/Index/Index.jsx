import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { TextItem, ItemContainer, ItemContainerInner, IndexBackground } from "./index.styles";
import background from '../../assets/images/background.jpg';
import { BsEnvelope, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Index() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
      <div>
        <a href={data.links.email.href}>
          {data.links.email.icon}
        </a>
      </div>
  );
}

export default Index;
