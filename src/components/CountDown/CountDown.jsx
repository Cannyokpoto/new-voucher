import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // Set the promo end date (1 week from current date)
  const promoEndDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

  const calculateTimeLeft = () => {
    const now = new Date().getTime(); // Get current time
    const difference = promoEndDate - now; // Calculate the difference

    // If the promo is still running, calculate remaining time
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countDown-wrapper'>
      
      {/* Conditionally render the countdown */}
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className='countDown'>
          {/* <p> </p>
          <p> </p>
          <p>: </p>
          <p>: </p> */}
          <div className="count">
            <p>{timeLeft.days}</p>
            <p>Days</p>
          </div>

          <div className="count">
            <p>{timeLeft.hours}</p>
            <p>Hours</p>
          </div>

          <div className="count">
            <p>{timeLeft.minutes}</p>
            <p>Min.</p>
          </div>

          <div className="count">
            <p>{timeLeft.seconds}</p>
            <p>Sec.</p>
          </div>
        </div>
      ) : (
        <p>Voucher no longer valid!</p>
      )}
    </div>
  );
};

export default Countdown;
