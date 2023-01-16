import { useState } from "react";
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

const Title = styled.h1`
    color: hotpink;
`
const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }


    return(
        <nav id="navbar">
            <Bar>
                <Title>séamus ryan: coding portfolio</Title>
                <NavLink to="/">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink onClick={handleDropdown}>projects</NavLink>
                {dropdownOpen ? 
                <ul id="dropdown-projects">
                    <NavLink to="/projects">python/flask/sql</NavLink>
                    <NavLink to="/projects">react/js</NavLink>
                    <NavLink to="/projects">java</NavLink>
                </ul>
                :null}
                <NavLink to="/github-repos">repos</NavLink>
            </Bar>
        </nav>
    )
}

export default NavBar;