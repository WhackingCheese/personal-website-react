import { useContext } from "react";
import { LanguageContext, DataContext } from '../../components';
import { PortfolioCard, PortfolioCardBody, PortfolioCardButton, PortfolioCardContent, PortfolioCardTitle } from "./Portfolio.styles";

function Portfolio() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <div>
      {data.projects.projects.map((projects, i) => {
        return (
          <>
            <p>{t(projects.type)}</p>
            {projects.projects.map((project, j) => {
              return (
                <PortfolioCard>
                  <PortfolioCardContent>
                    <PortfolioCardTitle>
                      {t(project.title)}
                    </PortfolioCardTitle>
                    <PortfolioCardBody>
                      {t(project.description)}
                    </PortfolioCardBody>
                    <PortfolioCardButton href='google.com'>
                      Text
                    </PortfolioCardButton>
                  </PortfolioCardContent>
                </PortfolioCard>
              );
            })}
          </>
        );
      })}
    </div>
  );
}

export default Portfolio;
