import React, { useEffect, useState } from "react";
import ZoomButton from "./ZoomButton";

const WeddingCoundown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`13:30 2020-12-12`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        дн: Math.floor(difference / (1000 * 60 * 60 * 24)),
        час: Math.floor((difference / (1000 * 60 * 60)) % 24),
        мин: Math.floor((difference / 1000 / 60) % 60),
        сек: Math.floor((difference / 1000) % 60),
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

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
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
