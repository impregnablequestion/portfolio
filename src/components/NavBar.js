import { Link } from "react-router-dom"
import styled from "styled-components"

const NavLink = styled(Link)`
    color: white;
    padding: 1rem;
    text-decoration: none;

    &hover {
        text-decoration: underline;
    }
    `

const Bar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Title = styled.h1`
    color: hotpink;
`
const NavBar = () => {

    return(
        <nav>
            <Bar>
                <Title>séamus ryan: coding portfolio</Title>
                <NavLink to="/portfolio">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/projects">projects</NavLink>
                <NavLink to="/github-repos">repos</NavLink>
            </Bar>
        </nav>
    )
}

export default NavBar;