import { Outlet } from "react-router-dom";
import { Navigationbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export function Layout() {

    return(
        <div>
            <Navigationbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
    
}