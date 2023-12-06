import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            Error! Please use this <Link to="/">link</Link> to navigate to home page
        </div>
    )
}