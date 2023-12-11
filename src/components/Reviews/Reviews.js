import { getReviewsMovie } from "api";
import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useParams } from "react-router-dom";
import { StyledList, ListItem, ReviewsDescr } from "./Reviews.styled";

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
                <StyledList>
                    {reviews.map(({id, author, content}) => (
                        <ListItem key={id}>
                            <p>
                                <span>Author:</span> {author}
                            </p>
                            <ReviewsDescr>{content}</ReviewsDescr>
                        </ListItem>
                    ))}
                </StyledList>
            ) : <h4>We don't have any reviews for this movie.</h4>}
            <Toaster/>
        </div>
    )
}