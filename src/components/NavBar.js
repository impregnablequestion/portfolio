import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
    /* color: white; */
    font-family: "Red Hat Mono";
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
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.4);
`

const HeadLink = styled(Link)`
    font-size: x-large;
    font-weight: bolder;
    color:hotpink;
    text-align: center;
    padding-top: 4rem;
`
const NavBar = () => {

    return(
        <nav id="navbar">
                {/* <Title to="/">séamus ryan: coding portfolio</Title> */}
            <HeadLink to="/">séamus ryan - coding portfolio</HeadLink>
            <Bar>
                <Link to="/about">about</Link>
                <Link to="/bell-jar-rota-project">bell jar rota</Link>
                <Link to="/power-pong-league-project">power pong league</Link>
                <Link to="/synthed-project">synthed</Link>
            </Bar>
        </nav>
    )
}

export default NavBar;