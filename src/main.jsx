//react imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages imports
import LandingPade from './pages/landingPage.jsx'
import LoginPage from './pages/accounts/login.jsx'
import SignUpPage from './pages/accounts/signup.jsx'
import ApplicationMainPage from './pages/workspacePagesCollector/main'

//css imports
import './css/index.css'

const routes = createBrowserRouter([
  {
    path:`/`,
    element: <LandingPade />,
  },{
    path: '/login',
    element: <LoginPage />
  },{
    path:'/signup',
    element: <SignUpPage />
  },{
    path: '/indev',
    element: <ApplicationMainPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />    
  </StrictMode>,
)
