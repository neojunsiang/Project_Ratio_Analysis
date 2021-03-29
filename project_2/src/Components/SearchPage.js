import axios from "axios";
import React, { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'



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
            <br />
            <h1 id="searchpage" style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}> 📈 Search to Stonk 🚀 </h1>
            <Form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center" }}>
                <Form.Row controlid="searchstock">
                    <Col xs="auto">
                        <Form.Control type="input" placeholder="What's your stonk?" name="company" />
                    </Col>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form.Row>
            </Form>
            <br />
            <div className="result" style={{ display: "flex", justifyContent: "center" }}>
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
