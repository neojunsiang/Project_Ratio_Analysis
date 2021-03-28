import axios from "axios";
import React, { useEffect, useState } from "react";

const Analysis = (props) => {

    const [info, setInfo] = useState([]);
    const [balanceSheet, setBalanceSheet] = useState([]);
    const [cashFlow, setCashFlow] = useState([]);

    const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

    // Overview
    useEffect(() => {
        if (props.result.length < 0) {
            return null;
        } else {
            for (const symbol of props.result) {
                // console.log("symbol", symbol);
                const overviewURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol.ticker}&apikey=${apiKey}`
                // console.log(overviewURL);
                axios.get(overviewURL).then(res => {
                    // console.log("res-data", res.data)
                    setInfo(res.data)
                });
            }
        }
    }, [])
    // console.log("info", info);
    // console.log("info name", info.Name);

    // Balance Sheet 
    useEffect(() => {
        if (props.result.length < 0) {
            return null;
        } else {
            for (const symbol of props.result) {
                console.log("symbol", symbol);
                const balanceSheetURL = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol.ticker}&apikey=${apiKey}`
                // console.log(overviewURL);
                axios.get(balanceSheetURL).then(res => {
                    // console.log("res-data", res.data)
                    setBalanceSheet(res.data.annualReports[0])
                });
            }
        }
    }, [])
    console.log("balance sheet", balanceSheet);

    // CashFlow 
    useEffect(() => {
        if (props.result.length < 0) {
            return null;
        } else {
            for (const symbol of props.result) {
                console.log("symbol", symbol);
                const cashFlowURL = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol.ticker}&apikey=${apiKey}`
                // console.log(overviewURL);
                axios.get(cashFlowURL).then(res => {
                    // console.log("res-data", res.data)
                    setCashFlow(res.data.annualReports[0])
                });
            }
        }
    }, [])
    console.log("cash flow", cashFlow)

    return (
        <>
            <h1 id="analysis">Ratio Analysis</h1>
            {/* {props.result.length > 0 ? props.result.map((name, index) => {
                return (
                    <>
                        <div key={index}>
                            <h2>Name: {name.name}</h2>
                            <p>Ticker: {name.ticker}</p>
                        </div>
                    </>)
            }) : null} */}
            <div className="header">
                <h2>General Data</h2>
                <h3>Name: {info.Name}</h3>
                <p>Symbol: {info.Symbol}</p>
                <p>Country: {info.Country}</p>
                <p>Exchange: {info.Exchange}</p>
                <p>Currency: {info.Currency}</p>
                <p>Sector: {info.Sector}</p>
                <p>Industry: {info.Industry}</p>
                <br />
                <h2>Market Data</h2>
                <p>Market Capitalisation: ${(parseInt(info.MarketCapitalization)).toLocaleString()}</p>
                <p>52 Week High: {info["52WeekHigh"]}</p>
                <p>52 Week Low: {info["52WeekLow"]}</p>
                <br />
                <h2>Important Ratios</h2>
                <p>Working Capital: {parseInt(balanceSheet.totalCurrentAssets - balanceSheet.totalCurrentLiabilities).toLocaleString()} </p>
                <p>Quick Ratio: {((parseInt(balanceSheet.totalCurrentAssets) - parseInt(balanceSheet.inventory)) / parseInt(balanceSheet.totalCurrentLiabilities)).toFixed(2)} </p>
                <p>Debt-to-Equity Ratio: {(parseInt(balanceSheet.totalLiabilities) / parseInt(balanceSheet.totalShareholderEquity)).toFixed(2)} </p>
                <p>Earnings Per Share: {info.EPS}</p>
                <p>Price-per-Earnings (P/E) Ratio: {info.PERatio}</p>
                <p>Price-to-Book Ratio: {info.PriceToBookRatio}</p>
                <p>Price/Earnings-to-Growth Ratio: {info.PEGRatio}</p>
                <p>Return of Equity (ROE): {info.ReturnOnEquityTTM}</p>
                <p>Free Cash Flow: {parseInt(cashFlow.operatingCashflow - cashFlow.capitalExpenditures).toLocaleString()}</p>
            </div>
        </>
    )
}

export default Analysis;