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
    const [searchTerm, setSearchTerm] = useState(""); // search and setSearch in the searchbox
    const [name, setName] = useState([]); // name and setName for the page rendering on the page
    const [loading, setLoading] = useState(false); // loading and setLoading for spinner during search

    const handleSubmit = (event) => { // setting search for searched company
        event.preventDefault();
        const companyName = event.target.company.value;
        setSearchTerm(companyName);
        companyName === searchTerm ? setLoading(false) : setLoading(true); // no spinner if searchTerm and targetValue are the same
    }

    const handleClear = () => {
        window.location.reload();
    }


    useEffect(() => { // fetching ticker based on searchTerm
        const multipleAPIKeys = [process.env.REACT_APP_ALPHA_VANTAGE_API_KEY, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_2, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_3, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_4, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_5, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_6]
        const singleAPIkey = multipleAPIKeys[Math.round(Math.random() * (multipleAPIKeys.length))];
        if (searchTerm === "") {
            return null;
        } else {
            const tickerURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${singleAPIkey}`
            axios.get(tickerURL).then(res => {
                const result = res.data.bestMatches;
                if (result.length > 0) {
                    setLoading(false);
                    setName(result);
                } else {
                    setLoading(false);
                    setName([]);
                }
            })
        }
    }, [searchTerm])

    return (
        <>
            <br />
            <h1 id="searchpage" style={{ display: "flex", justifyContent: "center", fontSize: "30px", fontFamily: "recursive", }}> 📈 Search to Stonk 🚀 </h1>
            <br />
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <Row>
                    <Col className="container" style={{ justifyContent: "center" }}>
                        <Form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", }}>
                            <Form.Row controlid="searchstock">
                                <Col xs="auto">
                                    <Form.Control type="input" placeholder="What's your stonk?" name="company" />
                                </Col>
                                <Button type="submit">🔍</Button>
                            </Form.Row>
                        </Form>
                        <br />
                        {loading ? <Loading /> : null}
                        <br />
                        <div className="result" style={{ display: "flex", justifyContent: "center" }} >
                            {name.length > 0 ? <SearchResult name={name} onClick={props.onClick} /> : null}
                        </div>
                    </Col>

                    <Col className="container" style={{ justifyContent: "center" }}>
                        <Row style={{ display: "flex", justifyContent: "center", height: "38px", width: "540px" }}>
                            <p style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontFamily: "recursive", marginTop: "5px" }}>Selected Stock 📊</p>
                            <Button onClick={handleClear} style={{ marginLeft: "12px", marginBottom: "8px", fontSize: "15px", height: "38px" }}>Clear</Button>
                        </Row>
                        <br />
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <SelectedStock selected={props.analysis} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SearchPage;
