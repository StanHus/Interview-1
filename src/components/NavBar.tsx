import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/about">Stanislav Huseletov</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/games">Interactive</Nav.Link>
            <Nav.Link href="/complex">Full-Stack</Nav.Link>
            <Nav.Link href="/backend">Backend</Nav.Link>
            <NavDropdown title="Extras" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/portfolios">Portfolios</NavDropdown.Item>
              <NavDropdown.Item href="/mini">Mini-Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                target="_blank"
                href="https://drive.google.com/file/d/1NHETkzX3EDwQtOvRRUudja8dKhA86TT0/view?usp=sharing"
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
  );
}
