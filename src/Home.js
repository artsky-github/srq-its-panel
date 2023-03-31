import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Col sm="4" lg="3" className="border">
                  Arrivals
                </Col>
                <Col sm="4" lg="3" className="border">
                  Departures
                </Col>
                <Col sm="4" lg="3" className="border">
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
