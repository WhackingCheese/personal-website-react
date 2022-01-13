import { useContext } from "react";
import { DataContext, LanguageContext, ResumeDownload } from "../../components";
import {
  SegmentHeader,
  InfoContainer,
  TextItem,
  ImageItem,
  ResumeContainer,
  ResumeInner,
  ResumeSplit,
  LineBreak,
  SkillMeter,
  SkillMeterInner,
  SegmentContainer,
  FlexContainer,
  ResumeInnerContainer,
  Link,
  SkillContainer,
  SkillsContainer,
  IconFlexContainer,
  LinkFlexContainer
} from './Resume.styles';

import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import profile from '../../assets/images/profile.png';

function Resume() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);
  
  return (
    <ResumeContainer>
      <ResumeInner>
        <ResumeSplit backgroundColor='#555555' width='300px' boxShadow='true'>
          <InfoContainer>
            <ImageItem
              src={profile}
              borderRadius={'50%'}
              height={'200px'}
              width={'200px'}
              padding={'30px'}
            />
            <TextItem fontSize={'24px'} fontWeight={'500'} color='white'>
              {t(data.info.title)}
            </TextItem>
            <TextItem fontSize={'16px'} fontWeight={'400'} textAlign='center' color='white'>
              {t(data.info.subtitle)}
            </TextItem>
          </InfoContainer>
          <LineBreak/>
          <InfoContainer>
            {data.info.info.map((text, i) => {
              return (
                <TextItem key={i} fontWeight={'400'} fontSize={'14px'} textAlign='justify' color='white'>
                  {t(text)}
                </TextItem>
              );
            })}
          </InfoContainer>
          <LineBreak/>
          <SkillsContainer>
            <TextItem textAlign={'left'} margin='0' fontWeight='500'>
              {t(data.info.skills.header)}
            </TextItem>
            {data.info.skills.data.map((skill, i) => {
              return(
                <SkillContainer key={i}>
                  <TextItem textAlign={'left'} margin='0' fontSize='14px'>
                    {t(skill.name)}
                  </TextItem>
                  <SkillMeter>
                    <SkillMeterInner width={(skill.rating/5)*100 + '%'}/>
                  </SkillMeter>
                </SkillContainer>
              );
            })}
          </SkillsContainer>
          <LineBreak/>
          <FlexContainer flexDirection='column'>
            {data.info.links.map((link, i) => {
              let Elm = data.links[link].icon;
              return (
                <LinkFlexContainer key={i} color='white' flexDirection='row' justifyContent='flex-start' alignItems='center' margin='5px 0'>
                  <Link color='white' href={data.links[link].href}>
                    <Elm size='25px'/>
                    <TextItem fontSize='14px' margin='0 0 0 10px'>
                      {data.links[link].text}
                    </TextItem>
                  </Link>
                </LinkFlexContainer>
              );
            })}
          </FlexContainer>
        </ResumeSplit>
        <ResumeSplit backgroundColor='#FFFFFF' width='70%'>
          <ResumeInnerContainer margin='-20px 0 0 0'>
            <SegmentHeader>{t(data.education.educationTitle)}</SegmentHeader>
            {data.education.education.map((school, i) => {
              return (
                <SegmentContainer key={i}>
                  <FlexContainer flexDirection={'row'}>
                    <TextItem fontWeight={'600'} fontSize={'16px'} margin={'0'}>
                      {t(school.school)}
                    </TextItem>
                    <TextItem fontWeight={'600'} fontSize={'14px'} margin={'0'}>
                      {school.time.join(' - ')}
                    </TextItem>
                  </FlexContainer>
                  <FlexContainer flexDirection={'row'}>
                    <FlexContainer flexDirection={'column'} justifyContent={'center'}>
                      <TextItem fontWeight={'500'} fontSize={'14px'} margin={'0'} textAlign={'justify'}>
                        {t(school.program)}
                      </TextItem>
                      <TextItem fontWeight={'400'} fontSize={'12px'} margin={'0'} textAlign={'justify'}>
                        {t(school.description)}
                      </TextItem>
                    </FlexContainer>
                  </FlexContainer>
                </SegmentContainer>
              );
            })}
          </ResumeInnerContainer>
          <ResumeInnerContainer>
            <SegmentHeader>{t(data.jobs.jobsTitle)}</SegmentHeader>
            {data.jobs.jobs.map((job, i) => {
              return (
                <SegmentContainer key={i}>
                  <FlexContainer flexDirection={'row'}>
                    <TextItem fontWeight={'600'} fontSize={'16px'} margin={'0'}>
                      {t(job.company)}
                    </TextItem>
                    <TextItem fontWeight={'600'} fontSize={'14px'} margin={'0'}>
                      {job.current ? `${job.time[0]} - ${t(data.general.current)}` : job.time.join(' - ')}
                    </TextItem>
                  </FlexContainer>
                  <FlexContainer flexDirection={'row'}>
                    <FlexContainer flexDirection={'column'} justifyContent={'center'}>
                      <TextItem fontWeight={'500'} fontSize={'14px'} margin={'0'}>
                        {t(job.title)}
                      </TextItem>
                      <TextItem fontWeight={'400'} fontSize={'12px'} margin={'0'} textAlign={'justify'}>
                        {t(job.description)}
                      </TextItem>
                    </FlexContainer>
                  </FlexContainer>
                </SegmentContainer>
              );
            })}
          </ResumeInnerContainer>
          <ResumeInnerContainer>
            <SegmentHeader>{t(data.experience.experienceTitle)}</SegmentHeader>
            {data.experience.experience.map((experience, i) => {
              return (
                <SegmentContainer key={i}>
                  <FlexContainer flexDirection={'column'}>
                  <TextItem fontWeight={'600'} fontSize={'16px'} margin={'0'}>
                    {t(experience.title)}
                  </TextItem>
                    {experience.role.map((item, j) => {
                      return (
                        <FlexContainer key={j} flexDirection={'row'}>
                          <TextItem fontWeight={'500'} fontSize={'14px'} margin={'0'}>
                            {t(item.title)}
                          </TextItem>
                          <TextItem fontWeight={'500'} fontSize={'14px'} margin={'0'}>
                            {item.current ? `${item.time[0]} - ${t(data.general.current)}` : item.time.join(' - ')}
                          </TextItem>
                        </FlexContainer>
                      );
                    })}
                    <TextItem margin={'5px 0 0 0'} textAlign='justify'>
                      {t(experience.description)}
                    </TextItem>
                  </FlexContainer>
                </SegmentContainer>
              );
            })}
          </ResumeInnerContainer>
          <ResumeInnerContainer>
            <SegmentHeader>{t(data.references.referencesTitle)}</SegmentHeader>
            {data.references.references.map((reference, i) => {
              return (
                <SegmentContainer key={i}>
                  <TextItem fontWeight={'600'} fontSize={'16px'} margin={'0'}>
                    {t(reference.name)}
                  </TextItem>
                  <TextItem fontWeight={'500'} fontSize={'14px'} margin={'0'}>
                    {t(reference.company)} - {t(reference.position)}
                  </TextItem>
                  <IconFlexContainer flexDirection={'row'} justifyContent='flex-start'>
                    <Link href={`tel:${reference.phoneNr}`} margin='0 25px 0 0'>
                      <BsTelephone size='20px'/>
                      <TextItem margin={'0 0 0 10px'}>
                        {reference.phoneNr}
                      </TextItem>
                    </Link>
                    <Link href={`mailto:${reference.email}`}>
                      <BsEnvelope size='20px'/>
                      <TextItem margin={'0 0 0 10px'}>
                        {reference.email}
                      </TextItem>
                    </Link>
                  </IconFlexContainer>
                </SegmentContainer>
              );
            })}
          </ResumeInnerContainer>
        </ResumeSplit>
      </ResumeInner>
      <ResumeDownload/>
    </ResumeContainer>
  );
}

export default Resume;
