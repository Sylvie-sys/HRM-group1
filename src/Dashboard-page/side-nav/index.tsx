import { Link } from "react-router-dom";
import './style.css'


type Props = {
    visible: boolean
    
}
const SideNav = ({visible}: Props) => {
    const visibleClass = visible ? "visible" : "";
   
    return <nav className={`menu ${visibleClass}`}>
        <div className="items">
         <li> <Link to="/admin-dashboard">Home</Link></li>
         <li> <Link to="/department">Department</Link></li>
         <li> <Link to="/employee-table">Employee table</Link></li>
         <li><Link to="">Financial</Link></li>
         <li> <Link to="/Statistics">Statistics</Link></li>
         <li> <Link to="">Time</Link></li>
         <li> <Link to="">Help</Link></li>
         <li><Link to="">Log out</Link>  </li>
         <div className="line2"></div>           
    </div>
    </nav>
}
export default SideNav;