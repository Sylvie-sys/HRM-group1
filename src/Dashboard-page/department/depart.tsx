import Header from "../header"
import './depart.css'


const Depart =  () =>{

    return(
      <div className="department">
            <Header/>
        <div>
          <h2 className="hrms-dashb">HRMS</h2>
         <h1 className="depar-list">DEPARTMENT LIST</h1>
        <div className="searchinputsvg">
         <img src="src/assets/search.svg" alt="" className="svgsearch"/>
         <input type="text" placeholder="search something............." className="searchinput"/>
         </div>
         </div>
        <table>
        <thead> 
          <tr>
          <td className="first-ln">#</td>
            <td>DEPARTMENTS NAME</td>
            <td>DEPARTMENTS HEAD</td>
            <td>TOTAL EMPLOYEE</td>
            <td>ACTION</td>
          </tr>
          </thead>
            <tbody>
          <tr>
            <td className="first-line">01</td>
            <td>DESIGN TEAM</td>
            <td>Bayisenge Shaila</td>
            <td>7</td>
          </tr>
          <tr>
            <td className="first-line">02</td>
            <td>BACKEND TEAM</td>
            <td>Benithe</td>
            <td>10</td>
          </tr>
          <tr>
            <td className="first-line">01</td>
            <td>FRONTEND TEAM</td>
            <td>Rachel Mutoni</td>
            <td>8</td>
          </tr>
          </tbody>
        </table>
        <div className="three-buttons">
            <button className="editbtn">Edit</button>
            <button className="addbtn">+ Add</button>
            <button className="savebtn">Save</button>
        </div>
        <div className="menu-sgvs">
         <img src="src/assets/home.svg" alt="" className="homee-svg"/>
         <img src="src/assets/user.svg" alt="" className="user-svg"/>
         <img src="src/assets/time.svg" alt="" className="time-svg"/>
         <img src="src/assets/plot.svg" alt="" className="plot-svg"/>
         <img src="src/assets/help.svg" alt="" className="help-svg"/>
        <img src="src/assets/logout.svg" alt="" className="logout-svg"/>
        <img src="src/assets/equal.svg" alt="" className="equal-svg"/>
         </div>
      </div>
    )
}
export default Depart