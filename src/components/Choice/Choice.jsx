import React from "react";
import PHOTOS from "../../assets/images";
import "./Choice.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";


function Choice() {
  return (
    <div className="flex items-start justify-around pt-5 border h-100vh w-100vw choice">
      <div className="w-40 h-auto rounded-10">
        <iframe
          //   width="100%"
          //   height="315"
          className="h-315px w-100 rounded-20"
        //   src="https://www.youtube.com/embed/lFC9stI0J6s?si=0axOF9Uzi1fDxZrP"
        src="https://www.youtube.com/embed/3MGJtRxPmfc?si=DmeDD9AXZ2VIHNkI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex flex-col h-auto gap-2 w-50">
        <h1 className="text-30px text-vogueWhite">
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
      <div className="flex items-start justify-center pt-3 border h-100vh w-100vw independence">
        <div className="flex flex-col justify-center h-auto gap-1 w-30 rounded-10">
            <Link
            to="/choice"
            className="text-black text-30px"
            >
            <GoArrowLeft className="anotherCert" />
            </Link>
            <img src={PHOTOS.independence} alt=""  className="h-430px w-90"/>
        </div>
  
        <div className="flex flex-col w-40 h-auto gap-2 pt-3">
          <h1 className="text-black text-30px">
            Grab <span className="font-bold">20% OFF</span>
            Instantly
          </h1>
  
          <p className="text-black text-15px">
          Would you like to learn any of our in demand courses? We’re offering you an instant 20% discount without any tasks or extra steps. Just sign up, save, and start learning right away!
          </p>
  
          <Link
            to="/twenty"
            className="flex items-center justify-center text-black bg-vogueYello h-40px w-200px rounded-5 hover:bg-white hover:border hover:text-vogueBlack hover:border-vogueBlack text-15px"
          >
            Claim 20% discount
          </Link>
  
          <div className="flex flex-col w-auto h-auto gap-1">
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
