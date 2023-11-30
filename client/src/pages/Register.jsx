import React, { useState ,useEffect, useContext} from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import "./mix.css"
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../components/ContextProvider/ContextProvider';


function Register() {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const { logindata, setLoginData } = useContext(LoginContext);
  const navigate = useNavigate();


    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();
    
        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else{
          try {
            const response = await axios.post("http://localhost:8000/api/v1/register", {
              fname, email, password, cpassword
            });
    
            if (response.data.status === 201) {
              toast.success("Registration Successfully done 😃!", {
                position: "top-center"
              });
      
              // Delay the navigation by 2 seconds (adjust the timeout as needed)
              setTimeout(() => {
                navigate('/login');
              }, 2000);
      
              setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            } else {
              toast.error("Registration failed. Please check your data.", {
                position: "top-center"
              });
            }
          } catch (error) {
            console.error(error);
            toast.error("An error occurred while registering.", {
              position: "top-center"
            });
          }
        }
      }

      useEffect(() => {
        if(localStorage.getItem("usersdatatoken")){
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigate("/");

            }, 200);
            
          }
          setTimeout(() => {
            setLoading(false);
          }, 200);
    }, [])

  return (
    <>
    {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <CircularProgress />
        </div>
      )  : (

            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Resume Builder to manage <br />
                            your Resume! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
      )}
        </>
  )
}

export default Register