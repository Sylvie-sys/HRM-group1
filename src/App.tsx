//  import Button from './components/button/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./Components/login-page/calling"
import Signup from './routes/signup';
import PasswordForm from './component/Password';

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
    path: "/password",
    element: <PasswordForm/>
  },
  
]);

 function App() {
  return (
    <>
   {/* <Button/>  */}
    {/* <Components/> 
   <Comps/> */}
  <RouterProvider router={router} /> 
    {/* <div className='inputs'>
    <Input variant="outlined" label="Email" supportText='example@gmail.com' errorText="" onChange={onChange}/>
      <Input variant="filled" label="Password" supportText='Forgot your password?' errorText="" onChange={onChange}/>
      </div>   */}
   
  </>  
  )
}

export default App