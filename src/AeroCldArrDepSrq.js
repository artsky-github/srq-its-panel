import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import { useEffect } from "react";

function AeroCloudArrDepSrq({ openArrival, openDeparture }) {
  window.setInterval(() => {
    document.querySelectorAll(".date-text").forEach((currentTag) => {
      currentTag.innerHTML = new Date().toString();
      currentTag.setAttribute("style", "animation-name: date-text-glow");
      setTimeout(() => {
        currentTag.removeAttribute("style", "animation-name");
      }, 300);
    });
    document.querySelector(".if-aerocloud").src =
      document.querySelector(".if-aerocloud").src;
  }, 60000);

  useEffect(() => {
    document.querySelectorAll(".date-text").forEach((currentTag) => {
      currentTag.innerHTML = new Date().toString();
    });
  });

  return (
    <>
      <Fade className="content-fill-page" in={openDeparture} unmountOnExit>
        <div id="departures-fade">
          <h2 className="text-center text-success">SRQ Flight Departures</h2>
          <p
            data-mdb-animation="glow"
            className="date-text text-center text-success"
          ></p>
          <iframe
            title="aerocloud-srq-departures"
            className="if-aerocloud border border-2 rounded-3 border-success d-block"
            src="https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_dep.html"
          ></iframe>
        </div>
      </Fade>
      <Fade className="content-fill-page" in={openArrival} unmountOnExit>
        <div id="arrival-fade">
          <h2 className="text-center text-success">SRQ Flight Arrivals</h2>
          <p className="date-text text-center text-success"></p>
          <iframe
            title="aerocloud-srq-arrivals"
            className="if-aerocloud border border-2 rounded-3 border-success d-block"
            src="https://aerocloud-us-fids-widgets.s3.us-east-2.amazonaws.com/srq_arr.html"
          ></iframe>
        </div>
      </Fade>
    </>
  );
}

export default AeroCloudArrDepSrq;
