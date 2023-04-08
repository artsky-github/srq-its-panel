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

function HomePage({ openHome }) {
  return (
    <>
      <Container>
        <Fade
          style={{ minHeight: "calc(100vh - 268px)" }}
          in={openHome}
          unmountOnExit
        >
          <div id="home-fade">
            <h2 className="text-center text-success mb-5">Quick Links</h2>
            <Container className="text-center">
              <Row xs="2" md="4" className="mx-5 justify-content-center">
                <Col lg="2" className="mb-2">
                  <a className="app-links-green app-links-hover" href="#">
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
                  <a className="app-links-green app-links-hover" href="#">
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
                    href="https://www.radarbox.com/airport/KSRQ"
                    target="_blank"
                  >
                    <div className="d-block app-link-anim">
                      <img
                        alt="Flight Tracker App SVG"
                        src={radarApp}
                        width="80"
                        className="d-block m-auto"
                      />
                    </div>
                    Flight Tracker
                  </a>
                </Col>
                <Col lg="2" className="mb-2">
                  <a className="app-links-green app-links-hover" href="#">
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
            </Container>
            <h2 className="text-center my-5" style={{ color: "#2858A6" }}>
              Microsoft Apps
            </h2>
            <Container className="text-center text-success">
              <Row xs="2" md="4" className="mx-5 justify-content-center">
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
            </Container>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default HomePage;
