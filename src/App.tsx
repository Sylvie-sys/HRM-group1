//  import Button from './components/button/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./routes/login-page/login"
import Signup from './routes/signup/signup';
import PasswordForm from './component/Password';
import { Department } from './Departments/department';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <Signup/>
  },
   {
     path: "/department",
     element: <Department/>
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