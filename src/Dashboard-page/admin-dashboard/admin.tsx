
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import SideNav from "../side-nav";
import './admin.css'
import Data from "../STATISTICS/statistics"
const Dashboard = () => {

    return(
     <div className="dashb">
        <Header/> 
        <Data/>
      <div id="menu">
          <div className="logo"> <img src="src/assets/hrmslogo.svg" alt="" className="logo-svg"/>
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
                    <div className="language-selector">
                       <select className="lang-sele" defaultValue={30}>
                       <option value={1}>Language</option>
                       <option value={2}>English</option>
                       <option value={2}>French</option>
                       <option value={3}>Kinyarwanda</option>
                       </select>
                    </div>
                    </div>
                </div>
            </div>
                <p className='i-name'>You need to hire</p>
        </div>
        <div className="values">
        <div className="dashb-boxes">
           <div className="dashb-box1">
           <h3 className='num'>2</h3>
           <div className="pm-cand">
           <p className='pm'>Project manager</p>
           <p className='cand'>10 candidates</p>
           </div>
           <div className='circle1'></div>
           </div>
           <div className="dashb-box2">
           <h3 className='num'>1</h3>
           <div className="pm-cand">
           <p className='pm'>Senior UI/UX design</p>
           <p className='cand'>4 candidates</p>
           </div>
           <div className='circle1'></div>
           </div>
           <div className="dashb-box3">
           <h3 className='num'>3</h3>
           <div className="pm-cand">
           <p className='pm'>Content manager</p>
           <p className='cand'>5 candidates</p>
           </div>
           <div className='circle2'></div>
           </div>
           <div className="dashb-box4">
           <h3 className='num'>10</h3>
           <div className="pm-cand">
           <p className='pm'>JavaScript Developer</p>
           <p className='cand'>20 candidates</p>
           </div>
           <div className='circle2'></div>
           </div>
        </div>
  <div className="val-box5">
    <i></i>
    <div>
      <h3 className='remind'>Reminder</h3>
      <img src="src/assets/search.svg" alt="" className='search2'/>
      <div className='box'>
        <p className='today'>Today</p>
        <p className='completed'>Completed</p>
      </div>
      <div className='time'>
      <div className='interview'>
      <img src="src/assets/time.svg" alt="" className="time1-svg"/>
        <p className='hours'>08:00 - 11:00 Am</p>
        <p  className='interv'>Interview with candidates</p>
      </div>
      <div className='senior'>
      <img src="src/assets/time.svg" alt="" className="time2-svg"/>
        <p className='hours'>03:10 - 4:40 Pm</p>
        <p className='interv'>Interview with candidates</p>
      </div>
      <div className='meeting'>
      <img src="src/assets/time.svg" alt="" className="time3-svg"/>
        <p className='hours'>02:00 - 03:00 Pm</p>
        <p className='interv'>Interview with candidates</p>
      </div>
      </div>
    </div>
  </div>
  <div className="val-box6">
    <div className='box9'>
    <img src="src/assets/notification.svg" alt="" className="noti"/>
    <img src="src/assets/note.svg" alt="" className="note"/>
    <img src="src/assets/folder.svg" alt="" className="folder"/>
    <img src="src/assets/settigs.svg" alt="" className="set"/>
    </div>
  </div>
  <div className="val-box7">
      <p className="chart">Chart showing percentage <br /> of employee</p>
    <img src="src/assets/chartgraph.svg" alt="" className="chartgraph-svg"/>
    <div className="percentages">
    <p className="twenty">25%</p>
    <p className="seventy">75%</p>
    </div>
      <div className="fe-male">
      <p className="male">Male</p>
      <p className="female">Female</p>
      </div>
  </div>
    </div> 
    </div>
         <div className="menu-sgvs">
         <img src="src/assets/homee.svg" alt="" className="hom-svg"/>
         <img src="src/assets/departmet.svg" alt="" className="user-svg"/>
         <img src="src/assets/time.svg" alt="" className="time-svg"/>
         <img src="src/assets/financial.svg" alt="" className="financial-svg"/>
        <img src="src/assets/employee.svg" alt="" className="plot-svg"/>
         <img src="src/assets/help.svg" alt="" className="help-svg"/>
       
        <a href="/" >  <img src="src/assets/logout.svg" alt="" className="logout-svg" /> </a>
     <img src="src/assets/equal.svg" alt="" className="equal-svg"/> 
         </div>
              </div>
          )
}
export default Dashboard