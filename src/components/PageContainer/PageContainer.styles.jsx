import styled from "styled-components";

export const WebsiteContainer = styled.div`
  z-index: -1;
  top: 0;
  transition: background-color 0.5s;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg_primary};
  color: ${(props) => props.theme.primary};
`;

export const InnerContainer = styled.div`
  padding-top: 72px;
  
  @media print {
    padding-top: 0;
  }
`;
