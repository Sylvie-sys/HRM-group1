
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import SideNav from "../side-nav";
import './employee.css'

const Employee = () => {

    return(
     <div className="dashb">
        <Header/> 
      <div id="menu">
          <div className="logo">
          <h1 className="dyn">HRMS</h1>
          </div>
       <div className="line"></div>
    </div>
    <div className='line1'></div>
    <div className='interf-section'>
      <div className="interface">
            <div className="navigation">
                <div className="n1">
                    <div className="search">
                        <img src="src/assets/search.svg" alt="" className="search-svg"/>
                        <input type="text" placeholder="search...." />
                    </div>
                </div>
            </div>
                <p className='employee-heading'>Employees</p>
                <button className="add">+  Add</button>            
                <button className="filter">Filter</button>
        </div>
        </div>
        <div className="menu-sgvs">
         <img src="src/assets/home.svg" alt="" className="home-svg"/>
         <img src="src/assets/user.svg" alt="" className="user-svg"/>
         <img src="src/assets/time.svg" alt="" className="time-svg"/>
         <img src="src/assets/plot.svg" alt="" className="plot-svg"/>
         <img src="src/assets/help.svg" alt="" className="help-svg"/>
        <img src="src/assets/logout.svg" alt="" className="logout-svg"/>
        <img src="src/assets/equal.svg" alt="" className="equal-svg"/>
         </div>
        <div className="dashb-tables">
        <div className="dashb-table1">
        <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Bayisenge Shaila</p> 
           <p className="proj-man">Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Design team</p>
            <p className="hiring-date">May 26,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">shailacinte@gmail.com</p>
            <p className="phone-numb">+250 782 275 208</p>
            </div>
            </div>
        </div>
        <div className="dashb-table2">
        <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Kwizera M Solange</p> 
           <p className="proj-man">Assistant Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Design team</p>
            <p className="hiring-date">May 10,2021</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">karigirwarachel@gmail.com</p>
            <p className="phone-numb">+250 781 838 147</p>
            </div>
            </div>
            </div>
            <div className="dashb-table3">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Ingabire Nadine</p> 
           <p className="proj-man">UI/UX Designer</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Design team</p>
            <p className="hiring-date">Oct 22,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">ingabirenadine54@gmail.com</p>
            <p className="phone-numb">+250 782 275 208</p>
            </div>
            </div>
            </div>
            <div className="dashb-table4">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Rachel Mutoni</p> 
           <p className="proj-man">Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Frontend team</p>
            <p className="hiring-date">May 02,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">mutonirachel20@gmail.com</p>
            <p className="phone-numb">+250 790 334 688</p>
            </div>
            </div>
            </div>
            <div className="dashb-table5">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Irumva Mahoro Sylvie</p> 
           <p className="proj-man">Assistant Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Frontend team</p>
            <p className="hiring-date">May 26,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">mahorosisi@gmail.com</p>
            <p className="phone-numb">+250 786 058 038</p>
            </div>
            </div>
            </div>
            <div className="dashb-table6">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Gahonde Isimbi Gloria</p> 
           <p className="proj-man">Supervisor</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Frontend team</p>
            <p className="hiring-date">Jan 06,2021</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">simbigloria@gmail.com</p>
            <p className="phone-numb">+250 789 118 413</p>
            </div>
            </div>
            </div>
            <div className="dashb-table7">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Iradukunda Kevine</p> 
           <p className="proj-man">Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Backend team</p>
            <p className="hiring-date">July 19,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">ikevine@gmail.com</p>
            <p className="phone-numb">+250 782 275 208</p>
            </div>
            </div>
            </div>
            <div className="dashb-table8">
            <img src="src/assets/profile-image.jpeg" alt="" className="first-pic"/>
           <div className="emplo-pm">
           <p className="employee-name">Umutoni Benithe</p> 
           <p className="proj-man">Assistant Project Manager</p>
           </div>
           <div className="other-div">
            <div className="depart-datehire">
            <p className="employee-depart">Departmet</p>
            <p className="dat-hi">Date Hired</p>
            </div>
            <div className="dt-hd">
            <p className="design-team">Design team</p>
            <p className="hiring-date">May 26,2020</p>
            </div>
            <div className="email-phonenumb">
            <p className="employee-email">ubenithe@gmail.com</p>
            <p className="phone-numb">+250 782 275 208</p>
            </div>
            </div>
            </div>
        </div>
      </div>
          )
        }
export default Employee;