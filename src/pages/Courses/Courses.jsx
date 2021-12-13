import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";



function Courses() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <h1>
      Courses
    </h1>
  );

}

export default Courses;
