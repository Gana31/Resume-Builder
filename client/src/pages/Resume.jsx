import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
function Resume() {
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const ResumeValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("http://localhost:8000/api/v1/validator", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    const data = await res.json();

    if (data.status == 401 || !data) {
        setLoading(false);
        history("/");
    } else {
      setLoading(false);
      history("template");
    }
  }
  useEffect(() => {
    ResumeValid();
  }, [])
  const isTemplateActive = window.location.pathname.endsWith("/template");
  const isProfileActive = window.location.pathname.endsWith("/profile");
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
) : (
  <div>
    <div className='flex items-center justify-center gap-7 font-bold w-full py-8'> 
      <NavLink
        to="template"
        className={`text-3xl block py-2 pr-4 pl-3 duration-200 ${isTemplateActive
          ? "text-primary"
          : "text-gray-700"
        } border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`}
      >
        Template
      </NavLink>

      <NavLink
        to="profile"
        className={`text-3xl block py-2 pr-4 pl-3 duration-200 ${isProfileActive ? "text-primary" : "text-gray-700"}
        border-b border-gray-100 hover-bg-gray-50 lg:hover-bg-transparent lg:border-0 hover-text-gray-400 lg-p-0`
        }>
        Profile
      </NavLink>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
)}
    </>
  )
}

export default Resume;