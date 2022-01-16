import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 5vh 6.5vw;
  gap: 2rem;
  box-sizing: border-box;
  transition: gap 0.5s;
  z-index: 1;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const IconLink = styled.a`
  color: ${(props) => props.theme.primary};
  height: max-content;
  height: max-content;
  display: block;
  text-decoration: none;
  transition: color 0.5s;

  & > * {
    display: block;
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;



export const Temp = styled.div`
  position: absolute;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: pink;
`;

















export const IndexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndexInfoContainer = styled.div`
  max-width: 800px;
  width: fit-content;
`;

export const ResumeButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.accent};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.65rem 2rem;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.terciary};
    color: ${(props) => props.theme.accent};
  }
`;

export const IndexPrefix = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  transition: color 0.5s;

  &::before {
    margin-right: 1rem;
    content: "";
    height: 1px;
    width: 50px;
    background-color: grey;
    display: inline-block;
    position: relative;
    transform: translateY(-500%);
  }
`;

export const IndexTitle = styled.h1`
  color: ${(props) => props.accented ? props.theme.accent : props.theme.primary};
  display: inline-block;
  white-space: pre;
  font-size: 2.5rem;
  transition: color 0.5s;
`;

export const IndexSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.primary};
  margin: 1rem 0 2.5rem 0;
  transition: color 0.5s;
`;

export const IndexSlant = styled.div`
  width: 40%;
  height: 150%;
  background-color: ${(props) => props.theme.bg_terciary};
  position: absolute;
  transform: translate(-25%, -10%) rotate(-15deg);
  transition: background-color 0.5s;
  z-index: 1;
`;
