
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import LoginPage from "./Components/login-page/calling"
import Signup from './routes/signup/signup';
// import Dashboard from './Dashboard-page/admin-dashboard/admin';
import Employee from './Dashboard-page/employee-table/employee';
import Depart from './Dashboard-page/department/depart';
import Dashboard from './Dashboard-page/admin-dashboard/admin';

import { Component } from 'react';
import Components from './routes/login-page/login';
import PasswordForm from './component/Password';

import Data from './Dashboard-page/STATISTICS/statistics';
import Left from './component/nana/nana';
import  Finance  from './Dashboard-page/Finance/finance';
import Time from './Dashboard-page/time/time';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Left/>
  },
 
  {
    path: "/login",
    element: <Components/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard/>
  },
  {
    path: "/employee-table",
    element: <Employee/>
  },
  {
    path: "/department",
    element: <Depart/>
  },
  {
    path: "/password",
    element: <PasswordForm />
  },
{
    path:"/STATISTICS",
   element:<Data/>
  },

{
  path:"/finance",
  element:<Finance/>
},
{
  path:"/time",
  element:<Time/>
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
