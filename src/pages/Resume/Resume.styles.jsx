import styled from "styled-components";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsGlobe2,
  BsFillPersonFill
} from 'react-icons/bs';

export const ResumeContainer = styled.div`
  width: 1000px;
  padding: 40px 0;
  margin: 0 auto;
  
  & > * {
    padding: 0;
    margin: 0;
  }
  
  @media print {
    padding: 0;
  }
`;

export const ResumeInner = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #555555 30%, #FFFFFF 30%);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
`;

export const ResumeSplit = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  padding: 20px;
  height: fit-content;
  box-shadow: ${(props) => props.shadow === 'true' ? '0 1px 10px 0 rgba(0, 0, 0, 0.25)' : ''};
`;

export const ResumeInnerContainer = styled.div`
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
`

export const TextItem = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin ? props.margin : '0 0 10px 0'};
`;

export const SkillMeter = styled.div`
  width: 100%;
  height: 7px;
  border-radius: 7px;
  border: #333333 solid 1px;
  overflow: hidden;
`;

export const SkillMeterInner = styled.div`
  background-color: ${(props) => props.theme.accent};
  width: ${(props) => props.width};
  height: 100%;
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
  color: #333333;
`;

export const Link = styled.a`
  color: #333333;
  transition: color 0.5s;
  text-decoration: none;
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  display: flex;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
