import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import PHOTOS from "../../assets/images";
import axios from "axios";
import Loading from "../Loading/Loading";
import { GoArrowLeft } from "react-icons/go";
import Countdown from "../CountDown/CountDown";
import { Link } from "react-router-dom";

// import { courses } from "../../assets/Data";

function FirstLandingPage() {
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
    setScreen("guidelines");
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

  const [instagramHandle, setInstagramHandle] = useState("");

  const [instagramUrl, setInstagramUrl] = useState("");
  
  const [preferredCourse, setPreferredCourse] = useState("");

  const [voucherNumber, setVoucherNumber] = useState("");
  const [errors, setErrors] = useState({});

  //to handle courses
  const [cost, setCost] = useState(0);
  console.log("cost:", cost);

  const [redirectUrl, setRedirectUrl] = useState("");
  console.log("redirectUrl:", redirectUrl);

  const [participant, setParticipant] = useState({});
  console.log("participant:", participant);

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
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    preferredCourse: preferredCourse,
    instagramUrl: instagramUrl,
    instagramHandle: instagramHandle
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

    // if (!preferredCourse.trim()) {
    //   validationErrors.preferredCourse = "please select a course";
    // }

    if (!instagramHandle.trim()) {
      validationErrors.instagramHandle = "please provide your instagram handle";
    }
    if (!instagramHandle.includes('@')) {
      validationErrors.instagramHandle = "please provide a valid instagram handle";
    }

    if (!instagramUrl.trim()) {
      validationErrors.instagramUrl = "please provide a link to your instagram page";
    }

    if (!instagramUrl.includes('https')) {
      validationErrors.instagramUrl = "please provide a valid instagram link.";
    }

    // if (!voucherNumber.trim()) {
    //   validationErrors.voucherNumber = "please enter your voucher number";
    // } else if (voucherNumber !== expectedVoucher) {
    //   validationErrors.voucherNumber = "Invalid voucher number";
    // }

    setErrors(validationErrors);

    console.warn("validationErrors:", validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setLoading(true)
        const response = await axios.post(
          "https://server.handiwork.com.ng/api/subscription/promotions/register ",    
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log('new error:', response)

        if (response.status === 201) {
          setParticipant(response.data.promotionDetails);
          alert("Registration for #MyTechDreamWithPageInnovations completed. Good luck!");
          setScreen('landing')
        } 
      } catch (error) {
        console.log("registration error:", error.response.data.error);
        if(error.response.data.error.includes('Duplicate')) {
          // alert("Email already registered for this challenge, please use a different email.");
          validationErrors.email = "Email already registered for this challenge, please use a different email.";
        }
      }
      finally{
        setLoading(false);
      }
    }
  };

  return (
    <div
      className={
        screen === "landing" || screen === "voucher"
          ? "pageWrapper wrapper-bg"
          : "pageWrapper"
      }
    >

      {student !== null && screen === "result" ? (
        <GoArrowLeft className="anotherCert" onClick={goBack} />
      ) : (
        ""
      )}

      {screen === "landing" && student == null ? (
        <div className="relative landing">
          <div className="border right">
            {/* <p>You can search to verify  bearer's certificate by certificate number:</p>

                <input type="number" placeholder='Enter certificate number' onChange={certNumHandler}/>
                
                <p className='certError'>{certificateError}</p>

                <button onClick={viewCertificate}>Search</button> */}
                
                <Link
                  to="/choice"
                  className="absolute text-white left-3 text-30px bottom-40 backLink"
                  >
                  <GoArrowLeft />
                </Link>

            <img src={PHOTOS.discount} alt="" />
          </div>

          <div className="left">
            {/* <Countdown /> */}
            <h1>
              Show Your <span>Tech Dream</span> Challenge
            </h1>

            <p>
              The window to our 40% Discount Offer for all our courses has
              closed. However, to still enjoy this offer, kindly engage with the task below and
              stand a chance of winning the 40% Discount offer.
            </p>

            <button className="voucherBtn" onClick={() => setScreen('guidelines')}>Perform task</button>
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

       {screen === 'guidelines' ?
      <div className="guidelines">
        <div className="task">
          <h3>Show Your Tech Dream Challenge</h3>
          <p>
            Post a 15-30 second video or photo carousel on your Instagram page,
            describing or showing how learning tech (e.g., web development, data
            analysis, cybersecurity, etc.) would help you achieve your goals.
          </p>
        </div>

        <ol>
          <h4>Guidelines</h4>
          <li>You must follow our Instagram page (@page_innovations).</li>
          <li>You must tag our page in your post and use the hashtag #MyTechDreamWithPageInnovations.</li>
          <li>You should encourage your followers to 
            engage with your post (likes, comments, shares).</li>
          <li>At the end of the week, the post with the highest engagement 
            (likes/comments) wins the 40% discount offer.</li>
        </ol>

        <ul>
          <h4>Engagement Incentives</h4>
          <li>Winner gets the 40% discount on the course when they register with ₦10,000.</li>
          <li>Creative entries will be highlighted daily on our Instagram Story.</li>
        </ul>

        <button className="taskBtn" onClick={() => setScreen('taskForm')}>Participate</button>
      </div> : ""}

      {screen === "taskForm" ? (
        <div className="border border-black form">
          <GoArrowLeft className="anotherCert" onClick={goBack} />
          <span className="tag">Start task</span>

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
            <label htmlFor="instagramHandle">Instagram handle</label>
            <input
              type="text"
              name="instagramHandle"
              placeholder="E.g @blessing_okon"
              onChange={(e) => setInstagramHandle(e.target.value)}
              // value="30456"
            />
            {errors.instagramHandle && (
              <span className="voucherError">{errors.instagramHandle}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="instagramUrl">Link to your instagram page</label>
            <input
              type="text"
              name="instagramHandle"
              placeholder="E.g https://instagram.com/..."
              onChange={(e) => setInstagramUrl(e.target.value)}
              // value="30456"
            />
            {errors.instagramUrl && (
              <span className="voucherError">{errors.instagramUrl}</span>
            )}
          </div>

          {/* <div className="field">
            <label htmlFor="preferredCourse">Preferred course</label>
            <select
              name="preferredCourse"
              id="preferredCourse"
              onChange={handleCourses}
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
                <p className="cost">Cost (40% discount):</p>
              ) : (
                ""
              )}

              {preferredCourse !== "" ? (
                <p className="warning">
                  Note: Voucher expires at midnight, 16th september 2024.
                  Discount will be withdrawn after this period.
                </p>
              ) : (
                ""
              )}

              {courses &&
                courses.map(
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
          </div> */}

          {/* Invalid inputs */}

          {(firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phoneNumber !== "" &&
            instagramHandle !== "" &&
            instagramHandle.includes('@') &&
            instagramUrl !== "" &&
            instagramUrl.includes('https')) ||
          !errors ? (
            ""
          ) : (
            <button className="signUpBtnDisabled" onClick={handleSubmit}>
              Start task
            </button>
          )}

          {/* Good to go! */}

          {(firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phoneNumber !== "" &&
            instagramHandle !== "" &&
            instagramHandle.includes('@') &&
            instagramUrl !== "" &&
            instagramUrl.includes('https')) ||
          !errors ? (
            <button
              className="signUpBtn"
              onClick={handleSubmit}
            >
              Start task
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {/* <button className="signUpBtn" onClick={handleSubmit}>try payment</button> */}
      {loading && <Loading />}
    </div>
  );
}

function SecondLandingPage() {
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("landing");
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
      className={
        screen === "landing" || screen === "voucher"
          ? "pageWrapper wrapper-bg"
          : "pageWrapper"
      }
    >

      {participant !== null && screen === "result" ? (
        <GoArrowLeft className="anotherCert" onClick={goBack} />
      ) : (
        ""
      )}

      {screen === "landing" && participant == null ? (
        <div className="landing nextLanding">
          {/* <div className="right">
            <p>You can search to verify  bearer's certificate by certificate number:</p>

                <input type="number" placeholder='Enter certificate number' onChange={certNumHandler}/>
                
                <p className='certError'>{certificateError}</p>

                <button onClick={viewCertificate}>Search</button>

            <img src={PHOTOS.discount} alt="" />
          </div> */}

            
          <div className="left">
            {/* <Countdown /> */}
            <h1>
              Claim your voucher!
            </h1>

            <p>
              Provide your voucher number to enjoy 40% discount on all our courses.
            </p>

            <div className="winner-verification">
              <input type="number" name="voucherNumber" id="voucherNumber" 
              placeholder="Enter voucher number" 
              onChange={vouchertNumHandler}
              />
              {voucherError ? <p>{voucherError}</p> : ""}
            </div>

            <button className="voucherBtn" onClick={viewParticipant}>Claim voucher</button>
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

      {screen === "winner" ? (
        <div className="form">
          <span className="tag">Course Registration Form</span>

          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              // onChange={(e) => setFirstName(e.target.value)}
              value={participant.firstName}
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
              // onChange={(e) => setLastName(e.target.value)}
              value={participant.lastName}
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
              // onChange={(e) => setEmail(e.target.value)}
              value={participant.email}
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
              // onChange={(e) => setPhoneNumber(e.target.value)}
              value={participant.phoneNumber}
            />
            {/* {errors.phoneNumber && (
              <span className="voucherError">{errors.phoneNumber}</span>
            )} */}
          </div>

          <div className="field">
            <label htmlFor="voucherNumber">Voucher number</label>
            <input
              type="number"
              name="voucherNumber"
              placeholder="Enter voucher number"
              // onChange={(e) => setVoucherNumber(e.target.value)}
              value={participant.voucherNumber}
            />
            {/* {errors.voucherNumber && (
              <span className="voucherError">{errors.voucherNumber}</span>
            )} */}
          </div>

          <div className="field">
            <label htmlFor="preferredCourse">Preferred course</label>
            <select
              name="preferredCourse"
              id="preferredCourse"
              onChange={handleCourses}
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
                <p className="cost">Cost (40% discount):</p>
              ) : (
                ""
              )}

              {preferredCourse !== "" ? (
                <p className="warning">
                  Note: Voucher expires at midnight, 16th september 2024.
                  Discount will be withdrawn after this period.
                </p>
              ) : (
                ""
              )}

              {courses &&
                courses.map(
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

export { FirstLandingPage, SecondLandingPage };
