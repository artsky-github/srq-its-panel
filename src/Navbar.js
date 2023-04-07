import logo from "./images/srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import AeroCloudArrDepSrq from "./FidsSrq";
import CommonUseWiki from "./CuWiki";
import HomePage from "./Home";

function NavBar() {
  const [isActiveArr, setActiveArr] = useState(false);
  const [isActiveDep, setActiveDep] = useState(false);
  const [isActiveWiki, setActiveWiki] = useState(false);
  const [isActiveHome, setActiveHome] = useState(true);
  const [openArrival, setOpenArrival] = useState(false);
  const [openDeparture, setOpenDeparture] = useState(false);
  const [openWiki, setOpenWiki] = useState(false);
  const [openHome, setOpenHome] = useState(true);

  return (
    <>
      <Navbar className="mb-5" bg="success" expand="md" variant="dark">
        <Container>
          <Navbar.Brand id="navbar-brand-srq">
            <Stack direction="horizontal" gap={3}>
              <img alt="SVG of SRQ" src={logo} />
              <span className="fs-4 fw-bold">ITS Panel</span>
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="container-fluid justify-content-end text-center p-0">
              <Nav.Link
                onClick={() => {
                  if (isActiveHome === false) {
                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveHome(!isActiveHome);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveHome(!isActiveHome);
                    } else if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveHome(!isActiveHome);
                    } else {
                      setActiveHome(!isActiveHome);
                    }

                    setTimeout(() => {
                      setOpenHome(!openHome);
                    }, 100);
                  }
                }}
                aria-controls="home-fade"
                aria-expanded={openHome}
                active={isActiveHome}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  if (isActiveArr === false) {
                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveArr(!isActiveArr);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveArr(!isActiveArr);
                    } else if (isActiveHome === true) {
                      setOpenHome(!openHome);
                      setActiveHome(!isActiveHome);
                      setActiveArr(!isActiveArr);
                    } else {
                      setActiveArr(!isActiveArr);
                    }
                    setTimeout(() => {
                      setOpenArrival(!openArrival);
                    }, 100);
                  }
                }}
                aria-controls="arrival-fade"
                aria-expanded={openArrival}
                active={isActiveArr}
              >
                Arrivals
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  if (openDeparture === false) {
                    if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveDep(!isActiveDep);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveDep(!isActiveDep);
                    } else if (isActiveHome === true) {
                      setOpenHome(!openHome);
                      setActiveHome(!isActiveHome);
                      setActiveDep(!isActiveDep);
                    } else {
                      setActiveDep(!isActiveDep);
                    }
                    setTimeout(() => {
                      setOpenDeparture(!openDeparture);
                    }, 100);
                  }
                }}
                aria-controls="departures-fade"
                aria-expanded={openDeparture}
                active={isActiveDep}
              >
                Departures
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  if (openWiki === false) {
                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveWiki(!isActiveWiki);
                    } else if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveWiki(!isActiveWiki);
                    } else if (isActiveHome === true) {
                      setOpenHome(!openHome);
                      setActiveHome(!isActiveHome);
                      setActiveWiki(!isActiveWiki);
                    } else {
                      setActiveWiki(!isActiveWiki);
                    }
                    setTimeout(() => {
                      setOpenWiki(!openWiki);
                    }, 100);
                  }
                }}
                aria-controls="wiki-fade"
                aria-expanded={openWiki}
                active={isActiveWiki}
              >
                Wiki
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AeroCloudArrDepSrq
        openDeparture={openDeparture}
        openArrival={openArrival}
      />
      <CommonUseWiki openWiki={openWiki} />
      <HomePage openHome={openHome} />
    </>
  );
}

export default NavBar;
