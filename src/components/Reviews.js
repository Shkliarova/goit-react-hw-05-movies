import { getReviewsMovie } from "api";
import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            try {
                const response = await getReviewsMovie(movieId)
                setReviews(response);
            } catch (error) {
                toast.error('Error');
                setReviews([]);
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
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : <h4>We don't have any reviews for this movie.</h4>}
            <Toaster/>
        </div>
    )
}