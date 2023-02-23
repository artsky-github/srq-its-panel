import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

function NavBar() {
  return (
    <Navbar bg="success" expand="sm" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">
          <Stack direction="horizontal" gap={3}>
            <img alt="svg of react" src={logo} />
            <span className="fs-4 fw-bold">SRQ ITS Panel</span>
          </Stack>
        </Navbar.Brand>
        <Nav className="container-fluid justify-content-end text-center">
          <Nav.Link href="#arrivals">Arrivals</Nav.Link>
          <Nav.Link href="#departures">Departures</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html
// srq_arr.html

export default App;
