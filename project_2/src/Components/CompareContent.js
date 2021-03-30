import axios from "axios";
import React, { useEffect, useState } from "react";

const CompareContent = (props) => {
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        if (props.result === null) {
            return null;
        } else {
            const apiKeys = [process.env.REACT_APP_ALPHA_VANTAGE_API_KEY, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_2, process.env.REACT_APP_ALPHA_VANTAGE_API_KEY_3]
            const singleAPIkey = apiKeys[Math.round(Math.random() * (apiKeys.length))];
            const overviewURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.result}&apikey=${singleAPIkey}`
            axios.get(overviewURL).then(res => {
                const overviewData = res.data;
                console.log("overview", overviewData)
                setOverview(overviewData);
            })
        }
    }, [props.result])

    return (
        <>
            <tr>
                <td>{(overview.Name === undefined) ? "-" : overview.Name}</td>
                <td>{(overview.Symbol === undefined) ? "-" : overview.Symbol}</td>
                <td>{(overview.Country === undefined) ? "-" : overview.Country}</td>
                <td>{(overview.Exchange === undefined) ? "-" : overview.Exchange}</td>
                <td>{(overview.Currency === undefined) ? "-" : overview.Currency}</td>
                <td>{(overview.Industry === undefined) ? "-" : overview.Industry}</td>
                <td>{isNaN(overview.MarketCapitalization) ? "-" : ("$" + (parseFloat(overview.MarketCapitalization)).toLocaleString())}</td>
                <td>{isNaN(overview["52WeekHigh"]) ? "-" : ("$" + parseFloat(overview["52WeekHigh"]).toFixed(2))}</td>
                <td>{isNaN(overview["52WeekLow"]) ? "-" : ("$" + parseFloat(overview["52WeekLow"]).toFixed(2))}</td>
                <td>{(overview.EPS === undefined) ? "-" : overview.EPS}</td>
                <td>{(overview.PERatio === undefined) ? "-" : parseFloat(overview.PERatio).toFixed(2)}</td>
                <td>{(overview.PriceToBookRatio === undefined) ? "-" : parseFloat(overview.PriceToBookRatio).toFixed(2)}</td>
                <td>{(overview.PEGRatio === undefined) ? "-" : parseFloat(overview.PEGRatio).toFixed(2)}</td>
                <td>{(overview.ReturnOnEquityTTM === undefined) ? "-" : parseFloat(overview.ReturnOnEquityTTM).toFixed(2)}</td>
            </tr>
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

