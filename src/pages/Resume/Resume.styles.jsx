import styled from "styled-components";

export const ResumeHeaderContainer = styled.div`
    width: min(1000px, 100%);


  @media screen and (max-width: 700px) {
    width: min(500px, 100%);
  }

  @media screen and (max-width: 364px) {
    width: min(320px, 100%);
  }

  @media screen and (max-width: 300px) {
    width: min(280px, 100%);
  }

  @media print {
    display: none;
  }
`;

export const ResumeHeader = styled.h1`
  width: fit-content;
  margin-bottom: 2rem !important;
  position: relative;
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
  margin-left: 1em;

  &::after {
    position: absolute;
    content: "";
    width: calc(100% + 12px);
    height: 4px;
    left: 0;
    bottom: -6px;
    background-color: ${(props) => props.theme.accent};
  }
`;

export const ResumeContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: margin 0.5s;
  
  & > * {
    padding: 0;
    margin: 0;
  }

  
  @media print {
    padding: 0;
    margin: 0;
    width: 1000px;

    @page {
      size: 8.5in 11.6in;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ResumeInner = styled.div`
  width: 1000px;
  max-width: 100vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 40px;

  @media print {
    border-radius: 0;
    margin-bottom: 0;
    height: 100%;
    max-width: none;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 500px;
  }

  @media screen and (max-width: 364px) {
    width: 320px;
  }

  @media screen and (max-width: 300px) {
    width: 280px;
  }
`;

export const ResumeSplit = styled.div`
  box-shadow: ${(props) => props.boxShadow === 'true' ? '0 1px 10px 0 rgba(0, 0, 0, 0.15);' : 'none'};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  padding: 20px;
  
  @media screen and (max-width: 700px) {
    width: 100%;
  }

  @media screen and (max-width: 364px) {
    width: 320px;
  }

  @media screen and (max-width: 300px) {
    width: 280px;
  }

  @media print {
    height: 1400px;
  }
`;

export const ResumeInnerContainer = styled.div`
  margin: ${(props) => props.margin ? props.margin : '0'};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageItem = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
`;

export const LineBreak = styled.hr`
  background-color: #ffffff;
  color: #ffffff;
  border-width: 0px;
  height: 1px;
  width: 100%;
  margin: 10px 0 20px 0;
`;

export const TextItem = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin ? props.margin : '0 0 10px 0'};
  display: flex;
  align-items: center;
`;

export const SegmentHeader = styled.h2`
  background-color: #333333;
  color: #FFFFFF;
  margin: 0 -20px;
  padding: 5px 20px;
  font-size: 18px;
`;

export const SegmentContainer = styled.div`
  font-size: 14px;
  margin: 15px 0;
  color: #333333;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'normal'};
  color: ${(props) => props.color ? props.color : '#333333'};
  margin: ${(props) => props.margin ? props.margin : '0'};
`;

export const IconFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'normal'};
  color: ${(props) => props.color ? props.color : '#333333'};
  margin: ${(props) => props.margin ? props.margin : '0'};

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const LinkFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'normal'};
  color: ${(props) => props.color ? props.color : '#333333'};
  margin: ${(props) => props.margin ? props.margin : '0'};

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: ${(props) => props.color ? props.color : '#333333'};
  transition: color 0.5s;
  text-decoration: none;
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  display: flex;
  align-content: center;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const SkillsContainer = styled.div`
  margin: 10px 0;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const SkillContainer = styled.div`
  margin: 5px 0;
`;

export const SkillMeter = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  border: #333333 solid 1px;
  background-color: #333333;
  overflow: hidden;
`;

export const SkillMeterInner = styled.div`
  @keyframes barLoad { 0% { width: 0px; } }
  animation: barLoad 2.5s;
  background-color: #e0dcd7;
  width: ${(props) => props.width};
  height: 100%;
  
  @media print {
    animation: none;
  }
`;
