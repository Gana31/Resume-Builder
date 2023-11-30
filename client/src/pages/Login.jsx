import React, { useState , useEffect, useContext} from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import "./mix.css"
import { LoginContext } from '../components/ContextProvider/ContextProvider';

function Login() {
  const [passShow, setPassShow] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const [loading, setLoading] = useState(true); 
  const [inpval, setInpval] = useState({
      email: "",
      password: "",
  });

  const history = useNavigate();
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


  const loginuser = async(e) => {
      e.preventDefault();

      const { email, password } = inpval;

      if (email === "") {
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
      } else {
          // console.log("user login succesfully done");


          const data = await fetch("http://localhost:8000/api/v1/login",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                   email, password
              })
          });

          const res = await data.json();
          //  console.log(res);

          if(res.status === 201){
              localStorage.setItem("usersdatatoken",res.result.token);
              setTimeout(() => {
                setLoginData(true);
                history("/resume")
                setInpval({...inpval,email:"",password:""});
              }, 200);
             
          } else {
            // Invalid details, show an error message
            toast.error(res.error, {
              position: "top-center",
            });
          } setLoading(false);
      }
  }
  useEffect(() => {
    if(localStorage.getItem("usersdatatoken")){
      setLoading(true)
      setTimeout(() => {
        history("/");
        setLoading(false)
      },200);
    }
    setTimeout(() => {
      setLoading(false)
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
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className='btn' onClick={loginuser}>Login</button>
            <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
          </form>
          <ToastContainer />
        </div>
      </section>
            )}
    </>
);
}

export default Login