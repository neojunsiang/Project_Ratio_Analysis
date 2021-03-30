import axios from "axios";
import React, { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import SearchResult from "./SearchResult";
import Loading from "./Loading";
import { Container, Row } from "react-bootstrap";
import SelectedStock from "./SelectedStock";

const SearchPage = (props) => {
    const [search, setSearch] = useState("");
    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const multipleAPIKeys = [process.env.REACT_APP_ALPHA_VANTAGE_API_KEY, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_2, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_3]
        const singleAPIkey = multipleAPIKeys[Math.round(Math.random() * (multipleAPIKeys.length))];

        if (search === "") {
            return null;
        } else {
            const tickerURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${singleAPIkey}`
            axios.get(tickerURL).then(res => {
                const result = res.data.bestMatches;
                if (result.length > 0) {
                    setLoading(false);
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
        setSearch(companyName);
        companyName === search ? setLoading(false) : setLoading(true);
    }

    // const analysisResult = props.analysis.map((result, index) => {
    //     return (
    //         <ul key={index} style={{ display: "flex", justifyContent: "center" }}>
    //             <li>{result.ticker}</li>
    //         </ul >
    //     )
    // })

    return (
        <>
            <br />
            <h1 id="searchpage" style={{ display: "flex", justifyContent: "center", fontSize: "30px", fontFamily: "recursive" }}> 📈 Search to Stronk 🚀 </h1>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center" }}>
                            <Form.Row controlid="searchstock">
                                <Col xs="auto">
                                    <Form.Control type="input" placeholder="What's your stronk?" name="company" />
                                </Col>
                                <Button type="submit">🔍</Button>
                            </Form.Row>
                        </Form>
                        <br />
                        {loading ? <Loading /> : null}
                        <br />
                        <div className="result" style={{ display: " flex", justifyContent: "center" }}>
                            {name.length > 0 ? <SearchResult name={name} onClick={props.onClick} /> : null}
                        </div>
                    </Col>
                    <Col>
                        <SelectedStock selected={props.analysis} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SearchPage;
