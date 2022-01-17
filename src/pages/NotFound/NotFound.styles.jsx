import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotFoundMessageContainer = styled.div`
  font-size: 16px;
  margin: 0 1em;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const NotFound404 = styled.h1`
  color: ${(props) => props.theme.accent};
  font-size: 6em;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const NotFoundText = styled.p`
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const NotFoundSubtext = styled.p`
  color: ${(props) => props.theme.primary};
  transition: color 0.5s;
  font-size: 1.25em;
`;
