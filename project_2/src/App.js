import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import Knowledge from "./Components/Knowledge"
import Analysis from './Components/Analysis';
import SearchPage from './Components/SearchPage';
import NavBar from "./Components/NavBar";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [analysis, setAnalysis] = useState([]);

  const handleClick = (event) => {
    const clickedName = (event.target.innerText).split(", ");
    setAnalysis([...analysis, {
      name: clickedName[0],
      ticker: clickedName[1]
    }])
  }

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchPage onClick={handleClick} analysis={analysis} />
          </Route>

          <Route path="/analysis">
            <Analysis result={analysis} />
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
