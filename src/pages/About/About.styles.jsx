import styled from "styled-components";

export const AboutContainer = styled.div`
  display: block;
`;

export const Section = styled.div`
  height: 600px;
  width: 100%;
  transition: background-color 0.5s;
  position: relative;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.bg_terciary};
    margin: 0 calc((100vw - 100%) / 2 * -1);
    padding: 0 calc((100vw - 100%) / 2);
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 2rem;
  box-sizing: border-box;
  position: relative;
`;

export const AboutMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const AboutMainInner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;

  &:nth-child(1) {
    align-items: flex-end;
  }

  &:nth-child(2) {
    justify-content: flex-start;
    height: auto;
  }
`;

export const AboutMainContainer = styled.div`
  margin: 2em;
  margin-left: 6em;
`;

export const AboutMainPicture = styled.img`
  height: 400px;
  transform: translateY(5em);
  display: block;
  position: relative;
`;

export const AboutMainHeader = styled.h1`
  font-size: 2em;
  font-weight: 700;
  transition: color 0.5s;
  color: ${(props) => props.theme.primary};
  position: relative;
  margin-left: 50px;
  margin-bottom: 0.5em;

  &::before {
    content: "";
    height: 2px;
    width: 35px;
    transition: background-color 0.5s;
    background-color: ${(props) => props.theme.secondary};
    position: absolute;
    top: 50%;
    left: -50px;
  }
`;

export const AboutMainText = styled.p`
  text-align: justify;
  margin-bottom: 0.5em;
`;
