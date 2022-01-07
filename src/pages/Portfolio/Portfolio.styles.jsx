import styled from "styled-components";

export const PortfolioCardContent = styled.div`
  color: black;
  padding: 1.5rem;
  background: linear-gradient(
    hsl(0, 0%, 0%, 0),
    hsl(20, 0%, 0%, 0.3) 30%,
    hsl(0, 0%, 0%, 1)
  );
`;

export const PortfolioCardTitle = styled.h1`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  width: max-content;
  max-width: 100%;
  margin-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    width: calc(100% + 1.5rem);
    background-color: ${(props) => props.theme.accent};
    left: -1.5rem;
    bottom: -2px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
`;

export const PortfolioCardBody = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
  position: relative;
`;

export const PortfolioCardButton = styled.a`
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: ${(props) => props.theme.accent};
  padding: 0.25em 1em;
  border-radius: 0.25em;

  &:hover,
  &:focus {
    filter: brightness(85%);
  }
`;

export const PortfolioCard = styled.div`
  margin: 40px;
  background-color: white;
  border-radius: 0.5rem;
  max-width: 35ch;
  padding: 10rem 0 0;
  overflow: hidden;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);

    & > ${PortfolioCardContent} ${PortfolioCardTitle}::after {
      transform: scaleX(1);
    }
  }
`;
