import logo from "./srq-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import AeroCloudArrDepSrq from "./FidsSrq";
import CommonUseWiki from "./CuWiki";

function NavBar() {
    const [isActiveArr, setActiveArr] = useState(true);
    const [isActiveDep, setActiveDep] = useState(false);
    const [isActiveWiki, setActiveWiki] = useState(false);
    const [openArrival, setOpenArrival] = useState(true);
    const [openDeparture, setOpenDeparture] = useState(false);
    const [openWiki, setOpenWiki] = useState(false);

  
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
                    
                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveArr(!isActiveArr);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveArr(!isActiveArr);
                    } else {
                      setActiveArr(!isActiveArr);
                    }

                    setTimeout(() => {setOpenArrival(!openArrival)}, 300);
        
                  }
                  }} aria-controls = "arrival-fade" aria-expanded = {openArrival} active = {isActiveArr}>Arrivals</Nav.Link>
              <Nav.Link onClick = {() => {
                  if (openDeparture === false) {

                    if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveDep(!isActiveDep);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveDep(!isActiveDep);
                    } else {
                      setActiveDep(!isActiveDep);
                    }

                    setTimeout(() => {setOpenDeparture(!openDeparture)}, 300);
                  }
                  }} aria-controls = "departures-fade" aria-expanded = {openDeparture} active = {isActiveDep}>Departures</Nav.Link>
              <Nav.Link onClick = {() => {
                  if (openWiki === false) {

                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveWiki(!isActiveWiki);
                    } else if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveWiki(!isActiveWiki);
                    } else {
                      setActiveWiki(!isActiveWiki);
                    }

                    setTimeout(() => {setOpenWiki(!openWiki)}, 300);
                  }
              }} aria-controls = "wiki-fade" aria-expanded = {openWiki} active = {isActiveWiki}>Wiki</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <AeroCloudArrDepSrq openDeparture = {openDeparture} openArrival = {openArrival} />
        <CommonUseWiki openWiki = {openWiki} />
      </>
    );
  }

  export default NavBar;