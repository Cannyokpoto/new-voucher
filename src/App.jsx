import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
// import './index.css';
import {
  FirstLandingPage,
  SecondLandingPage,
} from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Discount from "./components/Discount/Discount";
import { Choice, Independence } from "./components/Choice/Choice";
import Twenty from "./components/Twenty/Twenty";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <Header />
      <a
        href="https://wa.me/2348029425815"
        className="fixed flex items-center justify-center w-auto h-auto p-1 text-white rounded-full large:right-8 bg-discountGreen hover:bg-white hover:border hover:text-discountGreen hover:border-discountGreen large:bottom-5 small:bottom-13 small:right-5"
      >
        <FaWhatsapp className="large:text-30px small:text-25px" />
      </a>
      <Router>
        <Routes>
          <Route path="/" element={<Discount />} />
          <Route path="/challenge" element={<FirstLandingPage />} />

          <Route path="/course-registration" element={<SecondLandingPage />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/independence" element={<Independence />} />
          <Route path="/twenty" element={<Twenty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
