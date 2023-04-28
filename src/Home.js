import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrivalApp from "./images/arrival_app.svg";
import departureApp from "./images/departure_app.svg";
import wikiApp from "./images/wiki_app.svg";
import linksApp from "./images/links_app.svg";
import { useEffect } from "react";
import WeatherComponent from "./WeatherAPI";

function HomePage({
  isActiveArr,
  isActiveDep,
  isActiveWiki,
  isActiveApps,
  isActiveHome,
  openArrival,
  openDeparture,
  openApps,
  openWiki,
  openHome,
  setActiveArr,
  setActiveDep,
  setActiveWiki,
  setActiveApps,
  setActiveHome,
  setOpenArrival,
  setOpenDeparture,
  setOpenWiki,
  setOpenApps,
  setOpenHome,
}) {
  useEffect(() => {
    let currentHour = new Date().getHours();
    let timeGreeting = document.querySelector("#time-text");

    if (timeGreeting !== null) {
      if (currentHour >= 0 && currentHour <= 11) {
        timeGreeting.innerHTML = "Good Morning!";
      } else if (currentHour >= 12 && currentHour <= 17) {
        timeGreeting.innerHTML = "Good Afternoon!";
      } else if (currentHour >= 18 && currentHour <= 23) {
        timeGreeting.innerHTML = "Good Evening!";
      }
    }
  });
  return (
    <>
      <Fade in={openHome} unmountOnExit>
        <div id="home-fade">
          <WeatherComponent></WeatherComponent>
          <h2 className="text-center text-success mb-5">Navigation Links</h2>
          <Row xs="2" md="4" className="mx-5 row-stackLeft-resize text-center">
            <Col lg="2" className="mb-2">
              <a
                className="app-links-green app-links-hover"
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
                    } else if (isActiveApps === true) {
                      setOpenApps(!openApps);
                      setActiveApps(!isActiveApps);
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
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Arrivals App SVG"
                    src={arrivalApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Arrivals
              </a>
            </Col>
            <Col lg="2" className="mb-2">
              <a
                className="app-links-green app-links-hover"
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
                    } else if (isActiveApps === true) {
                      setOpenApps(!openApps);
                      setActiveApps(!isActiveApps);
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
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Departures App SVG"
                    src={departureApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Departures
              </a>
            </Col>
            <Col lg="2" className="mb-2">
              <a
                className="app-links-green app-links-hover"
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
                    } else if (isActiveApps === true) {
                      setOpenApps(!openApps);
                      setActiveApps(!isActiveApps);
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
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Wiki App SVG"
                    src={wikiApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Wiki
              </a>
            </Col>
            <Col lg="2" className="mb-2">
              <a
                className="app-links-green app-links-hover"
                onClick={() => {
                  if (openApps === false) {
                    if (isActiveDep === true) {
                      setOpenDeparture(!openDeparture);
                      setActiveDep(!isActiveDep);
                      setActiveApps(!isActiveApps);
                    } else if (isActiveArr === true) {
                      setOpenArrival(!openArrival);
                      setActiveArr(!isActiveArr);
                      setActiveApps(!isActiveApps);
                    } else if (isActiveWiki === true) {
                      setOpenWiki(!openWiki);
                      setActiveWiki(!isActiveWiki);
                      setActiveApps(!isActiveApps);
                    } else if (isActiveHome === true) {
                      setOpenHome(!openHome);
                      setActiveHome(!isActiveHome);
                      setActiveApps(!isActiveApps);
                    } else {
                      setActiveApps(!isActiveApps);
                    }
                    setTimeout(() => {
                      setOpenApps(!openApps);
                    }, 200);
                  }
                }}
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Links App SVG"
                    src={linksApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Apps
              </a>
            </Col>
          </Row>
        </div>
      </Fade>
    </>
  );
}

export default HomePage;
