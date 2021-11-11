import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Stanislav Huseletov</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/games">Interactive</Nav.Link>
            <Nav.Link href="/complex">Full-Stack</Nav.Link>
            <NavDropdown title="Extras" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/software">Software</NavDropdown.Item>
              <NavDropdown.Item href="/portfolios">Portfolios</NavDropdown.Item>
              <NavDropdown.Item href="/mini">Mini-Projects</NavDropdown.Item>
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
  );
}
