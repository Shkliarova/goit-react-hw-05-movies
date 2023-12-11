import { getCastMovie } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { StyledList, ListItem } from "./Cast.styled";

export default function Cast() {
    const [actors, setActors] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const fetchCast = async() => {
            try {
                const response = await getCastMovie(movieId);
                setActors(response);
            } catch (error) {
                toast.error('Cast not found');
                setActors([]);
            }
        }
        fetchCast();
    }, [movieId]);

    return(
        <div>
            <StyledList>
                {actors.map(({id, profile_path, original_name, character}) => (
                    <ListItem key={id}>
                        <img src={`${profile_path ?
                        'https://image.tmdb.org/t/p/w500/'+ profile_path : 
                        'https://via.placeholder.com/182x273?text=' + original_name}`}
                        alt={original_name}/>
                        <p>
                        <span>Actor:</span> {original_name}
                        </p>
                        <p>
                        <span>Character:</span> {character}
                        </p>
                    </ListItem>
                ))}
            </StyledList>
            <Toaster/>
        </div>
    )
}