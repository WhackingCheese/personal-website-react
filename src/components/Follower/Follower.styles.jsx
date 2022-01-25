import styled from "styled-components";

export const FollowerStyles = styled.div`
  position: fixed;
  width: 32px;
  height: 32px;
  margin: -16px 0px 0px -16px;
  border: 2px solid grey;
  border-radius: 50%;
  pointer-events: none !important;
  z-index: 3;

  @media (hover: none) {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }
   
  @media print {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }
`;
