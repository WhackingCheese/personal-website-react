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
  transition: padding-top 0.5s;
  padding-top: 72px;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media print {
    padding-top: 0;
  }

  @media screen and (max-width: 764px) {
    padding-top: 61.5px;
  }
`;
