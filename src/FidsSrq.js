import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import { useEffect } from "react";

function AeroCloudArrDepSrq({ openArrival, openDeparture }) {
  useEffect(() => {
    window.setInterval(() => {
      document.querySelectorAll(".date-text").forEach((currentTag) => {
        currentTag.innerHTML = new Date().toString();
        currentTag.setAttribute("style", "animation-name: date-text-glow");
        setTimeout(() => {
          currentTag.removeAttribute("style", "animation-name");
        }, 300);
      });
      document.querySelector("#iframe-dep").src =
        document.querySelector("#iframe-dep").src;
    }, 60000);
  }, []);

  useEffect(() => {
    document.querySelectorAll(".date-text").forEach((currentTag) => {
      currentTag.innerHTML = new Date().toString();
      currentTag.setAttribute("style", "animation-name: date-text-glow");
      setTimeout(() => {
        currentTag.removeAttribute("style", "animation-name");
      }, 300);
    });
  });

  return (
    <>
      <Container>
        <Fade in={openDeparture} unmountOnExit>
          <div id="departures-fade">
            <h2 className="text-center text-success">SRQ Flight Departures</h2>
            <p
              data-mdb-animation="glow"
              className="date-text text-center text-success"
            ></p>
            <iframe
              id="iframe-dep"
              title="aerocloud-dep-arr"
              className="border border-2 rounded-3 border-success"
              src="https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html"
            ></iframe>
          </div>
        </Fade>
        <Fade in={openArrival} unmountOnExit>
          <div id="arrival-fade">
            <h2 className="text-center text-success">SRQ Flight Arrivals</h2>
            <p className="date-text text-center text-success"></p>
            <iframe
              id="iframe-dep"
              title="aerocloud-dep-arr"
              className="border border-2 rounded-3 border-success"
              src="https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_arr.html"
            ></iframe>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default AeroCloudArrDepSrq;
