import "./styles.css";
import { Weather } from "./components/Weather";
import { REACT_APP_API_KEY, REACT_APP_API_URL } from "./.env";
import { Dimmer, Loader } from "semantic-ui-react";

import React from "react";
import { useState, useEffect } from "react";

function App(props) {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("lat is ", lat);
        console.log("long is ", long);
      });

      if (lat !== "" && long !== "") {
        let url = `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`;
        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
            console.log(lat, long);
          });
      }
    }
    fetchData();
  }, [lat, long]);

  return (
    <div className="app">
      {data.main !== undefined ? (
        <Weather weatherData={data} />
      ) : (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      )}
    </div>
  );
}

export { App };
