import CompareContent from "./CompareContent";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

const Analysis = (props) => {
    return (
        <>
            <br />
            <h1 id="analysis" style={{ display: "flex", justifyContent: "center", fontSize: "30px", fontFamily: "recursive" }}>Analysis</h1>
            <br />
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
                        <th>52 Week High</th>
                        <th>52 Week Low</th>
                        <th><Link to="/knowledge">Earnings Per Share</Link></th>
                        <th><Link to="/knowledge">Price-per-Earnings (P/E) Ratio</Link></th>
                        <th><Link to="/knowledge">Price-to-Book Ratio</Link></th>
                        <th><Link to="/knowledge">Price/Earnings-to-Growth Ratio (PEG)</Link></th>
                        <th><Link to="/knowledge">Return of Equity (ROE)</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {props.result.length > 0 ? props.result.map((ele, index) => {
                        return (
                            <CompareContent key={index} result={ele.ticker} />
                        )
                    }) : null}
                </tbody>
            </Table>
            {props.result.length < 1 ? <p style={{ display: "flex", justifyContent: "center" }}>Oops.. You did not specify your search...</p> : null}
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