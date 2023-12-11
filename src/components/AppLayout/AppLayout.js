import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Container, Navigation, NavList, NavItem } from "./AppLayout.styled"

export const AppLayout = () => {
    return(
        <Container>
        <header>
            <Navigation>
                <NavList>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/movies">Movies</NavLink>
                    </NavItem>
                </NavList>
            </Navigation>
        </header>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
            </Suspense>
    </Container>
    )
}