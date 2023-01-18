//  import Button from './components/button/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./Components/login-page/calling"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  }



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