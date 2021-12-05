import styled from "styled-components";

export const WebsiteContainer = styled.div`
  padding-top: 120px;
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg_primary};
`;
