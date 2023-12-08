import { Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {

    return (
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to={"cast"}>Cast</Link>
                </li>
                <li>
                    <Link to={"reviews"}>Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}