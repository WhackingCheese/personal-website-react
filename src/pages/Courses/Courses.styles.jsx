import styled from "styled-components";

export const CoursesContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const SemesterHeading = styled.h3`
  display: flex;
  font-size: 24px;
  margin: 1em;
  transition: color 0.5s;
  position: relative;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 0.5rem);
    height: 4px;
    bottom: -6px;
    background-color: ${(props) => props.theme.accent};
  }
`;

export const CoursesTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 0 calc((100vw - 100%) / 2 * -1);
  background-color: ${(props) => props.theme.accent};
  padding: 0.25em calc((100vw - 100%) / 2 + 1em);
  font-size: 1.5rem;
  transition: color 0.5s;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CoursesSubtitle = styled.h3`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin: 1rem 0;
  font-weight: 400;
  margin-bottom: 15px;
  transition: color 0.5s;
`;

export const CourseItem = styled.div`
  margin: 1rem;
  position: relative;
  margin-left: 2.5em;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.primary};
    transition: background-color 0.5s;
    top: 50%;
    left: -1.5em;
    transform: translateY(-50%);
    border-radius: 100%;
  }
`;

export const CourseItemName = styled.p`
  font-weight: 700;
  font-size: 1em;
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
`;

export const CourseItemNumber = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
`;

export const SemesterItem = styled.div`
  display: block;
`;

export const SemestersContainer = styled.div`
  padding-left: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 5em;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

export const SemesterContainer = styled.div`
  width: fit-content;

  @media (max-width: 700px) {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    box-sizing: border-box;
    width: 100%;
    padding: 0 2em;
  }
`;
