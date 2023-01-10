import React from "react";
import { Card } from "semantic-ui-react";

function Weather(props) {
  const { weatherData } = props;
  var today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth()).padStart(2, "0");
  let yyyy = String(today.getFullYear());
  let day = String(today.getDay());
  let wkdays = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";
  let weekdays = wkdays.split(",");
  console.log(weekdays);
  let todaysDay = weekdays[day];
  return (
    <Card className="card">
      <Card.Content>
        <Card.Header className="header">
          <h1 className="location">Location: {weatherData.name} </h1>
          <div className="flex">
            <h2 className="date">
              {mm}/{dd}/{yyyy}
            </h2>
            <h2 className="day">{todaysDay}</h2>
          </div>
          <div className="flex">
            <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
            <p className="description">
              Description: {weatherData?.weather[0].description}
            </p>
          </div>

          <div className="flex">
            <p className="sunrise">
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-In"
              )}
            </p>
            <p className="sunset">
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-In"
              )}{" "}
            </p>
          </div>
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export { Weather };
