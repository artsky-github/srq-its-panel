import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrivalApp from "./images/arrival_app.svg";
import departureApp from "./images/departure_app.svg";
import wikiApp from "./images/wiki_app.svg";

function HomePage({ openHome }) {
  return (
    <>
      <Container>
        <Fade in={openHome} unmountOnExit>
          <div id="home-fade">
            <h2
              className="text-center text-success"
              style={{ marginBottom: "16px" }}
            >
              ITS Home
            </h2>
            <Container className="text-center text-success">
              <Row className="justify-content-center">
                <Col className="mb-1" sm="4" lg="3">
                  <a href="#">
                    <div className="d-block app-link-anim">
                      <img
                        alt="SVG for departures link"
                        src={departureApp}
                        width="80"
                        className="d-block m-auto"
                      />
                    </div>
                    Arrivals
                  </a>
                </Col>
                <Col className="mb-1" sm="4" lg="3">
                  <img
                    alt="SVG for departures link"
                    src={departureApp}
                    width="80"
                    className="d-block m-auto"
                  />
                  Departures
                </Col>
                <Col className="mb-1" sm="4" lg="3">
                  <img
                    alt="SVG for wiki link"
                    src={wikiApp}
                    width="80"
                    className="d-block m-auto"
                  />
                  Wiki
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
