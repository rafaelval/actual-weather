import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export const Clock = () => {
  const cities = [
    { name: "New York", offset: 0 },
    { name: "Los Angeles", offset: -3 },
    { name: "London", offset: 5 },
    { name: "Tokyo", offset: 14 },
    { name: "Sydney", offset: 16 },
  ];
  const [cityTimes, setCityTimes] = useState(
    cities.map((city) => ({ name: city.name, time: new Date() }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setCityTimes(
        cities.map((city) => {
          const cityTime = new Date(currentTime.getTime() + city.offset * 60 * 60 * 1000);
          return { name: city.name, time: cityTime };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [cities]);

  return (
    <div className={styles.contPrinc}>
      {cityTimes.map((cityTime) => (
        <div className={styles.container} key={cityTime.name}>
          <div className={styles.contador}>
            <p>
              {cityTime.time.getHours() < 10 ? ` 0${cityTime.time.getHours()}` : cityTime.time.getHours()} :{" "}
              {cityTime.time.getMinutes() < 10 ? ` 0${cityTime.time.getMinutes()}` : cityTime.time.getMinutes()}{" "}
              :{" "}
              {cityTime.time.getSeconds() < 10 ? ` 0${cityTime.time.getSeconds()}` : cityTime.time.getSeconds()}
            </p>
          </div>
          <span>{cityTime.name}</span>
        </div>
      ))}
    </div>
  );
};