import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import SideNav from "../side-nav";
import './dashboard.css'
const Dashboard = () => {

    return(
              <div>
                <Header/> 
                 <div id="menu">
          <div className="logo">
          <h1 className="dyn">HRMS</h1>
          </div>
       
    </div>
    <div className='line1'></div>
    <div className='interf-section'>
      <div className="interface">
            <div className="navigation">
                <div className="n1">
                    <div className="search">
                        <img src="src/assets/search.svg" alt="" />
                        <input type="text" placeholder="search...." />
                    </div>
                </div>
                <div className="profile">
                </div>
            </div>
                <p className='i-name'>You need to hire</p>
        </div>
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div className='box2'>
      <h3 className='num'>2</h3>
      <p className='pm'>Project manager</p>
      <p className='cand'>10 candidates</p>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div className='box3'>
      <h3 className='numb'>3</h3>
      <p className='cont'>Content manager</p>
      <p className='candi'>5 candidates</p>
    </div>
  </div>
  
  <div className="val-box3">
    <i></i>
    <div  className='box4'>
      <h3 className='numb'>10</h3>
      <p className='java'>JavaScript Developer</p>
      <p className='candid'>20 candidates</p>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div className='box1'>
      <h3 className='number'>1</h3>
      <p className='uiux'>Senior UI/UX design</p>
      <p className='candidates'>4 candidates</p>
      <div className='circle2'></div>
      <div className='circle1'></div>
      <div className='circle4'></div>
      <div className='circle3'></div>
    </div>
  </div>
  <div   className='value'>
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
        <p className='hours'>08:00 - 11:00 Am</p>
        <p  className='interv'>Interview with candidates</p>
      </div>
      <div className='senior'>
        <p className='hours'>03:10 - 4:40 Pm</p>
        <p className='interv'>Interview with candidates</p>
      </div>
      <div className='meeting'>
        <p className='hours'>02:00 - 03:00 Pm</p>
        <p className='interv'>Interview with candidates</p>
      </div>
      </div>
    </div>
  </div>
  <div className="val-box6">
    <i></i>
    <div className='box9'>
      <h3 className='numb'></h3>
      <p></p>
      <p></p>
    </div>
  </div>
  <div className="val-box7">
      <p>Chart showing percentage <br /> of employee</p>
  </div>
  </div>
    </div> 
    </div>
              </div>
          )
}
export default Dashboard