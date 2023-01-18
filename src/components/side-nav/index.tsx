import { Link } from "react-router-dom";
import './style.css'


type Props = {
    visible: boolean
    
}
const SideNav = ({visible}: Props) => {
    const visibleClass = visible ? "visible" : "";
   
    return <nav className={`menu ${visibleClass}`}>
        <div className="items">
         <li> <Link className='home' to="/admin-dashboard">Home</Link></li>
         <li> <Link  className='depart' to="/depart">Department</Link></li>
         <li> <Link className='employeet' to="/employee-table">Employee  table</Link></li>
         <li><Link className='fina' to="">Financial</Link></li>
         <li> <Link className='stat' to="">Statistics</Link></li>
         <li> <Link  className='time' to="">Time</Link></li>
         <li> <Link className='help' to="">Help</Link></li>
         <li><Link className='log' to="">Log out</Link>  </li>                
    </div>
    </nav>
}
export default SideNav;