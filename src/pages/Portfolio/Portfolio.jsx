import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { PortfolioCard, PortfolioCardBody, PortfolioCardButton, PortfolioCardButtonContainer, PortfolioCardContent, PortfolioCardContentContainer, PortfolioCardsContainer, PortfolioCardTitle, PortfolioContainer } from "./Portfolio.styles";

function Portfolio() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <div>
      {data.projects.projects.map((projects, i) => {
        return (
          <div key={i}>
            <p>{t(projects.type)}</p>
            <PortfolioCardsContainer>
              {projects.projects.map((project, j) => {
                return (
                  <PortfolioCard
                    backgroundImage={process.env.PUBLIC_URL + project.img}
                    key={j}
                    isLarge={project.important}
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
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
