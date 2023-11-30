import React, { useEffect, useState } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import CircularProgress from '@mui/material/CircularProgress';
import Template4 from './Template4';


const MainTemplate = ({ selectedTemplate }) => {
  const [user, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const jwtToken = localStorage.getItem('usersdatatoken');

    if (!jwtToken) {
      console.error('JWT token not found. User must be logged in.');
      // Handle the case where the user is not logged in
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/userDataFetch", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      });

      if (response.ok) {
        const fetchedData = await response.json();
        const profiledata2 = fetchedData.newUser;
        // console.log(profiledata2); // Debugging
        setUserData(profiledata2);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  }

  let selectedComponent = null;

  if (loading) {
    selectedComponent = (<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <CircularProgress />
      </div>);
  } else {
    switch (selectedTemplate) {
      case 1:
        selectedComponent = <Template1 user={user} />;
        break;
      case 2:
        selectedComponent = <Template2 user={user} />;
        break;
      case 3:
        selectedComponent = <Template3 user={user} />;
        break;
        case 4:
            selectedComponent = <Template4 user={user} />;
            break;
      default:
        selectedComponent = <div>Please select a template.</div>;
    }
  }

  return <div>{selectedComponent}</div>;
};

export default MainTemplate;
