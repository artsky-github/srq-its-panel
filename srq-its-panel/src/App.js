import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useEffect } from "react";

function App() {
  return (
    <>
      <NavBar />
      <SrqDep />
    </>
  );
}

function NavBar() {
  return (
    <Navbar bg="success" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Stack direction="horizontal" gap={3}>
            <img alt="svg of react" src={logo} />
            <span className="fs-4 fw-bold">ITS Panel</span>
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

function SrqDep() {
  useEffect(() => {
    document.querySelector("#date-text").innerHTML = new Date().toString();
  });
  window.setInterval(function () {
    document.querySelector("#date-text").innerHTML = new Date().toString();
    document.querySelector("#iframe-dep").src =
      document.querySelector("#iframe-dep").src;
  }, 20000);
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center text-success">SRQ Flight Departures</h2>
        <p id="date-text" className="text-center text-success"></p>
        <iframe
          id="iframe-dep"
          className="border border-2 rounded-3 border-success"
          src="https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html"
        ></iframe>
      </Container>
    </>
  );
}

function keepScrollPos() {
  document.addEventListener("DOMContentLoaded", function (event) {
    let scrollpos = localStorage.getItem("scrollpos");
    if (scrollpos) window.scrollTo(0, scrollpos);
  });

  window.onbeforeunload = function (e) {
    localStorage.setItem("scrollpos", window.scrollY);
  };
}

// https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html
// srq_arr.html

export default App;
