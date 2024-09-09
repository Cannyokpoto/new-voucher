import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import PHOTOS from "../../assets/images";
import axios from "axios";
import Loading from "../Loading/Loading";
import { GoArrowLeft } from "react-icons/go";
// import { courses } from "../../assets/Data";

function LandingPage() {
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("landing");
  const handleScreen = () => {
    setScreen("result");
  };

  //To view a single customer

  const [student, setStudent] = useState(null);
  console.warn("student:", student);

  const IssuedOn = student ? student.issued_date.slice(0, 10).split("-") : "";

  const [date, setDate] = useState([]);

  const [certificateError, setCertificateError] = useState("");
  console.warn("certificateError:", certificateError);

  const [certificateNumber, setCertificateNumber] = useState("");
  const certNumHandler = (event) => {
    setCertificateNumber(event.target.value);
    setCertificateError("");
  };
  console.warn("certificateNumber:", certificateNumber);

  //view certificate
  async function viewCertificate() {
    const url = `https://server.handiwork.com.ng/api/certificates/number/${certificateNumber}`;

    if (certificateNumber.length > 0 && certificateNumber.length === 6) {
      try {
        setLoading(true);
        const response = await axios.get(url);

        setStudent(response.data.certificate);
        handleScreen();
      } catch (dupError) {
        console.warn("dupError:", dupError.response.data.error);
        setCertificateError(dupError.response.data.error);
      } finally {
        setLoading(false);
      }
    } else if (certificateNumber.length > 0 && certificateNumber.length < 6) {
      setCertificateError("Invalid certificate number.");
    } else if (certificateNumber.length > 0 && certificateNumber.length > 6) {
      setCertificateError("Invalid certificate number.");
    } else if (certificateNumber === "") {
      setCertificateError("Please provide certificate number.");
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
  const sortedCourses = courses && courses.sort((a, b) => a.name.localeCompare(b.name))
  console.warn("sortedCourses:", sortedCourses);

  useEffect(()=>{
    const viewCourses = async () =>{
      try {
        
        const response = await axios.get(coursesUrl);
  
        setCourses(response.data);
       
      } catch (dupError) {
        console.warn("dupError:", dupError);
      }
    }

    viewCourses();
  },[]);



  

  

  //validation
  const expectedVoucher = "30456";

  const [firstName, setFirstName] = useState("");
  console.log("firstName:", firstName);

  const [lastName, setLastName] = useState("");
  console.log("lastName:", lastName);

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredCourse, setPreferredCourse] = useState("");

  const [voucherNumber, setVoucherNumber] = useState("");
  const [errors, setErrors] = useState({});


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

  useEffect(()=>{
    if(preferredCourse.toLowerCase().includes('cyber')){
      setRedirectUrl("https://paystack.com/pay/cybersecurityvoucher");
    }
    else if(preferredCourse.toLowerCase().includes('data')){
      setRedirectUrl("https://paystack.com/pay/dataanalyticsvoucher");
    }
    else if(preferredCourse.toLowerCase().includes('cloud')){
      setRedirectUrl("https://paystack.com/pay/cloudcomputing");
    }
    else if(preferredCourse.toLowerCase().includes('full stack')){
      setRedirectUrl("https://paystack.com/pay/fullstackweb");
    }
    else if(preferredCourse.toLowerCase().includes('mobile')){
      setRedirectUrl("https://paystack.com/pay/mobile-appdevelopment");
    }
    else if(preferredCourse.toLowerCase().includes('ux')){
      setRedirectUrl("https://paystack.com/pay/ui-uxdesigns");
    }
    else if(preferredCourse.toLowerCase().includes('digital')){
      setRedirectUrl("https://paystack.com/pay/digital-marketingcourse");
    }
    else if(preferredCourse.toLowerCase().includes('networking')){
      setRedirectUrl("https://paystack.com/pay/networkingcourse");
    }
    else if(preferredCourse.toLowerCase().includes('business analysis')){
      setRedirectUrl("https://paystack.com/pay/businessanalysis");
    }
    else if(preferredCourse.toLowerCase().includes('graphic')){
      setRedirectUrl("https://paystack.com/pay/graphic-designcourse");
    }
    else if(preferredCourse.toLowerCase().includes('website')){
      setRedirectUrl("https://paystack.com/pay/nocode-design");
    }
    else if(preferredCourse.toLowerCase().includes('devop')){
      setRedirectUrl("https://paystack.com/pay/dev-op");
    }
    else if(preferredCourse.toLowerCase().includes('animation')){
      setRedirectUrl("https://paystack.com/pay/animationcourse");
    }
    else if(preferredCourse.toLowerCase().includes('machine')){
      setRedirectUrl("https://paystack.com/pay/ai-machine-learning");
    }
    else if(preferredCourse.toLowerCase().includes('content')){
      setRedirectUrl("https://paystack.com/pay/video-editing-content");
    }
    else if(preferredCourse.toLowerCase().includes('video')){
      setRedirectUrl("https://paystack.com/pay/video-editing-content");
    }
    else if(preferredCourse.toLowerCase().includes('python')){
      setRedirectUrl("https://paystack.com/pay/pythonprog");
    }
    else{
      setRedirectUrl("#");
    }
  }, [preferredCourse])

  
  //form data to send
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    preferredCourse: preferredCourse,
    voucherNumber: voucherNumber
  };


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

        if(response.status === 201){
          setRegisteredStudent(response)
          alert("Almost done. Proceed to make payment");
        }else{
          alert("An unexpected error occured, please refill form.")
        }
      } catch (error) {
        console.log('registration error:', error.response.data.error)
        alert("An unexpected error occured, please refill form.")
      }
    }
  };


  

  return (
    <div
      className={
        screen === "landing" || "voucher"
          ? "pageWrapper wrapper-bg"
          : "pageWrapper"
      }
    >
      <header className="header">
        <img src={PHOTOS.LOGO} alt="" />
      </header>

      {student !== null && screen === "result" ? (
        <GoArrowLeft className="anotherCert" onClick={goBack} />
      ) : (
        ""
      )}

      {screen === "landing" && student == null ? (
        <div className="landing">
          <div className="right">
            {/* <p>You can search to verify  bearer's certificate by certificate number:</p>

                <input type="number" placeholder='Enter certificate number' onChange={certNumHandler}/>
                
                <p className='certError'>{certificateError}</p>

                <button onClick={viewCertificate}>Search</button> */}

            <img src={PHOTOS.discount} alt="" />
          </div>

          <div className="left">
            <h1>
              Grab <span>40% discount</span> on all our courses.
            </h1>

            <p>
              Register now with &#8358;10,000 and secure a voucher to enjoy 40%
              discount on all our courses. Voucher expires at midnight, 16th september
              2024.
            </p>

            <button className="voucherBtn" onClick={() => setScreen("voucher")}>
              Claim voucher
            </button>
          </div>

          {/* { loading ? <Loading /> : "" } */}
        </div>
      ) : (
        ""
      )}

      {/* {student !==null && screen === 'result' ?
      <div className="result">
        
        <div className="left">
            <img src={`https://server.handiwork.com.ng/${student.certificate_file_path}`} alt="" />
        </div>

        <div className="right">
            <div className="name">{student.student_name}</div>
            
            <p>Course: {student.course}</p>
            <p>Cert No: {student.certificate_number}</p>
            <p>Issued Date: {`${IssuedOn[2]}/${IssuedOn[1]}/${IssuedOn[0]}`}</p>
        </div>
      </div> : ""} */}

      {screen === "voucher" ? (
        <div className="form">
          <span className="tag">Claim Voucher</span>

          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <span className="voucherError">{errors.firstName}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <span className="voucherError">{errors.lastName}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="voucherError">{errors.email}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <span className="voucherError">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="voucherNumber">Voucher number</label>
            <input
              type="number"
              name="voucherNumber"
              placeholder="Enter voucher number"
              onChange={(e) => setVoucherNumber(e.target.value)}
              // value="30456"
            />
            {errors.voucherNumber && (
              <span className="voucherError">{errors.voucherNumber}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="preferredCourse">Preferred course</label>
            <select
              name="preferredCourse"
              id="preferredCourse"
              onChange={handleCourses}
            >
              <option value="">--Preferred course--</option>
              {sortedCourses && sortedCourses.map((course, i) => (
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
              {courses && courses.map(
                (course, i) =>
                  course.name === preferredCourse && (
                    <li key={i}>{course.overview}</li>
                  )
              )}
            </ul>

            <div className="prices">
              {preferredCourse !== "" ? (
                <p className="cost">Cost (40% discount):</p>
              ) : (
                ""
              )}

              {preferredCourse !== "" ? (
                <p className="warning">
                  Note: Voucher expires at midnight, 16th september 2024. Discount will
                  be withdrawn after this period.
                </p>
              ) : (
                ""
              )}

              {courses && courses.map(
                (course, i) =>
                  course.name === preferredCourse && (
                    <div className="renderedCost">
                      <p className="oldPrice">&#8358;{course.price}</p>
                      <p className="newPrice">
                        &#8358;{course.price - (40 / 100) * course.price}.00
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
          

            {/* Invalid inputs */}
            
          {(firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phoneNumber !== "" &&
            voucherNumber !== "" &&
            preferredCourse !== "" && voucherNumber === expectedVoucher) ||
          !errors ? (
            ""
          ) : (
            <button className="signUpBtnDisabled" onClick={handleSubmit}>
              Make payment
            </button>
          )}

          {/* Good to go! */}
          
          {(firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phoneNumber !== "" &&
            voucherNumber !== "" &&
            preferredCourse !== "" && voucherNumber === expectedVoucher) ||
            !errors ? (
              <a href={`${redirectUrl}`} className="signUpBtn" onClick={handleSubmit}>
                Make payment
              </a>
            ) : (
            ""
          )}

          
        </div>
      ) : (
        ""
      )}
      {/* <button className="signUpBtn" onClick={handleSubmit}>try payment</button> */}
    </div>
  );
}

export default LandingPage;
