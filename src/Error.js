import { Link } from "react-router-dom"
import styled from "styled-components"

const NavLink = styled(Link)`
    color: white;
    `

const Error = () => {
    return(
        <>
        <h2>aw oops, an error</h2>
        <NavLink to="/">back to home?</NavLink>
        </>
    )
}

export default Error;