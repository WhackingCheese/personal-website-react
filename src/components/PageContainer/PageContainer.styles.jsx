import styled from "styled-components";

export const WebsiteContainer = styled.div`
  z-index: -1;
  top: 0;
  transition: background-color 0.5s;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg_primary};
  color: ${(props) => props.theme.primary};
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  transition: padding-top 0.5s;
  padding-top: 72px;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  
  @media print {
    padding-top: 0;
  }

  @media screen and (max-width: 764px) {
    padding-top: 61.5px;
  }
`;

export const PageSizeConstraint = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-grow: 1;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`;

export const PageSizeConstraintInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;
