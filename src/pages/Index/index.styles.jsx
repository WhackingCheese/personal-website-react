import styled from "styled-components";



export const IndexBackground = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 80px;
  box-sizing: border-box;
`;











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
