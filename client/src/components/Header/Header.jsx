import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import {RiCheckboxBlankCircleFill,RiMenu3Fill,RiCloseLine,} from "react-icons/ri";
import { LoginContext } from "../ContextProvider/ContextProvider";
import CircularProgress from '@mui/material/CircularProgress';
const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false); 
  const usenavigate = useNavigate();
  
  const LoginPage = () => {
      usenavigate('login');
  };

  const LogoutPage = async () =>{
    setLoading(true)
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("http://localhost:8000/api/v1/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    console.log(data);

    if (data.status == 201) {
        localStorage.removeItem("usersdatatoken");
        setLoginData(false)
        setTimeout(() => {
          window.location.reload();
          setLoading(false)
          usenavigate("/");

        }, 200);
       
    } else {
        console.log("error");
    }
  }
  useEffect(() => {
    if(localStorage.getItem("usersdatatoken")){
      setLoginData(true);
    }
}, [])
  return (
    <div>
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
    <header className="flex items-center justify-between xl:justify-start w-full py-8 px-8 h-[10vh] z-50 border-b-2 border-gray-400">
      <div className="xl:w-1/6 text-center -mt-4">
        <Link to="/" className="text-2xl font-bold relative p-1 bg-white">
          ResumeBuilder<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </Link>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <NavLink to="">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contactus">ContactUs</NavLink>
        <NavLink to="/resume/template">Resume</NavLink>
        
        {logindata ? <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl" onClick={LogoutPage}>
        Logout</button> : 
        <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl" onClick={LoginPage}>
        Login</button>}
        
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>)}
    </div>
  );
};

export default Header;
