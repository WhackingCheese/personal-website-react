import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";

function NotFound() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <h1>
      Page Not Found
    </h1>
  );
}

export default NotFound;
