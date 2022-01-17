import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 5vh 6.5vw;
  gap: 2rem;
  box-sizing: border-box;
  transition: gap 0.5s, padding 0.5s;
  z-index: 1;

  @media (max-width: 1000px) {
    gap: 1.5rem;
  }

  @media (max-width: 880px) {
    padding: 5vh 4.5vw;
    padding-left: max(5vh, 50px);
  }

  @media (max-width: 320px) {
    padding: 5vh 0;
    width: 100%;
    justify-content: space-evenly;
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
    transition: height 0.5s, width 0.5s;
    display: block;
    height: 32px;
    width: 32px;
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (max-width: 1200px) {
    & > * {
      height: 24px;
      width: 24px;
    }
  }
`;

export const IndexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndexInfoContainer = styled.div`
  @keyframes slideIn {
    0% { transform: translate(-150%, -10%); }
    100% { transform: translate(20%, -10%); }
  }
  
  max-width: 800px;
  width: fit-content;

  @media (min-width: 769px) {
    animation: slideIn 2s forwards;
    transform: translate(20%, -10%);
  }

  @media (max-width: 768px) {
    transform: translate(0%, -10%);
  }

  @media (max-width: 520px) {
    & > *,
    & > * > * {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    & > *,
    & > * > * {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    & > *,
    & > * > * {
      font-size: 10px;
    }
  }
`;

export const ResumeButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.accent};
  font-weight: 600;
  font-size: 1em;
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
  font-size: 1em;

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
  font-size: 2.5em;
  transition: color 0.5s;
`;

export const IndexSubtitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
  color: ${(props) => props.theme.primary};
  margin: 1rem 0 2.5rem 0;
  transition: color 0.5s;
`;

export const IndexSlant = styled.div`
  width: 50%;
  height: 150%;
  background-color: ${(props) => props.theme.bg_terciary};
  position: absolute;
  transform: translate(-42%, -10%) rotate(-15deg);
  transition: background-color 0.5s;
  z-index: 1;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    display: none;
  }
`;
