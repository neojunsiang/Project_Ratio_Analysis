import React from "react";

const SearchResult = (props) => {

    const resultStyle = {
        border: "0.5px solid black",
        borderRadius: ".25rem",
        padding: "3px",
        justifyContent: "center",
        cursor: "pointer",
        textAlign: "center",
    }

    return (
        <>
            <ul>
                {props.name.map((ele, index) => {
                    return (
                        <p style={resultStyle} key={index} onClick={props.onClick}>{ele["2. name"]}, {ele["1. symbol"]} </p>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResult;