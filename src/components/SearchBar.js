import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export const SearchBar = ({query}) => {
    const [params, setParams] = useSearchParams()

    const updateQuery = (e) => {
        e.preventDefault();
        const value = e.target.elements.query.value.trim();

        if(!value){
            return toast.error('Can not be empty');
        }
        params.set('query', value);
        setParams(params);
    }

    return(
        <div>
        <form onSubmit={updateQuery}>
            <input name="query" type="text" defaultValue={query}></input>
            <button type="submit">Search</button>
        </form>
        <Toaster/>
        </div>
    )
}