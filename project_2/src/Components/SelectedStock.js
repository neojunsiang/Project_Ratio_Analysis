import React from "react";

const SelectedStock = (props) => {

    const selectedStockStyle = {
        border: "0.5px solid black",
        borderRadius: ".25rem",
        padding: "3px",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "rgb(152,251,152)",
    }

    return (
        <>
            <br />
            <ul>
                {props.selected.map((result, index) => {
                    return (
                        <p key={index} style={selectedStockStyle}>{result.name}, {result.ticker}</p>
                    )
                })}
            </ul>
        </>
    )
}

export default SelectedStock;