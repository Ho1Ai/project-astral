//react imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages imports
import LandingPade from './pages/landingPage.jsx'
import LoginPage from './pages/accounts/login.jsx'
import SignUpPage from './pages/accounts/signup.jsx'
import ApplicationProfilePage from './pages/workspacePagesCollector/main'
import ErrorBoundary from './pages/errorPage/index.jsx'
import NotesPage from './pages/workspacePagesCollector/notes/index.jsx'
import ProjectMainPage from './pages/workspacePagesCollector/projectMainPage/index.jsx'
import ProjectsListPage from './pages/workspacePagesCollector/projectsList/index.jsx'

//css imports
import './css/index.css'

const routes = createBrowserRouter([
  {
    path: '/*',
    element: <ErrorBoundary />
  },{
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
    element: <ApplicationProfilePage />
  },{
    path: '/indev/notes',
    element: <NotesPage />
  },{
    path: '/indev/projects',
    element: <ProjectsListPage />
  },{
    path: '/indev/projects/projectInfo',
    element: <ProjectMainPage />
  }
]) // I should relocate this stuff somewhere else... In the nearest future I'm gonna do it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />    
  </StrictMode>,
)
