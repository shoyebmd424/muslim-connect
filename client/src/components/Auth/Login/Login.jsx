import React, { useRef, useState } from "react";
import "./Login.css";
import login from "../../../assets/auth/login.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CiCircleCheck } from "react-icons/ci";
import Cookies from "js-cookie";

import {
  loginService,
  sendOtpService,
  setPasswordService,
  verifyOtpService,
} from "../../../ApiService/Auth/Auth";
import {
  FaArrowLeft,
  FaArrowLeftLong,
  FaArrowRight,
  FaRegEnvelope,
} from "react-icons/fa6";
import { useAuth } from "../../../context/AuthContext";
import Slider from "react-slick";

const Login = () => {
  const [user, setUser] = useState(null);
  //  all forget ,check-email, otp, setPass, verified
  const [step, setStep] = useState("login");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handlechange = (e) => {
    const { name, files, value } = e.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (step === "login") {
      loginHanlde();
    }
    if (step === "forget") {
      forgetHandle();
    }
    if (step === "otp") {
      verifyOtphandle();
    }
    if (step === "setPass") {
      setPasswordHandle();
    }
  };
  // otp form
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputs = Array.from({ length: 6 });
  const inputRefs = useRef(otpInputs.map(() => React.createRef()));
  const handleInputChange = (index, e) => {
    const value = e.target.value;
    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });
    //  move to next
    if (value && index < otpInputs.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };
  //  handlers
  // login
  const loginHanlde = async () => {
    try {
      const { data } = await loginService(user);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      console.log(data);
      toast.success(data);
      setAuth({ ...auth, user: data?.user, token: data?.token });
      // Cookie.set("auth", JSON.stringify(data), { expires: 1 / 24 });
      Cookies.set("auth", JSON.stringify(data));
      if (data?.user?.role === "STUDENT") {
        navigate("/student");
      }
      if (data?.user?.role === "CONSULTANT") {
        navigate("/consultant");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const forgetHandle = async () => {
    try {
      const { data } = await sendOtpService(user);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      setStep("check-email");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const verifyOtphandle = async () => {
    try {
      let finalOtp = "";
      otp.forEach((val) => {
        finalOtp += val;
      });
      console.log(finalOtp);
      const { data } = await verifyOtpService({
        otp: finalOtp,
        email: user?.email,
      });
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      setStep("setPass");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const setPasswordHandle = async () => {
    try {
      const { data } = await setPasswordService(user);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      setStep("verified");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="login d-flex ">
      <div className="login-left-side order-2 w-100">
        <div className="login-left">
          {step === "login" && (
            <>
              <h3>Sign In</h3>
              <p>Welcome Back! Please enter your credentials to Login</p>
            </>
          )}
          {step === "forget" && (
            <>
              <div className="text-center my-2">
                <span className="border p-2 rounded">
                  <FaRegEnvelope size={20} className="text-muted" />
                </span>
              </div>
              <h4 className="text-center mt-3 fw-bold">
                {" "}
                Enter existing Email
              </h4>
              <p>We went a verification Code to email@gmail.com</p>
            </>
          )}
          {step === "check-email" && (
            <>
              <div className="text-center my-2">
                <span className="border p-2 rounded">
                  <FaRegEnvelope size={20} className="text-muted" />
                </span>
              </div>
              <h4 className="text-center mt-3 fw-bold">Enter existing Email</h4>
              <p>We went a verification Code to email@gmail.com</p>
            </>
          )}
          {step === "otp" && (
            <>
              <div className="text-center my-2">
                <span className="border p-2 rounded">
                  <FaRegEnvelope size={20} className="text-muted" />
                </span>
              </div>
              <h4 className="text-center mt-3 fw-bold">
                {" "}
                Enter Verification Code
              </h4>
              <p className="text-muted">
                Enter a code that you have received on muhammadhaseeb@gmail.com
              </p>
            </>
          )}
          {step === "setPass" && (
            <>
              <h3>Reset Password</h3>
              <p>Please enter your new Password to reset your password.</p>
            </>
          )}
          {step === "verified" && (
            <>
              <div className="text-center my-2">
                <span className="border p-2 rounded">
                  <CiCircleCheck size={20} className="text-muted" />
                </span>
              </div>
              <h4 className="text-center mt-3 fw-bold"> Email Verified</h4>
              <p>
                Your password has been successfully reset. Click below to log in
                magically.
              </p>
            </>
          )}
          <form action="" className="w-100" onSubmit={handlesubmit}>
            <div
              className="d-flex flex-column login-form w-100"
              style={{ rowGap: "10px", padding: "8px 0" }}
            >
              {/* otp  */}
              {step === "otp" && (
                <div className="w-100 otp-container d-flex justify-content-center gap-2">
                  {otpInputs.map((_, index) => (
                    <>
                      {index > 3 && (
                        <input
                          key={index}
                          ref={inputRefs.current[index]}
                          type="text"
                          maxLength="1"
                          style={{
                            outline: "none",
                            width: "54px",
                            border: !otp[index] ? "2px solid gray" : "",
                          }}
                          className=" rounded"
                          value={otp[index]}
                          placeholder="0"
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      )}
                      {index === 3 && (
                        <span className="my-auto fw-bold dash border-0">-</span>
                      )}
                      {index <= 3 && (
                        <input
                          key={index}
                          style={{
                            outline: "none",
                            width: "54px",
                            border: !otp[index] ? "2px solid gray" : "",
                          }}
                          ref={inputRefs.current[index]}
                          type="text"
                          className=" rounded"
                          maxLength="1"
                          placeholder="0"
                          value={otp[index]}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      )}
                    </>
                  ))}
                </div>
              )}
              {/* end otp */}
              {(step === "login" || step === "forget") && (
                <div className="d-flex flex-column w-100">
                  <label htmlFor="Email">Email*</label>
                  <input
                    onChange={handlechange}
                    name="email"
                    type="Email"
                    id="Email"
                    className="login-input"
                    placeholder="Enter your Email"
                  />
                </div>
              )}
              {(step === "login" || step === "setPass") && (
                <div className="d-flex flex-column w-100">
                  <label htmlFor="password">Password*</label>
                  <input
                    onChange={handlechange}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*****"
                    className="login-input"
                  />
                  {step === "login" && (
                    <span
                      onClick={() => setStep("forget")}
                      style={{ cursor: "pointer" }}
                      className="text-purple my-2"
                    >
                      Forget Passoword
                    </span>
                  )}
                </div>
              )}
              {step === "setPass" && (
                <div className="d-flex flex-column w-100">
                  <label htmlFor="cnfPassword">Confirm Password*</label>
                  <input
                    onChange={handlechange}
                    type="password"
                    id="cnfPassword"
                    name="cnfPassword"
                    placeholder="*****"
                    className="login-input"
                  />
                </div>
              )}

              {step === "login" && (
                <div className="d-flex gap-3 w-100">
                  <input
                    onChange={handlechange}
                    style={{ width: "1rem", cursor: "pointer" }}
                    type="checkbox"
                    name="remember"
                    id=""
                  />
                  <label htmlFor="remember">Remember for 30 days*</label>
                </div>
              )}
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column w-100">
                {step === "login" && (
                  <button
                    type="submit"
                    className="btn btn-signup text-capitalize"
                  >
                    Login
                  </button>
                )}
                {step === "forget" && (
                  <button
                    type="submit"
                    className="btn btn-signup text-capitalize"
                  >
                    Submit
                  </button>
                )}
                {step === "check-email" && (
                  <button
                    onClick={() => setStep("otp")}
                    className="btn btn-signup text-capitalize"
                  >
                    Enter Code
                  </button>
                )}
                {step === "otp" && (
                  <button
                    type="submit"
                    className="btn btn-signup my-2 text-capitalize"
                  >
                    Verify Email
                  </button>
                )}
                {step === "setPass" && (
                  <button
                    type="submit"
                    className="btn btn-signup my-2 text-capitalize"
                  >
                    Reset Password
                  </button>
                )}
                {step === "verified" && (
                  <button
                    onClick={() => loginHanlde()}
                    type="submit"
                    className="btn btn-signup my-2 text-capitalize"
                  >
                    Continue
                  </button>
                )}
              </div>
              {step === "login" && (
                <>
                  <div className="d-flex flex-column w-100">
                    <button className="btn btn-google">
                      Sign Up with Google
                    </button>
                  </div>
                  <div className="text-center">
                    Don't hanve any account?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-none text-purple fw-bold"
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
              {(step === "forget" ||
                step === "check-email" ||
                step === "otp" ||
                step === "setPass" ||
                step === "verified") && (
                <>
                  <div className="text-center">
                    <span>Don't receive the email?</span>{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      className="fw-bold text-purple"
                    >
                      Click to resend
                    </span>
                  </div>
                  <div className="text-center">
                    <span>
                      <FaArrowLeftLong /> Back to{" "}
                    </span>{" "}
                    {(step === "forget" ||
                      step === "check-email" ||
                      step === "otp" ||
                      step === "setPass" ||
                      step === "verified") && (
                      <span
                        onClick={() => setStep("login")}
                        style={{ cursor: "pointer" }}
                        className="fw-bold text-purple"
                      >
                        Login
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="login-right-side order-1 w-100">
        {/* <ConsultantSay /> */}
        <div className="w-100 position-relative h-100" style={{ zIndex: "1" }}>
          <img
            src={login}
            className="consultant-img w-100 h-100"
            alt="register"
          />
          <div
            className="position-absolute d-flex flex-column"
            style={{
              inset: "0",
              borderRadius: " 0px 80px 80px 0px",
              background: "#00000070",
            }}
          >
            <Consult />
          </div>
          {/* <div
            className="position-absolute d-flex  "
            style={{
              inset: "0",
              borderRadius: " 0px 80px 80px 0px",
              backgroundColor: "#00000070",
            }}
          >
            <div
              className={`slide consult-said mt-auto 
                }  `}
            >
              <div>
                <p>
                  “As a consultant on Muslim Connect, I have had the privilege
                  of connecting with individuals seeking guidance and knowledge
                  in various aspects of Islamic life. I can confidently say that
                  this platform has been instrumental in expanding my reach and
                  impact as a religious expert.”
                </p>
                <div className="">
                  <h3 className="fw-bold">Mohammed Useman</h3>
                </div>
                <div className="d-flex flex-column ">
                  <span className="fw-bold">Finance consultant</span>
                  <small className="text-light">Indonesian</small>
                </div>
              </div>
              <div className="d-flex justify-content-between ms-auto">
                <div className="d-flex gap-4" style={{ fontWeight: "lighter" }}>
                  <span
                    className="p-2 border rounded-circle"
                    style={{ cursor: "pointer" }}
                  >
                    <FaArrowLeft size={30} />
                  </span>
                  <span
                    className="p-2 border rounded-circle"
                    style={{ cursor: "pointer" }}
                  >
                    <FaArrowRight size={30} />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

export const Consult = () => {
  const SliderRef = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider
        ref={SliderRef}
        {...settings}
        className="w-100  d-flex flex-column mt-auto "
      >
        {data?.map((val, key) => (
          <div className="text-white p-4">
            <p>{val?.message}</p>
            <div className="">
              <h3 className="fw-bold">{val?.name}</h3>
            </div>
            <div className="d-flex flex-column ">
              <span className="fw-bold">{val?.desig}</span>
              <small className="text-light">{val?.location}</small>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="d-flex gap-4 text-white justify-content-end pt-0 pb-4 p-5"
        style={{ fontWeight: "lighter" }}
      >
        <button
          onClick={() => SliderRef?.current?.slickPrev()}
          className="p-2 bg-transparent border rounded-circle"
          style={{ cursor: "pointer" }}
        >
          <FaArrowLeft size={30} />
        </button>
        <button
          onClick={() => SliderRef?.current?.slickNext()}
          className="p-2 bg-transparent border rounded-circle"
          style={{ cursor: "pointer" }}
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </>
  );
};

const data = [
  {
    message:
      "“As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.”",
    name: "Mohammad Useman",
    desig: "Finance consultant",
    location: "Indonesian",
  },
  {
    message:
      "“As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.”",
    name: "Mohammad Useman",
    desig: "Finance consultant",
    location: "Indonesian",
  },
  {
    message:
      "“As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.”",
    name: "Mohammad Useman",
    desig: "Finance consultant",
    location: "Indonesian",
  },
  {
    message:
      "“As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.”",
    name: "Mohammad Useman",
    desig: "Finance consultant",
    location: "Indonesian",
  },
];
