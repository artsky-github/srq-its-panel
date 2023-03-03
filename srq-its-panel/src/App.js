import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Fade from "react-bootstrap/Fade";
import { useEffect } from "react";
import { useState } from "react";


function App() {
  return (
    <>
      <NavBar />
      {/*<SrqDepArr />*/}
    </>
  );
}

function NavBar() {
  const [openArrival, setOpenArrival] = useState(true);
  const [openDeparture, setOpenDeparture] = useState(false);

  useEffect(() => {
    document.querySelector("#date-text").innerHTML = new Date().toString();
  });
  window.setInterval(function () {
    document.querySelector("#date-text").innerHTML = new Date().toString();
    document.querySelector("#iframe-dep").src =
      document.querySelector("#iframe-dep").src;
  }, 60000);
  return (
    <>
    <Navbar bg="success" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/arrivals">
          <Stack direction="horizontal" gap={3}>
            <img alt="svg of react" src={logo} />
            <span className="fs-4 fw-bold">ITS Panel</span>
          </Stack>
        </Navbar.Brand>
        <Nav className="container-fluid justify-content-end text-center">
          <Nav.Link onClick = {() => setOpenArrival(!openArrival)} aria-controls = "arrival-fade" aria-expanded = {openArrival}>Arrivals</Nav.Link>
          <Nav.Link onClick = {() => setOpenDeparture(!openDeparture)} aria-controls = "departures-fade" aria-expanded = {openDeparture}>Departures</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        <Container className="mt-5">
          <Fade in={openDeparture} unmountOnExit>
            <div id = "departures-fade">
              <h2 className="text-center text-success">SRQ Flight Departures</h2>
              <p id="date-text" className="text-center text-success"></p>
              <iframe
                id="iframe-dep"
                title = "aerocloud-dep-arr"
                className="border border-2 rounded-3 border-success"
                src = "https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html"
              ></iframe>
            </div>
          </Fade>
          <Fade in={openArrival} unmountOnExit>
            <div id = "departures-fade">
              <h2 className="text-center text-success">SRQ Flight Arrivals</h2>
              <p id="date-text" className="text-center text-success"></p>
              <iframe
                id="iframe-dep"
                title = "aerocloud-dep-arr"
                className="border border-2 rounded-3 border-success"
                src = "https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_arr.html"
              ></iframe>
            </div>
          </Fade>
        </Container>
        </>
  );
}

/*function SrqDepArr() {

  useEffect(() => {
    document.querySelector("#date-text").innerHTML = new Date().toString();
  });
  window.setInterval(function () {
    document.querySelector("#date-text").innerHTML = new Date().toString();
    document.querySelector("#iframe-dep").src =
      document.querySelector("#iframe-dep").src;
  }, 60000);
  return (
    <>
      <Container className="mt-5">
        <Fade in={open}>
          <div id = "departures-fade">
            <h2 className="text-center text-success">SRQ Flight Departures</h2>
            <p id="date-text" className="text-center text-success"></p>
            <iframe
              id="iframe-dep"
              title = "aerocloud-dep-arr"
              className="border border-2 rounded-3 border-success"
              src = "https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html"
            ></iframe>
          </div>
        </Fade>
      </Container>
    </>
  );
}*/




// https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html
// srq_arr.html

export default App;
