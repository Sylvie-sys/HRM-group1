
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./Components/login-page/calling"
import Signup from './routes/signup';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <Signup/>
  }



]);

 function App() {
  return (
    <>
  <RouterProvider router={router} /> 
  </>  
  )
}

export default App
