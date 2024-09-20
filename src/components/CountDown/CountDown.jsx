import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

const Countdown = () => {
  // // Set the promo end date (1 week from current date)
  // // const promoEndDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  // const now = new Date();
  // // const promoEndDate = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  // const promoEndDate = 5 * 24 * 60 * 60 * 1000;
  // // const timeLeft = end.getTime() - now.getTime();

  // const calculateTimeLeft = () => {
  //   const now = new Date().getTime(); // Get current time
  //   const difference = promoEndDate - now; // Calculate the difference

  //   // If the promo is still running, calculate remaining time
  //   let timeLeft = {};
  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //       minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const timerId = useRef(null);
  

  // useEffect(() => {
  //   timerId.current = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   // Clean up the timer when the component unmounts
  //   return () => clearInterval(timerId.current);
  // }, []);

  
  const duration = 5 * 24 * 60 * 60 * 1000;
  // const endDate = new Date(2024, 8, 16);
  // console.log('endDate:', endDate);
  
  // const duration = endDate.getTime()
  console.log('duration:', duration);  
  
  const [time, setTime] = useState(duration);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() =>{
     setTimeout(() => {
      setTime(time - 1000)
     }, 1000);
  },[time]);

  //get formatted time
  useEffect(()=>{
    const getFormattedTime = (milliseconds) =>{
      let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
      let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
      let totalHours = parseInt(Math.floor(totalMinutes / 60)); 
      let days = parseInt(Math.floor(totalHours / 24));
  
      let seconds = parseInt(totalSeconds % 60);
      setSeconds(seconds);
      let minutes = parseInt(totalMinutes % 60);
      setMinutes(minutes);
      let hours = parseInt(totalHours % 24);
      setHours(hours);
      // let days = parseInt(totalDays % 24);
      setDays(days);
    }

    getFormattedTime(time);
  }, [time, duration])

  

  return (
    <div className='countDown-wrapper'>
      
      {/* Conditionally render the countdown */}
      {time > 0 ? (
        <div className='countDown'>
          <div className="count">
            <p>{days}</p>
            <p>Days</p>
          </div>

          <div className="count">
            <p>{hours}</p>
            <p>Hours</p>
          </div>

          <div className="count">
            <p>{minutes}</p>
            <p>Min.</p>
          </div>

          <div className="count">
            <p>{seconds}</p>
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
