//react imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages imports
import LandingPade from './pages/landingPage.jsx'
import SignPage from './pages/accounts/signin.jsx'
import SignUpPage from './pages/accounts/signup.jsx'
import ApplicationProfilePage from './pages/workspacePagesCollector/main'
import ErrorBoundary from './pages/errorPage/index.jsx'
import NotesPage from './pages/workspacePagesCollector/notes/index.jsx'
import ProjectMainPage from './pages/workspacePagesCollector/projectMainPage/index.jsx'
import ProjectsListPage from './pages/workspacePagesCollector/projectsList/index.jsx'
import CreateProjectModal from './components/workspaceComponents/projects/createProjectModalWindow/index.jsx'

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
    path: '/signin',
    element: <SignPage />
  },{
    path:'/signup',
    element: <SignUpPage />
  },{
    path: '/app', //or maybe replace with '/app/profile' and '/app' make a simple social network
    element: <ApplicationProfilePage />
  },{
    path: '/app/notes',
    element: <NotesPage />
  },{
    path: '/app/projects',
    element: <ProjectsListPage />
  },{
    path: '/app/projects/projectInfo',
    element: <ProjectMainPage />
  },{
    path: '/tests/modal', // doesn't work at the moment
    element: <CreateProjectModal />
  }
]) // I should relocate this stuff somewhere else... In the nearest future I'm gonna do it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />    
  </StrictMode>,
)
