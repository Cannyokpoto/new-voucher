import React, {useState} from 'react';
import './LandingPage.css';
import PHOTOS from '../../assets/images';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { GoArrowLeft } from "react-icons/go";


function LandingPage() {
    const [loading, setLoading] = useState(false)
    const [screen, setScreen] = useState('landing')
    const handleScreen = () =>{
        setScreen('result')
    }

  //To view a single customer 

  const [student, setStudent] = useState(null);
  console.warn("student:", student)
  
  const IssuedOn = student ? student.issued_date.slice(0, 10).split('-') : "";
  

  const [date, setDate] = useState([]);

  const [certificateError, setCertificateError] = useState('');
  console.warn("certificateError:", certificateError)

  const [certificateNumber, setCertificateNumber] = useState('');
  const certNumHandler = (event) =>{
    setCertificateNumber(event.target.value)
    setCertificateError('')
  }
  console.warn("certificateNumber:", certificateNumber)


  async function viewCertificate(){
    const url = `https://server.handiwork.com.ng/api/certificates/number/${certificateNumber}`

    if(certificateNumber.length > 0 && certificateNumber.length === 6){

      try {  
        setLoading(true)
        const response = await axios.get(url)
  
        setStudent(response.data.certificate);
        handleScreen()
        
        
    }catch(dupError) {
        console.warn("dupError:", dupError.response.data.error)
        setCertificateError(dupError.response.data.error)
    }finally{
      setLoading(false)
    }
      
  }
  else if(certificateNumber.length > 0 && certificateNumber.length < 6){
    setCertificateError('Invalid certificate number.');
  }

  else if(certificateNumber.length > 0 && certificateNumber.length > 6){
    setCertificateError('Invalid certificate number.');
  }
  
  
  else if(certificateNumber ===''){
    setCertificateError('Please provide certificate number.');
  }
  
}

const goBack = ()=>{
  setScreen('landing');
  setStudent(null);
}

    
  return (
    <div className={screen === "landing" ? 'pageWrapper wrapper-bg' : 'pageWrapper'}>
      <header className='header'>
        <img src={PHOTOS.LOGO} alt="" />
      </header>

      {student !==null && screen === 'result' ?
        <GoArrowLeft className='anotherCert' onClick={goBack}/>
        : ""}

        {screen === 'landing' && student ==null ?
        <div className="landing">
            <div className="right">
                {/* <p>You can search to verify  bearer's certificate by certificate number:</p>

                <input type="number" placeholder='Enter certificate number' onChange={certNumHandler}/>
                
                <p className='certError'>{certificateError}</p>

                <button onClick={viewCertificate}>Search</button> */}

                <img src={PHOTOS.discount} alt="" />
            </div>
            
            <div className="left">
                <h1>Grab <span>40% discount</span> on all our courses.
                </h1>

                <p>Register now with &#8358;10,000 and secure a voucher to enjoy 40% discount on all our courses. Voucher expires at 12am on 1st october 2024.</p>

                <button className='voucherBtn'>Claim voucher</button>
            </div>

            
            {/* { loading ? <Loading /> : "" } */}
        </div> : ""}

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
      
    </div>
  )
}

export default LandingPage
