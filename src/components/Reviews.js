import { getReviewsMovie } from "api";
import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            try {
                const response = await getReviewsMovie(movieId)
                setReviews(response);
            } catch (error) {
                toast.error('No review')
            }
        }
        fetchReviews();
    }, [movieId])

    return(
        <div>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : <h3>No review...</h3>}
            <Toaster/>
        </div>
    )
}