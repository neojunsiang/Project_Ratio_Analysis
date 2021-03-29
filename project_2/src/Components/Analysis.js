import CompareContent from "./CompareContent";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

const Analysis = (props) => {
    return (
        <>
            <br />
            <h1 id="analysis" style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>Ratio Analysis</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Country</th>
                        <th>Exchange</th>
                        <th>Currency</th>
                        <th>Industry</th>
                        <th>Market Capitalisation</th>
                        <th>52 Week High:</th>
                        <th>52 Week Low:</th>
                        <th>Earnings Per Share:</th>
                        <th>Price-per-Earnings (P/E) Ratio:</th>
                        <th>Price-to-Book Ratio:</th>
                        <th>Price/Earnings-to-Growth Ratio (PEG):</th>
                        <th>Return of Equity (ROE)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.result.length > 0 ? props.result.map((ele, index) => {
                        return (
                            <tr>
                                <CompareContent key={index} result={ele.ticker} />
                            </tr>
                        )
                    }) : "Oops.. You did not specify your search..."}
                </tbody>
            </Table>
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