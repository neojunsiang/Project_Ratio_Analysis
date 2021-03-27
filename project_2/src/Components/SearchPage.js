import axios from "axios";
import React, { useEffect, useState } from "react"
import SearchResult from "./SearchResult";

const SearchPage = (props) => {
    const [search, setSearch] = useState("");
    const [name, setName] = useState([]);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
        if (search === "") {
            return null;
        } else {
            const tickerURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${apiKey}`
            axios.get(tickerURL).then(res => {
                const result = res.data.bestMatches;
                // console.log("result", result);
                if (result.length > 0) {
                    setName(result);
                } else {
                    setName([]);
                }
            })
        }
    }, [search])

    const handleSubmit = (event) => {
        event.preventDefault();
        const companyName = event.target.company.value;
        console.log("company name", companyName);
        setSearch(companyName);
    }

    const analysisResult = props.analysis.map((result, index) => {
        return (
            <ul key={index}>
                <li>{result.ticker}</li>
            </ul>
        )
    })

    return (
        <>
            <h1 id="searchpage">Search Stocks</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search a stock" name="company" />
                <input type="submit" />
            </form>
            <div className="result">
                {name.length > 0 ?
                    (<ul>
                        {name.map((ele, index) => (
                            <li key={index} onClick={props.onClick}>{ele["2. name"]}, {ele["1. symbol"]}</li>
                        ))}
                    </ul>)
                    : null}
            </div>
            <hr />
            <div className="analysisarray">
                <h2>Analysis Result</h2>
                {analysisResult}
            </div>
        </>
    )
}

export default SearchPage;


    // const returnList = sample.bestMatches.map((ele, index) => { // to be changed to name
    //     return (
    //         <SearchResult
    //             key={index}
    //             name={ele["2. name"]}
    //             symbol={ele["1. symbol"]}
    //         />
    //     )
    // })

    // const handleClick = (event) => {
    //     // console.log("clicked")
    //     const clickedName = event.target.innerText;
    //     console.log("clickedName", clickedName);
    //     setAnalysis([...analysis, { name: clickedName }]);
    // }

    // console.log("analysis", analysis)

    // const [analysis, setAnalysis] = useState([]);

