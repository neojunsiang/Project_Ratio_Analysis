import React from "react";

const SelectedStock = (props) => {

    const selectedStockStyle = {
        border: "0.5px solid black",
        borderRadius: ".25rem",
        padding: "3px",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "lightgreen"
    }

    return (
        <>
            <h2 style={{ display: "flex", justifyContent: "center", fontSize: "25px", padding: "3px", fontFamily: "recursive" }}>Selected Stock 📊</h2>
            <br />
            <ul >
                {props.selected.map((result, index) => {
                    return (
                        <p key={index} style={selectedStockStyle}>{result.name}, {result.ticker}</p>
                    )
                })}
            </ul >
        </>
    )
}

export default SelectedStock;