import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";
import { SemesterItem, SemesterHeading, SemesterContainer, CoursesTitle, CoursesContainer, SemestersContainer, CourseItem, CourseItemName, CourseItemNumber } from "./Courses.styles";

function Courses() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <CoursesContainer>
      <CoursesTitle>
        {t(data.courses.title)}
      </CoursesTitle>
      <SemestersContainer>
        {data.courses.courses.map((semester, i) => {
          return (
            <SemesterContainer key={i}>
              <SemesterHeading>
                {t(semester.semester)}
              </SemesterHeading>
              <SemesterItem>
                {semester.courses.map((course, j) => {
                  return (
                    <CourseItem key={j}>
                      <CourseItemName>
                        {t(course.number)}
                      </CourseItemName>
                      <CourseItemNumber>
                        {t(course.name)}
                      </CourseItemNumber>
                    </CourseItem>
                  );
                })}
              </SemesterItem>
            </SemesterContainer>
          );
        })}
      </SemestersContainer>
    </CoursesContainer>
  );
}

export default Courses;
