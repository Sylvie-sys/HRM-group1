

import './nana.css'
import vector from "../../component/nana/img/vector.png" 

const Left = () => {
  return <div className='All'>
        <header className='app-bar'>
          <div className='logo1'>
        <img src={vector} alt="" className='vector' />
        <h1>HRMS</h1>
        </div>
        <div className='icon'> 
        <select className='admin-select' defaultValue={30}> 
            <option value={1}>Admin Login</option>
            <option value={2}>Employee Login</option>
            <option value={2}>Exit</option>
          </select>
          </div>
        </header>
        <div className='batton'>
          {/* <img src="src/assets/circle.sv" alt="" /> */}
          
        <button className='ba1'> admin registration</button><br />
        <button className='ba1'> Employee Registration</button><br />
        <button className='ba1'>More details</button>
      
      </div>

      
<footer className='bottom'>
        <a href="" className='help'> Help?</a>
        <div className='containerbottom'>
          <div className='bottom-hr'>
          <img src="src/assets/copyright.svg" alt="" className='adminsvg' />
          <p className='hrms'> hrms-team 2022</p>
          </div>
        </div>
        </footer>



      </div>
      
  
}

export default Left;