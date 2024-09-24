import React from "react";
import PHOTOS from "../../assets/images";
import "./Choice.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";


function Choice() {
  return (
    <div className="lg:flex-row lg:border lg:pt-5 lg:gap-3 lg:justify-around lg:items-start lg:flex lg:h-100vh lg:w-100vw choice small:flex small:flex-col small:w-90vw small:items-center small:h-auto small:gap-3">
      <div className="h-auto lg:w-40 lg:rounded-10 small:w-100">
        <iframe
          //   width="100%"
          //   height="315"
          className="lg:h-315px lg:w-100 rounded-20 small:h-200px small:w-100"
        //   src="https://www.youtube.com/embed/lFC9stI0J6s?si=0axOF9Uzi1fDxZrP"
        src="https://www.youtube.com/embed/3MGJtRxPmfc?si=DmeDD9AXZ2VIHNkI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="lg:gap-2 lg:h-auto lg:flex-col lg:flex lg:w-50 small:w-100 small:px-1 small:h-auto small:gap-3 small:flex small:flex-col small:pb-3">
        <h1 className="lg:text-30px text-vogueWhite small:text-15px">
          Unlock <span className="font-bold">40% OFF</span> by Completing a Task
          or Grab <span className="font-bold">20% OFF</span> Instantly
        </h1>

        <p className="text-vogueWhite text-15px">
          1. 40% OFF – Complete a Simple Task! Tackle a quick task and enjoy a
          40% discount on any of our tech courses! It’s a fun, rewarding way to
          invest in your future.
        </p>

        <Link
          to="/challenge"
          className="flex items-center justify-center bg-discountBlue h-40px w-200px text-vogueWhite rounded-5 hover:bg-white hover:border hover:text-vogueBlack hover:border-vogueBlack text-15px"
        >
          Get 40% DISCOUNT
        </Link>

        <p className="text-vogueWhite text-15px">
          2. 20% OFF Instantly – No Tasks Needed! Not up for a challenge? No
          problem! Get an instant 20% discount without any tasks or extra steps.
          Just sign up, save, and start learning right away!
        </p>

        <Link
          to="/independence"
          className="flex items-center justify-center text-black bg-vogueYello h-40px w-200px rounded-5 hover:bg-white hover:border hover:text-vogueBlack hover:border-vogueBlack text-15px"
        >
          Get 20% DISCOUNT
        </Link>
      </div>
    </div>
  );
}

function Independence() {
    return (
      <div className="flex items-start justify-center pt-3 border h-100vh w-100vw independence small:flex small:flex-col small:w-90vw small:h-auto small:items-center">
        <div className="flex flex-col justify-center h-auto gap-1 w-30 rounded-10 small:w-100">
            <Link
            to="/choice"
            className="text-black text-30px"
            >
            <GoArrowLeft className="anotherCert" />
            </Link>
            <img src={PHOTOS.independence} alt=""  className="h-430px w-90 small:w-100"/>
        </div>
  
        <div className="flex flex-col w-40 h-auto gap-2 pt-3 small:w-100 small:items-center small:pb-3">
          <h1 className="text-black text-30px">
            Grab <span className="font-bold">20% OFF</span>
            Instantly
          </h1>
  
          <p className="text-black text-15px small:text-center">
          Would you like to learn any of our in demand courses? We’re offering you an instant 20% discount without any tasks or extra steps. Just sign up, save, and start learning right away!
          </p>
  
          <Link
            to="/twenty"
            className="flex items-center justify-center text-black bg-vogueYello h-40px w-200px rounded-5 hover:bg-white hover:border hover:text-vogueBlack hover:border-vogueBlack text-15px"
          >
            Claim 20% discount
          </Link>
  
          <div className="flex flex-col w-auto h-auto gap-1 small:items-center">
            <p className="text-black text-15px">
            For more Information
            </p>
  
            <a
                href="https://wa.me/2348029425815"
                className="flex items-center justify-center gap-1 text-white bg-discountGreen h-40px w-200px rounded-5 hover:bg-white hover:border hover:text-discountGreen hover:border-discountGreen text-15px"
            >
                <FaWhatsapp className="text-20px"/>
                Whatsapp
            </a>
          </div>
        </div>
      </div>
    );
  }

export { Choice, Independence };
