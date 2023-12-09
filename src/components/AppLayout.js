import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const AppLayout = () => {
    return(
        <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
            </Suspense>
    </div>
    )
}