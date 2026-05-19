import React, { useEffect, useState, useMemo, memo } from "react";
import styles from "./Clock.module.css";

const pad = (n) => String(n).padStart(2, "0");

const ClockItem = memo(({ cityTime, styles }) => (
  <div className={styles.container}>
    <div className={styles.contador}>
      <p>{pad(cityTime.time.getHours())}:{pad(cityTime.time.getMinutes())}:{pad(cityTime.time.getSeconds())}</p>
    </div>
    <span>{cityTime.name}</span>
  </div>
));

ClockItem.displayName = "ClockItem";

export const Clock = memo(() => {
  const cities = useMemo(() => [
    { name: "New York",    offset: 0  },
    { name: "Los Angeles", offset: -3 },
    { name: "London",      offset: 5  },
    { name: "Tokyo",       offset: 14 },
    { name: "Sydney",      offset: 16 },
  ], []);

  const [cityTimes, setCityTimes] = useState(
    cities.map((city) => ({ name: city.name, time: new Date() }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setCityTimes(
        cities.map((city) => ({
          name: city.name,
          time: new Date(currentTime.getTime() + city.offset * 60 * 60 * 1000),
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [cities]);

  return (
    <div className={styles.contPrinc}>
      {cityTimes.map((cityTime) => (
        <ClockItem key={cityTime.name} cityTime={cityTime} styles={styles} />
      ))}
    </div>
  );
});

Clock.displayName = "Clock";