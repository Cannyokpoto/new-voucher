import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import PHOTOS from "../../assets/images";
import axios from "axios";
import Loading from "../Loading/Loading";
import { GoArrowLeft } from "react-icons/go";

function Twenty() {
    const [loading, setLoading] = useState(false);
    const [screen, setScreen] = useState("winner");
    const handleScreen = () => {
      setScreen("result");
    };
  
    //To view a single participant
  
    const [participant, setParticipant] = useState(null);
    console.warn("participant:", participant);
  
    const [voucherError, setVoucherError] = useState("");
    console.warn("voucherError:", voucherError);
  
   
    const [errors, setErrors] = useState({});
  
     const [voucherNumber, setVoucherNumber] = useState("");
    const vouchertNumHandler = (event) => {
      setVoucherNumber(event.target.value);
      setVoucherError("");
    };
    console.warn("voucherNumber:", voucherNumber);
  
    //view participant
    async function viewParticipant() {
      const url = `https://server.handiwork.com.ng/api/subscription/verify/${voucherNumber}`;
  
      if (voucherNumber.length > 0 && voucherNumber.length === 6) {
        try {
          setLoading(true);
          const response = await axios.get(url);
  
          setParticipant(response.data.promoter);
  
          const firstName = response.data.promoter.firstName;
          const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
          
          if(response.data.success === true){
            alert(`Congratulations ${capitalizedName}!! You can now enjoy 40% discount on all our courses. Happy learning.`)
            setScreen("winner")
          }else{
            setScreen("landing")
          }
          // handleScreen();
        } catch (dupError) {
          console.warn("dupError:", dupError.response.data.error);
          setVoucherError(dupError.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (voucherNumber.length > 0 && voucherNumber.length < 6) {
        setVoucherError("Invalid voucher number.");
      } else if (voucherNumber.length > 0 && voucherNumber.length > 6) {
        setVoucherError("Invalid voucher number.");
      } else if (voucherNumber === "") {
        setVoucherError("Please provide voucher number.");
      }
    }
  
    const goBack = () => {
      setScreen("landing");
      setStudent(null);
    };
  
    //voucher claim
    const coursesUrl = `https://server.handiwork.com.ng/api/subscription/courses`;
    const [courses, setCourses] = useState();
    console.warn("courses:", courses);
  
    //to sort the courses in alphabetical order
    const sortedCourses =
      courses && courses.sort((a, b) => a.name.localeCompare(b.name));
    console.warn("sortedCourses:", sortedCourses);
  
    useEffect(() => {
      const viewCourses = async () => {
        try {
          const response = await axios.get(coursesUrl);
  
          setCourses(response.data);
        } catch (dupError) {
          console.warn("dupError:", dupError);
        }
      };
  
      viewCourses();
    }, []);
  
    //validation
    const expectedVoucher = "30456";
  
    const [firstName, setFirstName] = useState("");
    console.log("firstName:", firstName);
  
    const [lastName, setLastName] = useState("");
    console.log("lastName:", lastName);
  
    const [email, setEmail] = useState("");
  
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferredCourse, setPreferredCourse] = useState("");
  
    // const [voucherNumber, setVoucherNumber] = useState("");
    // const [errors, setErrors] = useState({});
  
    //to handle courses
    const [cost, setCost] = useState(0);
    console.log("cost:", cost);
  
    const [redirectUrl, setRedirectUrl] = useState("");
    console.log("redirectUrl:", redirectUrl);
  
    const [registeredStudent, setRegisteredStudent] = useState({});
    console.log("registeredStudent:", registeredStudent);
  
    const handleCourses = (e) => {
      setPreferredCourse(e.target.value);
  
      setCost(e.target.cost);
    };
  
    useEffect(() => {
      if (preferredCourse.toLowerCase().includes("cyber")) {
        setRedirectUrl("https://paystack.com/pay/cybersecurityvoucher");
      } else if (preferredCourse.toLowerCase().includes("data")) {
        setRedirectUrl("https://paystack.com/pay/dataanalyticsvoucher");
      } else if (preferredCourse.toLowerCase().includes("cloud")) {
        setRedirectUrl("https://paystack.com/pay/cloudcomputing");
      } else if (preferredCourse.toLowerCase().includes("full stack")) {
        setRedirectUrl("https://paystack.com/pay/fullstackweb");
      } else if (preferredCourse.toLowerCase().includes("mobile")) {
        setRedirectUrl("https://paystack.com/pay/mobile-appdevelopment");
      } else if (preferredCourse.toLowerCase().includes("ux")) {
        setRedirectUrl("https://paystack.com/pay/ui-uxdesigns");
      } else if (preferredCourse.toLowerCase().includes("digital")) {
        setRedirectUrl("https://paystack.com/pay/digital-marketingcourse");
      } else if (preferredCourse.toLowerCase().includes("networking")) {
        setRedirectUrl("https://paystack.com/pay/networkingcourse");
      } else if (preferredCourse.toLowerCase().includes("business analysis")) {
        setRedirectUrl("https://paystack.com/pay/businessanalysis");
      } else if (preferredCourse.toLowerCase().includes("graphic")) {
        setRedirectUrl("https://paystack.com/pay/graphic-designcourse");
      } else if (preferredCourse.toLowerCase().includes("website")) {
        setRedirectUrl("https://paystack.com/pay/nocode-design");
      } else if (preferredCourse.toLowerCase().includes("devop")) {
        setRedirectUrl("https://paystack.com/pay/dev-ops");
      } else if (preferredCourse.toLowerCase().includes("animation")) {
        setRedirectUrl("https://paystack.com/pay/animationcourse");
      } else if (preferredCourse.toLowerCase().includes("machine")) {
        setRedirectUrl("https://paystack.com/pay/ai-machine-learning");
      } else if (preferredCourse.toLowerCase().includes("content")) {
        setRedirectUrl("https://paystack.com/pay/video-editing-content");
      } else if (preferredCourse.toLowerCase().includes("video")) {
        setRedirectUrl("https://paystack.com/pay/video-editing-content");
      } else if (preferredCourse.toLowerCase().includes("python")) {
        setRedirectUrl("https://paystack.com/pay/pythonprog");
      } else {
        setRedirectUrl("#");
      }
    }, [preferredCourse]);
  
    //form data to send
    const formData = {
      firstName: participant && participant.firstName,
      lastName: participant && participant.lastName,
      email: participant && participant.email,
      phoneNumber: participant && participant.phoneNumber,
      preferredCourse: preferredCourse,
      voucherNumber: voucherNumber,
    };
  
    console.log("formData:", formData);
  
    //funtion for form submit
    const handleSubmit = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
      if (!firstName.trim()) {
        validationErrors.firstName = "first name is required";
      }
  
      if (!lastName.trim()) {
        validationErrors.lastName = "last name is required";
      }
  
      if (!email.trim()) {
        validationErrors.email = "email is required";
      }
  
      if (!phoneNumber.trim()) {
        validationErrors.phoneNumber = "phone number is required";
      }
  
      if (!preferredCourse.trim()) {
        validationErrors.preferredCourse = "please select a course";
      }
  
      if (!voucherNumber.trim()) {
        validationErrors.voucherNumber = "please enter your voucher number";
      } else if (voucherNumber !== expectedVoucher) {
        validationErrors.voucherNumber = "Invalid voucher number";
      }
  
      setErrors(validationErrors);
  
      console.warn("validationErrors:", validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          const response = await axios.post(
            "https://server.handiwork.com.ng/api/subscription/register",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (response.status === 201) {
            setRegisteredStudent(response);
            alert("Almost done. Proceed to make payment");
          } else {
            alert("An unexpected error occured, please refill form.");
          }
        } catch (error) {
          console.log("registration error:", error.response.data.error);
          alert("An unexpected error occured, please refill form.");
        }
      }
    };
  
    return (
      <div
        className="h-auto pageWrapper w-60vw"
      >

  
        {participant !== null && screen === "result" ? (
          <GoArrowLeft className="anotherCert" onClick={goBack} />
        ) : (
          ""
        )}
  
        
         
       
  
        
  
        {screen === "winner" ? (
          <div className="border form">
            <span className="tag">Enjoy 20% Discount</span>
  
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                className="border"
                // onChange={(e) => setFirstName(e.target.value)}
              
              />
              {/* {errors.firstName && (
                <span className="voucherError">{errors.firstName}</span>
              )} */}
            </div>
  
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                className="border"
                // onChange={(e) => setLastName(e.target.value)}
              />
              {/* {errors.lastName && (
                <span className="voucherError">{errors.lastName}</span>
              )} */}
            </div>
  
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border"
                // onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && (
                <span className="voucherError">{errors.email}</span>
              )} */}
            </div>
  
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="border"
                // onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {/* {errors.phoneNumber && (
                <span className="voucherError">{errors.phoneNumber}</span>
              )} */}
            </div>
  
            {/* <div className="field">
              <label htmlFor="voucherNumber">Voucher number</label>
              <input
                type="number"
                name="voucherNumber"
                placeholder="Enter voucher number"
                // onChange={(e) => setVoucherNumber(e.target.value)}
              />
              {errors.voucherNumber && (
                <span className="voucherError">{errors.voucherNumber}</span>
              )}
            </div> */}
  
            <div className="field">
              <label htmlFor="preferredCourse">Preferred course</label>
              <select
                name="preferredCourse"
                id="preferredCourse"
                onChange={handleCourses}
                className="border"
              >
                <option value="">--Preferred course--</option>
                {sortedCourses &&
                  sortedCourses.map((course, i) => (
                    <option value={course.name} key={i}>
                      {course.name}
                    </option>
                  ))}
              </select>
              {errors.preferredCourse && (
                <span className="voucherError">{errors.preferredCourse}</span>
              )}
  
              <ul>
                {preferredCourse !== "" ? <p>Overview:</p> : ""}
                {courses &&
                  courses.map(
                    (course, i) =>
                      course.name === preferredCourse && (
                        <li key={i}>{course.overview}</li>
                      )
                  )}
              </ul>
  
              <div className="prices">
                {preferredCourse !== "" ? (
                  <p className="cost">Cost (20% discount):</p>
                ) : (
                  ""
                )}
  
                {/* {preferredCourse !== "" ? (
                  <p className="warning">
                    Note: Voucher expires at midnight, 16th september 2024.
                    Discount will be withdrawn after this period.
                  </p>
                ) : (
                  ""
                )} */}
  
                {courses &&
                  courses.map(
                    (course, i) =>
                      course.name === preferredCourse && (
                        <div className="renderedCost">
                          <p className="oldPrice">&#8358;{course.price}</p>
                          <p className="newPrice">
                            &#8358;{course.price - (20 / 100) * course.price}.00
                          </p>
                        </div>
                      )
                  )}
              </div>
            </div>
  
            {/* Invalid inputs */}
  
            {
              preferredCourse !=="" ? "": 
              <button className="signUpBtnDisabled" onClick={handleSubmit}>
                Make payment
              </button>
            }
  
            {/* Good to go! */}
  
            { preferredCourse !== "" ? (
              <a
                href={`${redirectUrl}`}
                className="signUpBtn"
                onClick={handleSubmit}
              >
                Make payment
              </a>
            ) : ""}
            
          </div>
        ) : (
          ""
        )}
        {/* <button className="signUpBtn" onClick={handleSubmit}>try payment</button> */}
        {loading && <Loading />}
      </div>
    );
}

export default Twenty
