import styled from 'styled-components';

import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';

import content from '../../static/json/projects';
import ProjectDisplay from './ProjectDisplay';

const Projects = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
    {content.contentBlocks.map((block, index) => (
      <ContentBlock title={block.title}>
        <ProjectDisplay props={block.projects} />
      </ContentBlock>
    ))}
    <ApplicationDiv>
      <FlexContainer>
        <Text>Fill out our application form to be our next project</Text>
      </FlexContainer>
      <FlexContainer>
        <Button onClick={() => {}}>{'Apply >'}</Button>
      </FlexContainer>
    </ApplicationDiv>
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
  background-color: ${(props) => props.theme.colors.offWhite};
`;

const FlexContainer = styled.div`
  width: 25vw;
  height: 100px;
`;

const Text = styled.h3`
  text-align: right;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.primaryBlue};
  background: ${(props) => props.theme.colors.cloudBlue};
  border: 3px solid ${(props) => props.theme.colors.skyBlue};
  border-radius: 5px;
  margin-top: 25px;
  height: 50px;
  width: 150px;
  font-family: ${(props) => props.theme.fonts.content};
`;

export default Projects;
