import React from 'react'
import styled from 'styled-components'

const About = ({Text}) => {
  return (
    <AboutContainer>
      <Text/>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
  font-size: 16px;
`

export default About