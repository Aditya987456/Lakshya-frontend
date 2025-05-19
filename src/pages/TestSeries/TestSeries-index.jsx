import { JeeTest } from "./Jee-test"
import { NeetTest } from "./Neet-test"
import { Outlet, useLocation } from "react-router-dom"

export const TestSeriesIndex=()=>{

    const location=useLocation()
    const TestIndexRoot=location.pathname==='/tests'


    return(
        <div className="m-10 ">
            <div className="font-semibold text-3xl flex justify-center m-6"><h1 className="text-3xl font-bold text-center mb-6 p-5 text-blue-900">Explore Our TestSeries</h1></div>


            { TestIndexRoot && (
            <div className="m-6 grid grid-cols-2">
                
                <JeeTest/>
                <NeetTest/>

            </div>

            )}

            <Outlet/>


        </div>
    )
}