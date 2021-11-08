import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Applications from "./components/Complex";
import Greet from "./components/greeting";
import FrontEnd from "./components/Interactive";
import Extras from "./components/Extras";
import "./css/style.css";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <nav className="buttons">
          <button className="switchButton">
            <Link className="navlink" to="/games">
              Interactive
            </Link>
          </button>
          <button className="switchButton">
            <Link className="navlink" to="/complex">
              Full-Stack
            </Link>
          </button>
          <button className="switchButton">
            <Link className="navlink" to="/extra">
              Extras
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
              <Applications />
            </Route>
            <Route exact path="/extra">
              <Extras />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
