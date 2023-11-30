import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './pages/Hero.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.Jsx'
import ContactUs from './pages/ContactUs.jsx'
import Template from './pages/Template.jsx'
import Profile from './pages/Profile.jsx'
import ContextProvider from './components/ContextProvider/ContextProvider.jsx'
import Template1 from './pages/Template/Template1.jsx'
import Template2 from './pages/Template/Template2.jsx'
import Template3 from './pages/Template/Template3.jsx'
import MainTemplate from './pages/Template/MainTemplate.jsx'
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Hero />
      },
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'resume',
        element: <Resume />,
        children: [
          {
            path: 'profile',
            element: <Profile />
          }, 
          {
            path: 'template',
            element: <Template />,
            children:[
              {
                path : 'main',
                element:<MainTemplate/>,
               },  
                  {
                    path: 'cv1',
                    element: <Template1 />
                  },
                  {
                    path: 'cv2',
                    element: <Template2 />
                  },
                  {
                    path: 'cv3',
                    element: <Template3 />
                  }
            ]
          },
        ]
      },
      {
        path: 'aboutus',
        element: <About />
      },
      {
        path: 'contactus',
        element: <ContactUs />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
    <RouterProvider router={router}>
    <App />
      </RouterProvider>
  </React.StrictMode>,
  </ContextProvider>
)
