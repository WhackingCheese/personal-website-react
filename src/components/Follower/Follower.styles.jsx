import styled from "styled-components";

export const FollowerStyles = styled.div`
  position: fixed;
  width: 32px;
  height: 32px;
  margin: -16px 0px 0px -16px;
  border: 2px solid grey;
  border-radius: 50%;
  pointer-events: none !important;
  z-index: 1000;

  @media (hover: none) {
    display: none;
  }
   
  @media print {
    display: none;
  }
`;
