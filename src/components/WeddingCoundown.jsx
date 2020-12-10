import React, { useEffect, useState } from "react";
import ZoomButton from "./ZoomButton";

const WeddingCoundown = () => {
  const calculateTimeLeft = () => {
    var dateString = "2020-12-12 11:30:00";
    let date = new Date();
    let weddingDate = new Date(Date.UTC(2020, 11, 12, 11, 30, 0, 0))
    let currentDateUTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    const difference = weddingDate - currentDateUTC;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        дн: Math.floor(difference / (1000 * 60 * 60 * 24)),
        час: Math.floor((difference / (1000 * 60 * 60)) % 24),
        мин: Math.floor((difference / 1000 / 60) % 60),
        сек: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={generateKey(interval)}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="timer-wrapper">
      <p className="timer">{timerComponents.length ? timerComponents : <ZoomButton />}</p>
    </div>
  );
};

export default WeddingCoundown;
