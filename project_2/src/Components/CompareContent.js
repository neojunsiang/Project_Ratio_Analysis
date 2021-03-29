import axios from "axios";
import React, { useEffect, useState } from "react";

const CompareContent = (props) => {

    const [overview, setOverview] = useState([]);

    const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

    useEffect(() => {
        if (props.result === null) {
            return null;
        } else {
            const overviewURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.result}&apikey=${apiKey}`
            axios.get(overviewURL).then(res => {
                console.log("overview res-data", res.data);
                const overviewData = res.data;
                setOverview(overviewData);
            })
        }
    }, [props.result])

    return (
        <>

            <td style={{ border: "2px solid black", wordWrap: "break-word" }}>{overview.Name}</td>
            <td>{overview.Symbol}</td>
            <td>{overview.Country}</td>
            <td>{overview.Exchange}</td>
            <td>{overview.Currency}</td>
            <td>{overview.Industry}</td>
            <td>${(parseInt(overview.MarketCapitalization)).toLocaleString()}</td>
            <td>${parseInt(overview["52WeekHigh"])}</td>
            <td>${parseInt(overview["52WeekLow"])}</td>
            <td>{overview.EPS}</td>
            <td>{overview.PERatio}</td>
            <td>{overview.PriceToBookRatio}</td>
            <td>{overview.PEGRatio}</td>
            <td>{overview.ReturnOnEquityTTM}</td>








            {/* <table>
                    <th>
                        <h3>Name: {overview.Name}</h3>
                        <p>Symbol: {overview.Symbol}</p>
                    </th>
                    <tr><h2>General Data</h2></tr>
                    <tr>
                        <th>Country</th>
                        <td>{overview.Country}</td>
                    </tr>
                    <tr>
                        <th>Exchange</th>
                        <td>{overview.Exchange}</td>
                    </tr>
                    <tr>
                        <th>Currency</th>
                        <td>{overview.Currency}</td>
                    </tr>
                    <tr>
                        <th>Industry</th>
                        <td>{overview.Industry}</td>
                    </tr>
                    <tr><h2>Market Data</h2></tr>
                    <tr>
                        <th>Market Capitalisation</th>
                        <td>${(parseInt(overview.MarketCapitalization)).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>52 Week High:</th>
                        <td>${parseInt(overview["52WeekHigh"])}</td>
                    </tr>
                    <tr>
                        <th>52 Week Low:</th>
                        <td>${parseInt(overview["52WeekLow"])}</td>
                    </tr>
                    <tr><h2>Key Ratios</h2></tr>
                    <tr>
                        <th>Earnings Per Share:</th>
                        <td>{overview.EPS}</td>
                    </tr>
                    <tr>
                        <th>Price-per-Earnings (P/E) Ratio:</th>
                        <td>{overview.PERatio}</td>
                    </tr>
                    <tr>
                        <th>Price-to-Book Ratio:</th>
                        <td>{overview.PriceToBookRatio}</td>
                    </tr>
                    <tr>
                        <th>Price/Earnings-to-Growth Ratio (PEG):</th>
                        <td>{overview.PEGRatio}</td>
                    </tr>
                    <tr>
                        <th>Return of Equity (ROE)</th>
                        <td>{overview.ReturnOnEquityTTM}</td>
                    </tr>
                </table> */}
        </>
    )

}

export default CompareContent;



// FOR FUTURE USAGE
// const [balanceSheet, setBalanceSheet] = useState([]);
// const [cashFlow, setCashFlow] = useState([]);
// console.log("overview data pt 2", overview);

// // Balance Sheet
// useEffect(() => {
//     if (props.result === null) {
//         return null;
//     } else {
//         const balanceSheetURL = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${props.result}&apikey=${apiKey}`
//         axios.get(balanceSheetURL).then(res => {
//             // console.log("balance sheet data", res.data);
//             const balanceSheetData = res.data.annualReports[0];
//             setBalanceSheet(balanceSheetData);
//         })
//     }
// }, [])
// // console.log("balance sheet data pt 2", balanceSheet);

// useEffect(() => {
//     if (props.result === null) {
//         return null;
//     } else {
//         const cashFlowURL = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${props.result}&apikey=${apiKey}`
//         axios.get(cashFlowURL).then(res => {
//             // console.log("cash flow data", res.data);
//             const cashFlowData = res.data.annualReports[0];
//             setCashFlow(cashFlowData);
//         })
//     }
// }, [])
// // console.log("cash flow data pt 2", cashFlow);

/* <p>Free Cash Flow: {parseInt(cashFlow.operatingCashflow - cashFlow.capitalExpenditures).toLocaleString()}</p> */

/* <p>Working Capital: {parseInt(balanceSheet.totalCurrentAssets - balanceSheet.totalCurrentLiabilities).toLocaleString()} </p>
<p>Quick Ratio: {((parseInt(balanceSheet.totalCurrentAssets) - parseInt(balanceSheet.inventory)) / parseInt(balanceSheet.totalCurrentLiabilities)).toFixed(2)} </p>
<p>Debt-to-Equity Ratio: {(parseInt(balanceSheet.totalLiabilities) / parseInt(balanceSheet.totalShareholderEquity)).toFixed(2)} </p> */

