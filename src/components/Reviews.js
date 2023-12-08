import { getReviewsMovie } from "api";
import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            try {
                const response = await getReviewsMovie()
                setReviews(response.result);
            } catch (error) {
                toast.error('Something went wrong')
            }
        }
        fetchReviews();
    }, [params.mvieId])

    return(
        <div>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : <Toaster/>}
        </div>
    )
}