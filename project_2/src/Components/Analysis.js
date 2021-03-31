import CompareContent from "./CompareContent";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

const Analysis = (props) => {
    return (
        <>
            <br />
            <h1 id="analysis" style={{ display: "flex", justifyContent: "center", fontSize: "30px", fontFamily: "recursive" }}>Analysis</h1>
            <br />
            <Table striped bordered >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Country</th>
                        <th>Exchange</th>
                        <th>Currency</th>
                        <th>Industry</th>
                        <th>Market Capitalisation</th>
                        <th>52 Week High</th>
                        <th>52 Week Low</th>
                        <th><a href="/knowledge/#4">Earnings Per Share</a></th>
                        <th><a href="/knowledge/#5">Price-per-Earnings (P/E) Ratio</a></th>
                        <th><a href="/knowledge/#6">Price-to-Book Ratio</a></th>
                        <th><a href="/knowledge/#7">Price/Earnings-to-Growth Ratio (PEG)</a></th>
                        <th><a href="/knowledge/#8">Return of Equity (ROE)</a></th>
                    </tr>
                </thead>
                <tbody>
                    {props.analysisresult.length > 0 ? props.analysisresult.map((ele, index) => {
                        return (
                            <CompareContent key={index} analysisresult={ele.ticker} />
                        )
                    }) : null}
                </tbody>
            </Table>
            {props.analysisresult.length < 1 ? <p style={{ display: "flex", justifyContent: "center" }}>Oops.. You did not specify your search...</p> : null}
            <br />
            <footer>
                To learn more about the ratios, kindly refer to <Link to="/knowledge">Knowledge</Link>.
                <br />
                <b>P.S. : Due to limited API calls, not all ratios are shown and comparison of 2 companies are allowed per session.</b>
            </footer>
        </>
    )
}

export default Analysis;