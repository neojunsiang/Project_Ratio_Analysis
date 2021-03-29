import axios from "axios";
import React, { useEffect, useState } from "react";

const CompareContent = (props) => {
    const [overview, setOverview] = useState([]);


    useEffect(() => {
        if (props.result === null) {
            return null;
        } else {
            const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
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
            <td>{overview.Name}</td>
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

