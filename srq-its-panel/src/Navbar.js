import logo from "./srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import AeroCloudArrDepSrq from "./FidsSrq";

function NavBar() {
    const [isActive, setIsActive] = useState(true);
    const [openArrival, setOpenArrival] = useState(true);
    const [openDeparture, setOpenDeparture] = useState(false);
  
    return (
      <>
        <Navbar bg="success" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand>
              <Stack direction="horizontal" gap={3}>
                <img alt="SVG of SRQ" src={logo} />
                <span className="fs-4 fw-bold">ITS Panel</span>
              </Stack>
            </Navbar.Brand>
            <Nav className="container-fluid justify-content-end text-center">
              <Nav.Link onClick = {() => {
                  if (openArrival === false) {
                    setOpenDeparture(!openDeparture);
                    setTimeout(() => {setOpenArrival(!openArrival)}, 300);
                    setIsActive(!isActive);
                  }
                  }
                } aria-controls = "arrival-fade" aria-expanded = {openArrival} active = {isActive}>Arrivals</Nav.Link>
              <Nav.Link onClick = {() => {
                  if (openDeparture === false) {
                    setOpenArrival(!openArrival);
                    setTimeout(() => {setOpenDeparture(!openDeparture)}, 300);
                    setIsActive(!isActive);
                  }
                  }
                } aria-controls = "departures-fade" aria-expanded = {openDeparture} active = {!isActive}>Departures</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <AeroCloudArrDepSrq openDeparture = {openDeparture} openArrival = {openArrival} />
      </>
    );
  }

  export default NavBar;
