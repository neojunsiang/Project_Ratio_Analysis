import axios from "axios";
import React, { useEffect, useState } from "react"
import SearchResult from "./SearchResult";

const sample = {
    "bestMatches": [
        {
            "1. symbol": "TL0.DEX",
            "2. name": "Tesla",
            "3. type": "Equity",
            "4. region": "XETRA",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "TL0.FRK",
            "2. name": "Tesla",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "TSLA34.SAO",
            "2. name": "Tesla",
            "3. type": "Equity",
            "4. region": "Brazil/Sao Paolo",
            "5. marketOpen": "10:00",
            "6. marketClose": "17:30",
            "7. timezone": "UTC-03",
            "8. currency": "BRL",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "TSLA",
            "2. name": "Tesla Inc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.8889"
        },
        {
            "1. symbol": "TXLZF",
            "2. name": "Tesla Exploration Ltd",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.4000"
        }
    ]
}

const SearchPage = () => {

    const [search, setSearch] = useState("");
    const [name, setName] = useState([]);

    const BENCHMARK_SCORE = 0.8500

    const handleSubmit = (event) => {
        event.preventDefault();
        const companyName = event.target.company.value;
        console.log("company name", companyName);
        setSearch(companyName);
    }

    // console.log("search", search)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
        // console.log(apiKey);
        if (search === "") {
            return null;
        } else {
            const tickerURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${apiKey}`
            axios.get(tickerURL).then(res => {
                const result = res.data.bestMatches;
                console.log("result", result);
                if (result.length > 0) {
                    setName(result);
                } else {
                    setName([]);
                }
            })
        }
    }, [search])

    console.log("name", name)

    const returnList = name.map((ele, index) => {
        return (
            <SearchResult
                key={index}
                name={ele["2. name"]}
                symbol={ele["1. symbol"]} />
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
                {returnList}
            </div>
        </>
    )
}

export default SearchPage;
