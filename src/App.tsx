//  import Button from './components/button/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Components from './components/login-page/calling'
import  Comps from './components/signup-page/calling'

const router = createBrowserRouter([
  {
    path: "/login",
element: <Components/>
 },
 {
path: "/signup",
element: <Comps/>
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