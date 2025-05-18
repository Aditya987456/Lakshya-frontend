import { Outlet } from "react-router-dom";

import { Footer } from "../components/footer";
import { NavbarRecursive } from "../components/Navbar";
//import { TestingRecursion } from "../components/roughdropdown";




export function Layout() {

    return(
        <div className="flex flex-col min-h-screen">
  <NavbarRecursive />
  <main className="flex-grow">
    <Outlet />
  </main>
  <Footer />
</div>

    )
    
}