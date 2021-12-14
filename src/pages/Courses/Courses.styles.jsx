import styled from "styled-components";

export const SemesterContainer = styled.div`

`;

export const SemesterHeading = styled.h3`

`;

export const SemesterItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CourseItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 12px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.bg_secondary};
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
`;
