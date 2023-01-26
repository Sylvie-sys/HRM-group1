import { useState } from "react";
import SideNav from "../side-nav";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    
    return  <header className="header">
    <SideNav visible={showNav} />
   </header>
}
export default Header;