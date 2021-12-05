import styled from "styled-components";

export const FollowerStyles = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  margin: -16px 0px 0px -16px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  pointer-events: none !important;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
