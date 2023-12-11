import { useState } from "react";
import { Input, Button } from "./SearchBar.styled";

export const SearchBar = ({setSearchParams}) => {
    const [query, setQuery] = useState('');

    const updateQuery = (e) => {
        e.preventDefault();
        setSearchParams({query: query});
    }

    const handleSearchParams = ({target: {value}}) => {
        setQuery(value);
    }

    return(
        <div>
        <form onSubmit={updateQuery}>
            <Input value={query} type="text" placeholder="Enter name of the movie" autoFocus onChange={handleSearchParams}></Input>
            <Button type="submit" disabled={!query}>Search</Button>
        </form>
        </div>
    )
}