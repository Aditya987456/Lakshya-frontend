import { Outlet } from "react-router-dom";

import { Footer } from "../components/footer";
import { NavbarRecursive } from "../components/Navbar";
//import { TestingRecursion } from "../components/roughdropdown";




export function Layout() {

    return(
        <div>
            
            <NavbarRecursive/>
            <Outlet/>
            <Footer/>
            
        </div>
    )
    
}