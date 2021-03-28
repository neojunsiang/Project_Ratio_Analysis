import axios from "axios";
import React, { useEffect, useState } from "react";

const Analysis = (props) => {

    // const [value, setValue] = useState(props.result)
    // console.log(value);

    const [info, setInfo] = useState([])
    const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

    // Overview
    useEffect(() => {
        if (props.result.length < 1) {
            return null;
        } else {
            props.result.map((ele) => {
                const overviewURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ele.ticker}&apikey=${apiKey}`
                axios.get(overviewURL).then(res => {
                    console.log("res data", res.data);
                    setInfo(res.data);
                });
            })
        }
    }, [props.result])

    console.log("info", info);

    return (
        <>
            <h1 id="analysis">Ratio Analysis</h1>
            {props.result.length > 0 ? props.result.map((name, index) => {
                return (
                    <>
                        <div key={index}>
                            <h2>Name: {name.name}</h2>
                            <p>Ticker: {name.ticker}</p>
                        </div>
                    </>)
            }) : null}
        </>
    )
}

export default Analysis;