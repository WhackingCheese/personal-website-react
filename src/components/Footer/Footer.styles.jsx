import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.bg_secondary};
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);

  @media print {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  margin: 25px 0;
`;

export const FooterContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextItem = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
  margin: ${(props) => props.margin ? props.margin : '0 0 10px 0'};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.primary};
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
