import React, { useEffect, useState } from 'react';
import ExperienceProject from '../components/ProfileComponent/ExperienceProject';
import SkillsEducation from '../components/ProfileComponent/SkillsEducation';
import PersonalInfo from '../components/ProfileComponent/PersonalInfo';
import CircularProgress from '@mui/material/CircularProgress';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="p-3">{children}</div>
      )}
    </div>
  );
}

function Profile() {
  const [value, setValue] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setIsLoading] = useState(true);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const collectDataFromComponents = (data) => {
    // Update the collectedData with data from the specific component
    setCollectedData((prevData) => ({
      ...prevData,
      ...data,
    }));


  };
  const newdata = collectedData;
  useEffect(() => {
    sendDataToServer(newdata);
    
    // console.log(newdata)
  }, [newdata])

  useEffect(() => {
    setIsLoading(true);
    fetchUserData();
  }, []);

  async function fetchUserData(data) {
    const jwtToken = localStorage.getItem('usersdatatoken'); // Get the JWT token from localStorage

    if (!jwtToken) {
      console.error('JWT token not found. User must be logged in.');
      // Handle the case where the user is not logged in
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
        const profiledata2 = await fetchedData.newUser;
        // console.log(fetchedData)
        // console.log(profiledata2)
        setUserData(profiledata2); // Store the user data in state
        setIsLoading(false);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

  }

  async function sendDataToServer(data) {
    const jwtToken = localStorage.getItem('usersdatatoken'); // Get the JWT token from localStorage

    if (!jwtToken) {
      console.error('JWT token not found. User must be logged in.');
      // Handle the case where the user is not logged in
      return;
    }

    await fetch("http://localhost:8000/api/v1/details", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}` // Include the JWT token in the header
      },
      body: JSON.stringify(data) // Convert data to JSON string
    })
      .then(response => {
        if (response) {
          // console.log(response);
          // Handle success
        } else {
          console.error('Error submitting data:', response.statusText);
          // Handle error
        }
      })
      .catch(error => {
        console.error('Error submitting data:', error);
        // Handle error
      });
  }



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
    <div className="w-full bg-gray-100 p-4">
      <div className="border-b border-gray-300 mb-4">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex space-x-4">
            <button
              onClick={() => handleChange(0)}
              className={`${value === 0
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-black'
                } p-2 w-full rounded-lg`}
            >
              Personal Info
            </button>
            <button
              onClick={() => handleChange(1)}
              className={`${value === 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-black'
                } p-2 w-full rounded-lg`}
            >
              Experience / Projects
            </button>
            <button
              onClick={() => handleChange(2)}
              className={`${value === 2
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-black'
                } p-2 w-full rounded-lg`}
            >
              Skills / Education
            </button>
          </div>
        </div>
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className="bg-white p-4 rounded-lg text-black">
          <PersonalInfo collectData={collectDataFromComponents} userData={userData} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="bg-white p-4 rounded-lg text-black">
          <ExperienceProject collectData={collectDataFromComponents} userData={userData} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="bg-white p-4 rounded-lg text-black">
          <SkillsEducation collectData={collectDataFromComponents} userData={userData} />
        </div>
      </CustomTabPanel>

    </div>
      )}
    </>
  );
}

export default Profile;