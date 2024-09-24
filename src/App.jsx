import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
// import './index.css';
import { FirstLandingPage, SecondLandingPage } from './components/LandingPage/LandingPage'
import Header from './components/Header/Header';
import Discount from './components/Discount/Discount';
import { Choice, Independence } from './components/Choice/Choice';
import Twenty from './components/Twenty/Twenty';





function App() {

  return (
   <div className="app">
      <Header />
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
  )
}

export default App;