import { Link } from "react-router-dom";

import './employee.css'
const Employee = () => {



    return(
              <div>
                 <div id="menu">
          <div className="logo">
          <h1 className="dyn">HRMS</h1>
          </div>
          <div className="items">
          <li className='home'><Link  to="">Home</Link></li>
       <li className='depart'><Link to="">Department</Link></li>
        <li className='depart'><Link to="/employee-table">Employee  table</Link></li>
       <li className='fina'><Link to="">Financial</Link></li>
       <li className='stat'><Link to="">Statistics</Link></li>
       <li className='time'><Link to="">Time</Link></li>
       <li className='help'><Link to="">Help</Link></li>
       <li className='log'><Link to="">Log out</Link></li>                   
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
                <p className='i-name'>Employee</p>
        </div>
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div className='box2'>
      <h3 className='num'></h3>
      <p className='pm'></p>
      <p className='cand'></p>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div className='box3'>
      <h3 className='numb'></h3>
      <p className='cont'></p>
      <p className='candi'></p>
    </div>
  </div>
  
  <div className="val-box3">
    <i></i>
    <div  className='box4'>
      <h3 className='numb'></h3>
      <p className='java'></p>
      <p className='candid'></p>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div className='box1'>
      <h3 className='number'></h3>
      <p className='uiux'></p>
      <p className='candidates'></p>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
    </div>
  </div>
  <div   className='value'>
  <div className="val-box5">
    <i></i>
    <div>
      <h3 className='remind'></h3>
      {/* <img src="src/assets/search.svg" alt="" className='search2'/> */}
      <div className=''>
        <p className=''></p>
        <p className=''></p>
      </div>
      <div className='time'>
      <div className='interview'>
        <p className='hours'></p>
        <p  className='interv'></p>
      </div>
      <div className='senior'>
        <p className='hours'></p>
        <p className='interv'></p>
      </div>
      <div className='meeting'>
        <p className='hours'></p>
        <p className='interv'></p>
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
      <p></p>
  </div>
  </div>
    </div> 
    </div>
              </div>
          )
}
export default Employee