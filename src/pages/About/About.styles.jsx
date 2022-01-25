import styled from "styled-components";

export const AboutContainer = styled.div`
  display: block;
`;

export const Section = styled.div`
  width: 100%;
  transition: background-color 0.5s;
  position: relative;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.bg_terciary};
    margin: 0 calc((100vw - 100%) / 2 * -1);
    padding: 0 calc((100vw - 100%) / 2);
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 2rem;
  padding-bottom: 0;
  box-sizing: border-box;
  position: relative;
`;

export const AboutMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const AboutMainInner = styled.div`
  display: flex;

  &:nth-child(1) {
    justify-content: flex-start;
    width: 30%;
    align-items: flex-end;

    @media (max-width: 900px) {
      width: 100%;
      justify-content: center;
    }
  }

  &:nth-child(2) {
    margin-left: 2em;
    justify-content: center;
    width: 70%;
    justify-content: flex-start;
    margin-bottom: 2em;

    @media (max-width: 900px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const AboutMainContainer = styled.div`
  display: block;
`;

export const AboutMainPicture = styled.img`
  height: 500px;
  display: block;
  position: relative;

  @media (max-width: 900px) {
    object-fit: cover;
    object-position: top;
    height: 250px;
    width: 250px;
  }
`;

export const AboutMainHeader = styled.h1`
  font-size: 2em;
  font-weight: 700;
  transition: color 0.5s;
  color: ${(props) => props.accented ? props.theme.accent : props.theme.primary};
  display: inline-block;
  white-space: pre;
  position: relative;
  margin-bottom: 0.5em;

  &:nth-child(1) {
    margin-left: 50px;

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
  }
`;

export const AboutMainText = styled.p`
  text-align: justify;
  margin-bottom: 1em;
  transition: color 0.5s;
  color: ${(props) => props.theme.primary};
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;
