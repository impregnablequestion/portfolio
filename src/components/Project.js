import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";

const Project = ({video, Text}) => {

    return(
        <ProjectContainer>
            <TextContainer>
              <Text/>
            </TextContainer>
            <ReactPlayer url={video} controls/>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.5rem;
    padding-top: 5rem;
    /* border: 1px solid white; */
`

const TextContainer = styled.div`
    color: white;
    font-size: 16px;
    max-width: 28rem;
    background: rgba(0, 0, 0, 0.75);
    /* border-radius: 1rem; */
    padding: 0.5rem;
    /* border: 0.1px solid white; */
`

export default Project;