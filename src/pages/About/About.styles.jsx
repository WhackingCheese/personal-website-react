import styled from "styled-components";

export const Section = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${(props) => props.sectionNum % 2 == 1 ? props.theme.bg_secondary : 'transparent'};
  margin: ${(props) => props.sectionNum % 2 == 1 ? '0 calc((100vw - 100%) / 2 * -1)' : '0 0'};
  padding: ${(props) => props.sectionNum % 2 == 1 ? '0 calc((100vw - 100%) / 2)' : '0 0'};
`;
