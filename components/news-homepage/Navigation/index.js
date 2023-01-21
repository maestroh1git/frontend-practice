import { NavBarWrapper, Nav, NavLi, NavLink, NavLogo } from "./navbar-styles";

function Navigation(props){
    const {} = props
    return(
        <NavBarWrapper>
            <NavLogo/>
            <Nav>
                <NavLi index={0}>
                    <NavLink href="#">Home</NavLink>
                </NavLi>
                <NavLi index={1}>
                    <NavLink href="#">New</NavLink>
                </NavLi>
                <NavLi index={2}>
                    <NavLink href="#">Popular</NavLink>
                </NavLi>
                <NavLi index={3}>
                    <NavLink href="#">Trending</NavLink>
                </NavLi>
                <NavLi index={4}>
                    <NavLink href="#">Categories</NavLink>
                </NavLi>
            </Nav>
        </NavBarWrapper>
    )
}

export default Navigation