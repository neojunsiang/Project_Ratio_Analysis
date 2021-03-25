import { useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import Knowledge from "./Components/Knowledge"
import Analysis from './Components/Analysis';
import SearchPage from './Components/SearchPage';
import NavBar from "./Components/NavBar";

function App() {

  // useEffect(() => {
  //   const symbolURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=apple&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`
  //   axios.get(symbolURL).then(res => {
  //     const result = res.data.bestMatches[1].["1. symbol"] // AAPL
  //     console.log(result);
  //   })
  // }, [])


  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/knowledge" >
            <Knowledge />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ >
  );
}

export default App;
