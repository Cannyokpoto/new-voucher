import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import { FirstLandingPage, SecondLandingPage } from './components/LandingPage/LandingPage'



function App() {

  return (
   <div className="app">
      
      <Router>
            
            <Routes>
                <Route path="/" element={<FirstLandingPage />} />                
                
                <Route path="/course-registration" element={<SecondLandingPage />} />      
                
            </Routes>
            
        </Router>
   </div>
  )
}

export default App;