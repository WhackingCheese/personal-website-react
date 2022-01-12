import styled from "styled-components";

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
    width: calc(100% + 1.5rem);
    background-color: ${(props) => props.theme.accent};
    left: -1.5rem;
    bottom: -8px;
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
  color: white;
  margin: 40px;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.5s ease;
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
  height: 400px;
  width: 350px;

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
`;