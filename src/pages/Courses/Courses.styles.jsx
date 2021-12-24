import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export const SemesterContainer = styled.div`
  margin-bottom: 40px;
`;

export const SemesterHeading = styled.h3`
  display: flex;
  font-size: 24px;
  padding: 1rem;
  justify-content: center;
  transition: color 0.5s;
`;

export const SemesterItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  margin: 1rem;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.bg_secondary};
  padding: 1rem;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
  flex: 1;
  box-sizing: border-box;
  border-radius: 5px;
  transition: color 0.5s, background-color 0.5s;

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }

  &:hover {
    background-color: ${(props) => props.theme.bg_secondary};
    color: ${(props) => props.theme.secondary};
  }
`;

export const CardHeader = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

export const CardPoints = styled.div`
  width: 30px;
  text-align: center;
`;

export const Finished = styled(AiOutlineCheck)`
  height: 30px;
  width: 30px;
`;

export const NotFinished = styled(AiOutlineClose)`
  height: 30px;
  width: 30px;
`;

export const CoursesTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin: 20px 10px;
  font-size: 24px;
  transition: color 0.5s;
`;

export const CoursesSubtitle = styled.h3`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin: 0 10px;
  font-weight: 400;
  margin-bottom: 15px;
  transition: color 0.5s;
`;
