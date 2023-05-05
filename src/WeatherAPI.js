import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";
import ReactDOM from "react-dom";

function SpinnerImage() {
  return (
    <Spinner
      style={{ marginInline: "25px", marginBlock: "25px" }}
      animation="grow"
      variant="success"
    ></Spinner>
  );
}

function PlaceholderText({ widthValue }) {
  return (
    <Placeholder as="h5" style={{ width: widthValue }} animation="glow">
      <Placeholder size="md" className="w-100" bg="success" />
    </Placeholder>
  );
}

function WeatherComponent() {
  useEffect(() => {
    const weatherIcon = document.querySelector("#weatherIcon");
    const temperature = document.querySelector("#temperature");
    const cityInfo = document.querySelector("#cityInfo");
    const cityName = "4172139";
    // Not the ideal way of handling API Keys, must be handled in back end.
    const weatherApiKey = process.env.REACT_APP_API_KEY;
    console.log(weatherApiKey);
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?id=${cityName}&appid=${weatherApiKey}&units=imperial`;
    const iconURL = "https://openweathermap.org/img/wn/";

    let spinnerImage = SpinnerImage();
    let placeholderText80 = PlaceholderText({ widthValue: "80px" });
    let placeholderText150 = PlaceholderText({ widthValue: "120px" });

    const imageLoadCont = document.querySelector(".spinner-image-container");
    const textLoadConts = document.querySelectorAll(
      ".placeholder-text-container"
    );

    ReactDOM.render(spinnerImage, imageLoadCont);
    ReactDOM.render(placeholderText80, textLoadConts[0]);
    ReactDOM.render(placeholderText150, textLoadConts[1]);

    fetch(apiCall)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        weatherIcon.setAttribute(
          "src",
          `${iconURL}/${data.weather[0].icon}@2x.png`
        );
        temperature.innerHTML = `${data.main.temp}°F`;
        cityInfo.innerHTML = `${data.name}, ${data.sys.country}`;
        ReactDOM.unmountComponentAtNode(imageLoadCont);
        ReactDOM.unmountComponentAtNode(textLoadConts[0]);
        ReactDOM.unmountComponentAtNode(textLoadConts[1]);
      });
  });
  return (
    <>
      <div
        style={{ marginBottom: "100px", gap: "0px 100px" }}
        className="d-flex mobile-flex-wrap justify-content-center align-items-center"
      >
        <h2 className="d-block text-success text-center" id="time-text"></h2>
        <div>
          <div className="d-flex align-items-center">
            <div className="spinner-image-container"></div>
            <img id="weatherIcon"></img>
            <div className="placeholder-text-container"></div>
            <h5 id="temperature" className="text-success"></h5>
          </div>
          <div className="placeholder-text-container"></div>
          <h5 id="cityInfo" className="text-success"></h5>
        </div>
      </div>
    </>
  );
}

export default WeatherComponent;
