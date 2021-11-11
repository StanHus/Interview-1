import { BrowserRouter, Switch, Route } from "react-router-dom";
import Applications from "./components/Complex";
import Greet from "./components/greeting";
import FrontEnd from "./components/Interactive";
import "./css/style.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Mini from "./components/Mini";
import Portfolios from "./components/Profiles";
import Software from "./components/Software";
import About from "./components/AboutMe";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Portfolio Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/games">Interactive</Nav.Link>
                <Nav.Link href="/complex">Full-Stack</Nav.Link>
                <NavDropdown title="Extras" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/mini">
                    Mini-Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/software">Software</NavDropdown.Item>
                  <NavDropdown.Item href="/portfolios">
                    Portfolios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    target="_blank"
                    href="https://drive.google.com/file/d/1eIkTLVctqYR4fWcAh18Op5B1tjd_w3oz/view"
                  >
                    View CV
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/about">About Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
