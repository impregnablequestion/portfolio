import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
    color: white;
    font-family: "Josefin Sans";
    padding: 1rem;
    text-decoration: none;

    &:hover {
        color:hotpink;
    }
    `

const Bar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const HeadLink = styled(NavLink)`
    font-size: x-large;
    color:hotpink;
    text-align: center;
    padding-top: 4rem;
`
const NavBar = () => {

    return(
        <nav id="navbar">
                {/* <Title to="/">séamus ryan: coding portfolio</Title> */}
            <HeadLink to="/about">séamus ryan - coding portfolio</HeadLink>
            <Bar>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/bell-jar-rota-project">bell jar rota</NavLink>
                <NavLink to="/power-pong-league-project">power pong league</NavLink>
                <NavLink to="/synthed-project">synthed</NavLink>
            </Bar>
        </nav>
    )
}

export default NavBar;