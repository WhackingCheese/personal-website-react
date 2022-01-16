import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { PortfolioCard, PortfolioCardBody, PortfolioCardButton, PortfolioCardButtonContainer, PortfolioCardContent, PortfolioCardContentContainer, PortfolioCardsContainer, PortfolioCardTitle, PortfolioProjectType, PortfolioContainer } from "./Portfolio.styles";

function Portfolio() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <>
      {data.projects.projects.map((projects, i) => {
        return (
          <PortfolioContainer key={i}>
            <PortfolioProjectType>
              {t(projects.type)}
            </PortfolioProjectType>
            <PortfolioCardsContainer>
              {projects.projects.map((project, j) => {
                return (
                  <PortfolioCard
                    backgroundImage={process.env.PUBLIC_URL + project.img}
                    key={j}
                    isLarge={project.important}
                    textLength={t(project.description).length}
                    longText={project.longtext}
                  >
                    <PortfolioCardContent>
                      <PortfolioCardTitle>
                        {t(project.title)}
                      </PortfolioCardTitle>
                      <PortfolioCardContentContainer>
                        <PortfolioCardBody>
                          {t(project.description)}
                        </PortfolioCardBody>
                        <PortfolioCardButtonContainer>
                          {project.repo && 
                            <PortfolioCardButton href={project.repo}>
                              {t(data.projects.repo_text)}
                            </PortfolioCardButton>
                          }
                          {project.href &&
                            <PortfolioCardButton href={project.href}>
                              {t(data.projects.active_link)}
                            </PortfolioCardButton>
                          }
                        </PortfolioCardButtonContainer>
                      </PortfolioCardContentContainer>
                    </PortfolioCardContent>
                  </PortfolioCard>
                );
              })}
            </PortfolioCardsContainer>
          </PortfolioContainer>
        );
      })}
    </>
  );
}

export default Portfolio;
