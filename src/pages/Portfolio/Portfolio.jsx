import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';

function Portfolio() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <p>
      Portfolio
    </p>
  );
}

export default Portfolio;
