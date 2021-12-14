import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";
import { CourseItem, SemesterItem, SemesterHeading, SemesterContainer } from "./Courses.styles";

function Courses() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <div>
      {data.courses.courses.map((semester, i) => {
        return (
          <SemesterContainer>
            <SemesterHeading>
              {t(semester.semester)}
            </SemesterHeading>
            <SemesterItem>
              {semester.courses.map((course, j) => {
                return (
                  <CourseItem>
                    <p>{t(course.name)}</p>
                    <p>{t(course.number)}</p>
                    <p>{t(course.credits)}</p>
                    <p>{t(course.finished)}</p>
                  </CourseItem>
                );
              })}
            </SemesterItem>
          </SemesterContainer>
        );
      })}
    </div>
  );

}

export default Courses;
