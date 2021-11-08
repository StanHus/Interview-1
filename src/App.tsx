import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Complex from "./components/Complex";
import Greet from "./components/greeting";
import FrontEnd from "./components/Interactive";
import "./css/style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="buttons">
          <button className="switchButton">
            <Link className="navlink" to="/games">
              Interactive
            </Link>
          </button>
          <button className="switchButton">
            <Link className="navlink" to="/complex">
              Complex
            </Link>
          </button>
          <button className="switchButton">
            <Link className="navlink" to="/extra">
              Additional
            </Link>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Greet />
            </Route>
            <Route exact path="/games">
              <FrontEnd />
            </Route>
            <Route exact path="/complex">
              <Complex />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}
