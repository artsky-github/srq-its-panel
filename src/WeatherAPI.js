import { useEffect } from "react";

function WeatherComponent() {
  useEffect(() => {
    const weatherIcon = document.querySelector("#weatherIcon");
    const temperature = document.querySelector("#temperature");
    const cityInfo = document.querySelector("#cityInfo");
    const cityName = "4172139";
    const weatherApiKey = "f662e82f8f842d7f96bbf306af33e4c2";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?id=${cityName}&appid=${weatherApiKey}&units=imperial`;
    const iconURL = "https://openweathermap.org/img/wn/";

    fetch(apiCall)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        weatherIcon.setAttribute(
          "src",
          `${iconURL}/${data.weather[0].icon}@2x.png`
        );
        temperature.innerHTML = `${data.main.temp}°F`;
        cityInfo.innerHTML = `${data.name}, ${data.sys.country}`;
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
          <div className="d-flex flex-wrap align-items-center">
            <img id="weatherIcon"></img>
            <h5 id="temperature" className="text-success"></h5>
          </div>
          <h5 id="cityInfo" className="text-success"></h5>
        </div>
      </div>
    </>
  );
}

export default WeatherComponent;
