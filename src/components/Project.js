import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";

const Project = ({video, Text}) => {

    return(
        <ProjectContainer>
            <ReactPlayer url={video} controls/>
            <TextContainer>
              <Text/>
            </TextContainer>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem;
    /* border: 1px solid white; */
`

const TextContainer = styled.div`
    color: white;
    max-width: 20rem;
    background-color: black;
    border-radius: 1rem;;
`

export default Project;