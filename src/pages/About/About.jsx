import { useContext } from "react";
import { DataContext, LanguageContext } from "../../components";
import { AboutContainer, AboutMain, AboutMainInner, AboutMainText, Section, SectionInner, AboutMainHeader, AboutMainContainer, AboutMainPicture } from "./About.styles";
import profile from '../../assets/images/profile-transparent.png';

function About() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return (
    <AboutContainer>
      <Section>
        <SectionInner>
          <AboutMain>
            <AboutMainInner>
              <AboutMainPicture
                src={profile}
              />
            </AboutMainInner>
            <AboutMainInner>
              <AboutMainContainer>
                <div>
                  <AboutMainHeader tail={true}>
                    {t(data.about.about_main.header).split(" ")[0]}
                  </AboutMainHeader>
                  <AboutMainHeader accented={true}>
                    {' ' + t(data.about.about_main.header).split(" ")[1]}
                  </AboutMainHeader>
                </div>
                {data.about.about_main.text.map((textItem, i) => {
                  return (
                    <AboutMainText key={i}>
                      {t(textItem)}
                    </AboutMainText>
                  );
                })}
              </AboutMainContainer>
            </AboutMainInner>
          </AboutMain>
        </SectionInner>
      </Section>
    </AboutContainer>
  );
}

export default About;
