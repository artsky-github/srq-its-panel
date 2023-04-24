import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrivalApp from "./images/arrival_app.svg";
import departureApp from "./images/departure_app.svg";
import wikiApp from "./images/wiki_app.svg";
import radarApp from "./images/radar_app.svg";
import outlookApp from "./images/outlook_app.svg";
import teamsApp from "./images/teams_app.svg";
import sharepointApp from "./images/sharepoint_app.svg";
import excelApp from "./images/excel_app.svg";
import supportApp from "./images/support_app.svg";
import adpApp from "./images/adp_app.svg";

function HomePage({
  isActiveArr,
  isActiveDep,
  isActiveWiki,
  isActiveHome,
  openArrival,
  openDeparture,
  openWiki,
  openHome,
  setActiveArr,
  setActiveDep,
  setActiveWiki,
  setActiveHome,
  setOpenArrival,
  setOpenDeparture,
  setOpenWiki,
  setOpenHome,
}) {
  return (
    <>
      <Container>
        <Fade className="content-fill-page" in={openHome} unmountOnExit>
          <div id="home-fade">
            <h2 className="text-center text-success mb-5">Navigation Links</h2>
            <Row
              xs="2"
              md="4"
              className="mx-5 row-stackLeft-resize text-center"
            >
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
            </Row>
            <h2 className="text-center my-5" style={{ color: "#2858A6" }}>
              Microsoft Apps
            </h2>
            <Row
              xs="2"
              md="4"
              className="mx-5 row-stackLeft-resize text-center"
            >
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-blue app-links-hover"
                  href="https://outlook.office365.com"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="Outlook App SVG"
                      src={outlookApp}
                      width="80"
                      className="d-block m-auto"
                    />
                  </div>
                  Outlook
                </a>
              </Col>
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-blue app-links-hover"
                  href="https://teams.microsoft.com"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="Teams App SVG"
                      src={teamsApp}
                      width="80"
                      className="d-block m-auto"
                    />
                  </div>
                  Teams
                </a>
              </Col>
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-blue app-links-hover"
                  href="https://smairport.sharepoint.com/sites/CommonUseIT"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="IT SharePoint App SVG"
                      src={sharepointApp}
                      width="80"
                      className="d-block m-auto"
                    />
                  </div>
                  SharePoint
                </a>
              </Col>
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-blue app-links-hover"
                  href="https://www.microsoft365.com/launch/excel?auth=2"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="Excel App SVG"
                      src={excelApp}
                      width="80"
                      className="d-block m-auto"
                    />
                  </div>
                  Excel
                </a>
              </Col>
            </Row>
            <h2 className="text-center my-5" style={{ color: "#a62828" }}>
              Additional Links
            </h2>
            <Row
              xs="2"
              md="4"
              className="mx-5 row-stackLeft-resize text-center"
            >
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-red app-links-hover"
                  href="https://www.radarbox.com/airport/KSRQ"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="Radar App SVG"
                      src={radarApp}
                      width="80"
                      className="d-block m-auto"
                    />
                  </div>
                  Flight Tracker
                </a>
              </Col>
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-red app-links-hover"
                  href="https://support.srq-airport.com/app/itdesk/HomePage.do"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="Support App SVG"
                      src={supportApp}
                      width="80"
                      className="d-block m-auto"
                    ></img>
                  </div>
                  IT Support
                </a>
              </Col>
              <Col lg="2" className="mb-2">
                <a
                  className="app-links-red app-links-hover"
                  href="https://online.adp.com/signin/v1/?APPID=WFNPortal&productId=80e309c3-7085-bae1-e053-3505430b5495&returnURL=https://workforcenow.adp.com/&callingAppId=WFN&TARGET=-SM-https://workforcenow.adp.com/portal/theme"
                  target="_blank"
                >
                  <div className="d-block app-link-anim">
                    <img
                      alt="ADP App SVG"
                      src={adpApp}
                      width="80"
                      className="d-block m-auto"
                    ></img>
                  </div>
                  ADP
                </a>
              </Col>
            </Row>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default HomePage;
