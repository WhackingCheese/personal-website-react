import styled from "styled-components";

export const PortfolioContainer = styled.div`
  margin: 2rem 0;
`;

export const PortfolioProjectType = styled.h2`
  margin: 0 calc((100vw - 100%) / 2 * -1);
  padding: 0.25rem calc((100vw - 100%) / 2 + 2rem);
  width: 100%;
  background-color: ${(props) => props.theme.accent};
  color: white;
`;

export const PortfolioCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  box-sizing: border-box;
  padding: 2rem;
  transition: padding 0.5s;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const PortfolioCardContent = styled.div`
  padding: 1.5rem;
  background: linear-gradient(
    hsl(0, 0%, 0%, 0),
    hsl(20, 0%, 0%, 0.5) 30%,
    hsl(0, 0%, 0%, 1)
  );
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(100%) translateY(-6.2rem);
  transition: transform 0.5s;
`;

export const PortfolioCardTitle = styled.h1`
  position: relative;
  font-size: 22px;
  font-weight: 600;
  width: max-content;
  max-width: 100%;
  margin-bottom: 1rem;
  text-shadow: 0 0 4px #000000;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    width: calc(100% + 1.8rem);
    background-color: ${(props) => props.theme.accent};
    left: -1.5rem;
    bottom: -8px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
`;

export const PortfolioCardBody = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
  position: relative;
`;

export const PortfolioCardContentContainer = styled.div`
  opacity: 0%;
  transition: opacity 0.5s;
`;

export const PortfolioCardButtonContainer = styled.div`
  display: flex;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
`;

export const PortfolioCardButton = styled.a`
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background-color: ${(props) => props.theme.accent};
  padding: 0.3em 1.15em;
  border-radius: 0.25em;
  color: white;

  &:hover,
  &:focus {
    filter: brightness(85%);
  }
`;

export const PortfolioCard = styled.div`
  grid-column: ${(props) => props.isLarge ? '1 / -1' : 'auto'};
  color: white;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.5s ease, border-radius 0.5s;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  height: 300px;
  width: 100%;
  border: 1px solid #000;
  box-sizing: border-box;

  @media (max-width: 720px) {
    height: 330px;
  }

  @media (max-width: 500px) {
    padding-top: ${(props) => props.longText ? '150px' : '0px'};
  }

  @media (max-width: 480px) {
    border-radius: 0;
  }

  @media (max-width: 360px) {
    padding-top: ${
      (props) => props.longText ? `${props.textLength * 0.5 + 150}px` : `${props.textLength}px`};
  }

  &:hover,
  &:focus {
    & > ${PortfolioCardContent},
    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      transition-delay: 0.5s; 
    }

    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      transition-delay: 1s;
    } 
  }

  &:hover,
  &:focus,
  &:focus-within {
    transform: scale(1.05);

    & > ${PortfolioCardContent} ${PortfolioCardTitle}::after {
      transform: scaleX(1);
    }
    
    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      opacity: 100%;
    }
    
    & > ${PortfolioCardContent},
    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      transform: translateY(0%);
    }
  }

  @media (hover: none) {
    & > ${PortfolioCardContent} ${PortfolioCardTitle}::after {
      transform: scaleX(1);
    }
    
    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      opacity: 100%;
    }
    
    & > ${PortfolioCardContent},
    & > ${PortfolioCardContent} ${PortfolioCardContentContainer} {
      transform: translateY(0%);
    }
  }
`;
