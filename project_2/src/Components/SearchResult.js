import React from "react";

const SearchResult = (props) => {
    return (
        <>
            <ul>
                <li>{props.name}, {props.symbol} </li>
            </ul>
        </>
    )
}

export default SearchResult;