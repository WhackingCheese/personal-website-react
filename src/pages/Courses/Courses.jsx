import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";
import { CourseCard, SemesterItem, SemesterHeading, SemesterContainer, Finished, NotFinished, CardHeader, CardContent, CardPoints, CoursesTitle, CoursesSubtitle } from "./Courses.styles";

function Courses() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <>
        <CoursesTitle>
          {t(data.courses.title)}
        </CoursesTitle>
        <CoursesSubtitle>
          {t(data.courses.subtitle)}
        </CoursesSubtitle>
        {data.courses.courses.map((semester, i) => {
          return (
            <SemesterContainer key={i}>
              <SemesterHeading>
                {t(semester.semester)}
              </SemesterHeading>
              <SemesterItem>
                {semester.courses.map((course, j) => {
                  return (
                    <CourseCard key={j}>
                      <CardHeader>
                        <p>{t(course.name)}</p>
                        {course.finished ? <Finished/> : <NotFinished/>}
                      </CardHeader>
                      <CardContent>
                        <p>{t(course.number)}</p>
                        <CardPoints>
                          {t(course.credits)}
                        </CardPoints>
                      </CardContent>
                    </CourseCard>
                  );
                })}
              </SemesterItem>
            </SemesterContainer>
          );
        })}
    </>
  );
}

export default Courses;
