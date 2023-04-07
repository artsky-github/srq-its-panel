import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrivalApp from "./images/arrival_app.svg";
import departureApp from "./images/departure_app.svg";
import wikiApp from "./images/wiki_app.svg";
import radarApp from "./images/radar_app.svg";

function HomePage({ openHome }) {
  return (
    <>
      <Container>
        <Fade in={openHome} unmountOnExit>
          <div id="home-fade">
            <h2 className="text-center text-success mb-5">ITS Quick Links</h2>
            <Container className="text-center text-success">
              <Row xs="2" sm="4" className="mb-2">
                <Col>
                  <a className="app-links-success" href="#">
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
                <Col>
                  <a className="app-links-success" href="#">
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
                <Col>
                  <a
                    className="app-links-success"
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
                <Col>
                  <a className="app-links-success" href="#">
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
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default HomePage;
