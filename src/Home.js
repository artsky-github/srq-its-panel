import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";

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
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default HomePage;
