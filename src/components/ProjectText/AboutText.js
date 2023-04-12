import React from 'react'
import styled from 'styled-components'

const AboutText = () => {
  return (
    <TextContainer>
      <p>
        Hi! I'm Séamus, a software developer based in Glasgow but originally from Dublin
      </p>
      <p>
        I switched careers from music to tech in 2022, and this March I graduated from
        the CodeClan Professional Software Development bootcamp.
      </p>
      <p>
        I am interested in interactive GUI design and programming, procedural animation,
        and Web Audio, amongst other things!
      </p>
      <p>
        This website is a portfolio of my coding projects to date, please feel free to have 
        a look around and to check out the code on GitHub. My most recent project, synthed
        is hosted live at <a href="https://www.synthed.co.uk">this link</a>
      </p>
    </TextContainer>
  )
}

const TextContainer = styled.div`
    color: white;
    max-width: 25rem;
    background-color: black;
    /* border-radius: 1rem; */
    padding: 1rem;
    /* border: 1px solid white; */
`

export default AboutText