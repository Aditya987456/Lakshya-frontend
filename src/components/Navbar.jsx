import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md";
import { Navigate } from "react-router-dom";
import { PiListLight } from "react-icons/pi";

 //import logo from '../assets/allen-logo.png'
import logo from '../assets/lakshya.png'
import { PiPhoneCallFill } from "react-icons/pi";

// Navigation array - data structure
const NavArray = [
  {
    Name: "Courses",
    path: 'courses',
    dropdown: [
      {
        Name: "NEET",
        path: "courses/neet",
        dropdown: [
          { Name: "Class 11th", path: "courses/neet/class-11" },
          { Name: "Class 12th", path: "courses/neet/class-12" },
          { Name: "Class 12th Plus", path: "courses/neet/class-12-droppers" }
        ],
      },



      { Name: "JEE",
        path: "courses/jee",
        dropdown: [
            { Name: "Class 11th", path: "courses/jee/class-11" },
            { Name: "Class 12th", path: "courses/jee/class-12" },
            { Name: "Class 12th Plus", path: "courses/jee/class-12-droppers" }
          ],
       },



      {
        Name: "Class 6-10",
        path: "courses/class-6-10",
        dropdown: [
          { Name: "Class 6", path: "courses/class-6-10/class-6" },
          { Name: "Class 7", path: "courses/class-6-10/class-7" },
          { Name: "Class 8", path: "courses/class-6-10/class-8" },
          { Name: "Class 9", path: "courses/class-6-10/class-9" },
          { Name: "Class 10", path: "courses/class-6-10/class-10" },
        ],
      },



      {
        Name: "View All Options",
        path: "/courses/view-all",
        dropdown: [
          { Name: "Online Courses", path: "/online-live-courses" },
          { Name: "Offline Courses", path: "offlin-website" },
          { Name: "Distance Courses", path: "/distance-website" },
          { Name: "Hindi Medium Courses", path: "/hindi-courses" },
          { Name: "International Olympiad", path: "/std-10"},
        ],

        //  dropdown: [
        //   { Name: "Online Courses", path: "/courses/view-all" },
        //   { Name: "Offline Courses", path: "/courses/view-all" },
        //   { Name: "Distance Courses", path: "/courses/view-all" },
        //   { Name: "Hindi Medium Courses", path: "/courses/view-all" },
        //   { Name: "International Olympiad", path: "/courses/view-all"},
        // ],
        
      }





    ],
  },


  { Name: "TestSeries", path: "/tests",
    dropdown: [
        { Name: "NEET", path: "/tests/online-neet-test",
          dropdown: [
            { Name: "Class 11th", path: "/tests/online-neet-test/class-11th" },
            { Name: "Class 12th", path: "/tests/online-neet-test/class-12th" },
            { Name: "Class 12th Plus", path: "/tests/online-neet-test/class-12th-plus" }
           ],
         },



        { Name: "JEE (Main+Advanced)", path: "/tests/online-jee-test",
          dropdown: [
            { Name: "Class 11th", path: "/tests/online-jee-test/class-11th" },
            { Name: "Class 12th", path: "/tests/online-jee-test/class-12th" },
            { Name: "Class 12th Plus", path: "/tests/online-jee-test/class-12th-plus" }
           ],
         },
      ],
   },





  { Name: "Result", path: "/results",
    dropdown: [
      { Name: "NEET", path: "/results/neet",
        dropdown: [
          { Name: "2025", path: "/results/neet/2025" },
          { Name: "2024", path: "/results/neet/2024" },
          { Name: "2023", path: "/results/neet/2023" }
         ],
       },


      { Name: "JEE", path: "/results/jee",
        dropdown: [
          { Name: "2025", path: "/results/jee/2025" },
          { Name: "2024", path: "/results/jee/2024" },
          { Name: "2023", path: "/results/jee/2023" }
         ],
       },

     ],
   },





  { Name: "Study Materials", path: "/study-materials" },








  { Name: "More", path: "/more",
    dropdown: [
        { Name: "Playing with dropdown", path: "/playing" },
        { Name: "Playing with dropdown7", path: "/playing" },
        { Name: "Playing with dropdown", path: "/playing" },
        { Name: "Playing with dropdown", path: "/playing" },
        { Name: "Playing with dropdown", path: "/playing",
            dropdown: [
              { Name: "Playing with dropdown", path: "/playing" },
              { Name: "Playing with dropdown7", path: "/playing" },
              { Name: "Playing with dropdown", path: "/playing" },
              { Name: "Playing with dropdown", path: "/playing" },
              { Name: "Playing with dropdown", path: "/playing",
                    dropdown: [
                      { Name: "Playing with dropdown", path: "/playing" },
                      { Name: "Playing with dropdown7", path: "/playing" },
                      { Name: "Playing with dropdown", path: "/playing" },
                      { Name: "Playing with dropdown", path: "/playing" },
                      { Name: "Playing with dropdown", path: "/playing",
                            dropdown: [
                              { Name: "Playing with dropdown", path: "/playing" },
                              { Name: "Playing with dropdown7", path: "/playing" },
                              { Name: "Playing with dropdown", path: "/playing" },
                              { Name: "Playing with dropdown", path: "/playing" },
                              { Name: "Playing with dropdown", path: "/playing"}
                              ],
                        },
                      ],
                },
              ],
        },
      ],

   },



];








// Main Navigation Component
export function NavbarRecursive() {
  const navigate=useNavigate()

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const Homepaglu=()=>{
    navigate('/')
  }

  const ContactUs=()=>{
    navigate('/contact')
  }



  return (
    <>

    <nav className=" flex px-1 py-3  bg-white shadow-lg h-25 sticky top-0 z-50 rounded-lg ">





      <button 
          className="  md:hidden  px-4 text-2xl text-blue-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
      </button>


      {/* <div className=" flex items-center mr-10 ml-2  font-extrabold text-4xl ">
        <img src={logo} onClick={Homepaglu} className="object-contain hover:cursor-pointer  h-10 w-15 ml-6 " alt="allen-logo" />
      </div> */}


{/* logo -> LAKSHYA */}
      <div className="  flex items-center md:ml-2 mr-4 font-extrabold text-2xl sm:text-3xl md:text-4xl">
          <img
            src={logo}
            onClick={Homepaglu}
            alt="lakshya-logo"
            className="
              h-8 sm:h-10 md:h-12 lg:h-14
              w-auto
              ml-2 md:ml-6
              sm:mr-auto
              object-contain
              hover:cursor-pointer
              max-w-[160px]
            "
          />
    </div>



{/*--------------------- normal nav on lg: ----------------- */}

<ul className=" hidden md:flex gap-6">
        {NavArray.map((item) => (
          <DropdownItem key={item.Name} item={item} depth={0} />
        ))}
      </ul>
      
      





{/*----------------------- mobile wala nav: if click then open. ----------------*/}
{isMobileMenuOpen && (
  <>
  {/* ###############  have to do this??????? */}
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40"
      onClick={() => setIsMobileMenuOpen(false)}
    ></div>

    <div className="fixed top-0 left-0 h-full w-3/5 max-w-sm bg-white shadow-2xl z-50 p-4 overflow-y-auto">
        <div className="flex">
                <img
                        src={logo}
                        onClick={Homepaglu}
                        alt="lakshya-logo"
                        className="
                          h-8 sm:h-10 md:h-12 lg:h-14
                          w-auto
                          ml-2 md:ml-6
                          sm:mr-auto
                          object-contain
                          hover:cursor-pointer
                          max-w-[160px]
                        "
                />

                <button
                  className="text-right text-lg font-bold w-full mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ✕
                </button>
        </div>


      <ul className="flex flex-col mt-4 gap-2">
        {NavArray.map((item) => (
          <DropdownItem
            key={item.Name}
            item={item}
            depth={0}
// $$$$$$ ***  ###### DropdownItem is passed isMobile={true} so it knows to behave differently (e.g., clicking opens submenus instead of hover but in phone saar).
            isMobile={true} //## mobile wala dropdown layout clicked means mobile nav khul chuka hai.
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        ))}
      </ul>
    </div>
  </>
)}












    {/* <ul className={`flex-col md:flex-row md:flex gap-6 ${isMobileMenuOpen ? " bg-pink-300" : "hidden "} md:gap-6`}>
    
    {NavArray.map((item) => (
      <DropdownItem isMobileMenuOpen={isMobileMenuOpen}  setIsMobileMenuOpen={setIsMobileMenuOpen}
          key={item.Name} item={item} depth={0} />
      ))}
    </ul> */}






      {/* call button */}
        <div
          onClick={ContactUs}
         className=" pt-4 mr-1 md:pt-4 ml-auto " ><PiPhoneCallFill className='transition-transform transform hover:scale-125 cursor-pointer text-blue-900 hover:to-blue-600 text-xl md:text-3xl'/></div>
      
      {/* login button */}
        <div>
            <button type="button" 
            onClick={()=>(navigate('coming-soon'))}
            class="transition-transform md:transform hover:scale-105 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  rounded-full text-sm px-2 py-1    sm:px-5 sm:py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 sm:ml-6 mt-3 ">
            LOGIN</button>
        </div>





    </nav>
    </>
  );
}










//   //Recursive Dropdown Item Component-->   only web view  i.e lg:  breakpoint wala hai ye.

// function DropdownItem({ item, depth }) {

//   const [open, setOpen] = useState(false);
//   const hasDropdown = Array.isArray(item.dropdown);

//   return (
//     <li
//       className="relative list-none"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <NavLink
//         to={item.path}
//         className={({ isActive }) =>
//             `block group px-4 py-2 rounded-xl m-1 whitespace-nowrap text-blue-900
//              ${isActive && depth === 0 ? "font-bold " : "text-gray-700 hover:bg-slate-100 "}`
//           }
//       >
        
//         {/* <span>{item.Name}
//         <span className="pt-1 ml-5"><MdKeyboardArrowRight /></span>
//         </span> */}


//         {depth===0 || hasDropdown === false?

//         <span>{item.Name}</span> 
//             :
//         <span className="flex justify-between">{item.Name}
//             <span className="pt-1 ml-5 "><MdKeyboardArrowDown className={`${hasDropdown === true ? "transition-all group-hover:-rotate-90":''}`}/></span>
//         </span>

//          } 

//       </NavLink>





//       {/* Dropdown logic */}
//       {hasDropdown && open && (
//         <ul
//           className={`
//             absolute bg-white border shadow-lg rounded-xl min-w-[250px] z-10
//             ${depth === 0 ? "lg:top-19 lg:left-0  " : "top-0 left-full"}
//           `}
//         >
//           {item.dropdown.map((subItem) => (
//             <DropdownItem key={subItem.Name} item={subItem} depth={depth + 1} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }









function DropdownItem({ item, depth, isMobile = false, setIsMobileMenuOpen }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);


  const handleClick = (e) => {
    if (hasDropdown && isMobile) {
      e.preventDefault(); // Prevent navigation on mobile if there's a dropdown
      setOpen(!open);
    } else {
      setIsMobileMenuOpen?.(false); // Close menu on click (mobile)
    }
  };


    return (
    <li
      className="relative list-none"
      {...(!isMobile && {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
    >
      <NavLink
        to={item.path}
        onClick={handleClick}
        className={({ isActive }) =>
          `block group px-4 py-2 rounded-xl m-1 whitespace-nowrap text-blue-900
          ${isActive && depth === 0 ? "font-bold" : "text-gray-700 hover:bg-slate-100"}`
        }
      >
  {/*------- now nav elements--- */}
        <div className="flex justify-between items-center">


          <span>{item.Name}</span>
   {/* $$$*-------------- agar dropdown hai tab hi arrow do but not in web && depth=0 i.e heading me not show arrow. ----------------*/}
          {(hasDropdown && ( (depth!=0 ||  isMobile) )

            && (
            <span className="pt-1 ml-5">
              <MdKeyboardArrowRight
                className={`transition-transform ${
                  isMobile ? (open ? "rotate-90" : "") : "rotate-90 group-hover:rotate-0 "
                }`}
              />
            </span>

              )

          )}




        </div>

      </NavLink>

      {hasDropdown && open && (
        <ul
          className={`${
            isMobile
              ? "pl-4 border-l border-blue-400 mt-1"
              : "absolute bg-white border shadow-lg rounded-xl min-w-[250px] z-10 " +
                (depth === 0 ? "lg:top-19 lg:left-0" : "top-0 left-full")
          }`}
        >
          {item.dropdown.map((subItem) => (
            <DropdownItem
              key={subItem.Name}
              item={subItem}
              depth={depth + 1}
              isMobile={isMobile}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          ))}
        </ul>
      )}
    </li>
  );
}




























const MobileNav=()=>{

  return(
    <div className="h-screen width-[100px] bg-blue-50 top-25 left-0">

    </div>
  )
}
