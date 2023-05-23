import React, { useState, useEffect } from "react";

const Countdown = () => {
  const endDate = new Date("Dec 31, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let remainingDays = Math.floor(difference / days);
  let remainingHours = Math.floor((difference % days) / hours);
  let remainingMinutes = Math.floor((difference % hours) / minutes);
  let remainingSeconds = Math.floor((difference % minutes) / seconds);
  console.log(
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds
  );

  const [seconds1, setSeconds1] = useState(difference);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds1(remainingSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingSeconds]);

  return (
    <div>
      <div className="heading">We are going live in</div>
      <div className="countdown-container">
        <div className="">
          <div className="box">
            {remainingDays < 10
              ? (remainingDays = "0" + remainingDays)
              : remainingDays}
          </div>
          <div className="dayshours">Days</div>
        </div>
        <div className="">
          <div className="box">
            {remainingHours < 10
              ? (remainingHours = "0" + remainingHours)
              : remainingHours}
          </div>
          <div className="dayshours">Hours</div>
        </div>
        <div className="">
          <div className="box">
            {remainingMinutes < 10
              ? (remainingMinutes = "0" + remainingMinutes)
              : remainingMinutes}
          </div>
          <div className="dayshours">Minutes</div>
        </div>
        <div className="">
          <div className="box">
            {remainingSeconds < 10
              ? (remainingSeconds = "0" + remainingSeconds)
              : remainingSeconds}
          </div>
          <div className="dayshours">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
