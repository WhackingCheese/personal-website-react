import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ItemContainerInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextItem = styled.p`
  @keyframes textLoad {
    0% {
      opacity: 0%;
      left: -100px;
    }
    30% {
      opacity: 100%;
    }
    100% {
      left: 0px;
    }
  };
  position: relative;
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
  animation: textLoad ease-in-out 1s;
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
`;
