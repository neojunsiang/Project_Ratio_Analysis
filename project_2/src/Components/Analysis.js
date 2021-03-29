import CompareContent from "./CompareContent";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table"

const Analysis = (props) => {
    return (
        <>
            <h1 id="analysis">Ratio Analysis</h1>
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
            </Table>


            {props.result.length > 0 ? props.result.map((ele, index) => {
                return (
                    <tr style={{ border: "2px solid black", wordWrap: "break-word" }} >
                        <CompareContent key={index} result={ele.ticker} />
                    </tr>
                )
            }) : null}


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