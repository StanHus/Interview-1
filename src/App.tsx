import { BrowserRouter, Switch, Route } from "react-router-dom";
import Applications from "./components/Body Pages/Complex";
import Greet from "./components/Intro Page/greeting";
import FrontEnd from "./components/Body Pages/Interactive";
import "./css/style.css";
import Mini from "./components/Body Pages/Mini";
import Portfolios from "./components/Body Pages/Profiles";
import Software from "./components/Body Pages/Software";
import About from "./components/About Me/Main_page";
import Icons from "./components/Utils/Social_Icons";
import NavBar from "./components/NavBar";
import FadeIn from "react-fade-in";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <NavBar />
        <main>
          <Icons />
          <Switch>
            <Route exact path="/">
              <FadeIn transitionDuration={1000} delay={0}>
                <Greet />
              </FadeIn>
            </Route>
            <Route exact path="/games">
              <FrontEnd />
            </Route>
            <Route exact path="/complex">
              <Applications />
            </Route>
            <Route exact path="/mini">
              <Mini />
            </Route>
            <Route exact path="/portfolios">
              <Portfolios />
            </Route>
            <Route exact path="/software">
              <Software />
            </Route>
            <Route exact path="/extra">
              <Mini />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
