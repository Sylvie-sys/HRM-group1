import {useState} from "react";
import SideNav from "../side-nav";
import Header from "../header"
import { Link } from "react-router-dom"
import './depart.css'


const Depart =  () =>{

    return(
      <div className="department">
            <Header/>
        <div>
         <h1>DEPARTMENT LIST</h1>
         <img src="src/assets/search.svg" alt="" />
         <input type="text" placeholder="search something...." />
         </div>
        <table>
        <thead> 
          <tr>
          <td>#</td>
            <td>DEPARTMENTS NAME</td>
            <td>DEPARTMENTS HEAD</td>
            <td>TOTAL EMPLOYEE</td>
            <td>ACTION</td>
          </tr>
          </thead>
            <tbody>
          <tr>
            <td>01</td>
            <td>DESIGN TEAM</td>
            <td>Bayisenge Shaila</td>
            <td>7</td>
          </tr>
          <tr>
            <td>02</td>
            <td>BACKEND TEAM</td>
            <td>Benithe</td>
            <td>10</td>
          </tr>
          <tr>
            <td>01</td>
            <td>FRONTEND TEAM</td>
            <td>Rachel Mutoni</td>
            <td>8</td>
          </tr>
          </tbody>
        </table>
        <div>
            <button>Edit</button>
            <button>+ Add</button>
            <button>Save</button>
        </div>
      </div>
    )
}
export default Depart