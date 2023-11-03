import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/">
            Unsure
          </Nav.Link> */}
          <Nav.Link as={Link} to="/manage">
            Manage Books
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
