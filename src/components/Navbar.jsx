import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardArrowDown} from "react-icons/md";


 //import logo from '../assets/allen-logo.png'
import logo from '../assets/lakshya.png'

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
        path: "/class-6-10",
        dropdown: [
          { Name: "Class 6", path: "/class-6" },
          { Name: "Class 7", path: "/class-7" },
          { Name: "Class 8", path: "/class-8" },
          { Name: "Class 9", path: "/class-9" },
          { Name: "Class 10", path: "/class-10" },
        ],
      },



      {
        Name: "View All Options",
        path: "/",
        dropdown: [
          { Name: "Online Courses", path: "/online-live-courses" },
          { Name: "Offline Courses", path: "offlin-website" },
          { Name: "Distance Courses", path: "/distance-website" },
          { Name: "Hindi Medium Courses", path: "/hindi-courses" },
          { Name: "International Olympiad", path: "/std-10"},
        ],
      }





    ],
  },


  { Name: "TestSeries", path: "/tests",
    dropdown: [
        { Name: "NEET", path: "/neet/online-test",
          dropdown: [
            { Name: "Class 11th", path: "/class-11th" },
            { Name: "Class 12th", path: "/class-12th" },
            { Name: "Class 12th Plus", path: "/class-12-droppers" }
           ],
         },



        { Name: "JEE (Main+Advanced)", path: "/jee/online-test",
          dropdown: [
            { Name: "Class 11th", path: "/class-11th" },
            { Name: "Class 12th", path: "/class-12th" },
            { Name: "Class 12th Plus", path: "/class-12-droppers" }
           ],
         },
      ],
   },





  { Name: "Result", path: "/results",
    dropdown: [
      { Name: "NEET", path: "/result/neet",
        dropdown: [
          { Name: "2025", path: "/2025" },
          { Name: "2024", path: "/2024" },
          { Name: "2023", path: "/2023" }
         ],
       },


      { Name: "JEE", path: "/result/jee",
        dropdown: [
          { Name: "2025", path: "/2025" },
          { Name: "2024", path: "/2024" },
          { Name: "2023", path: "/2023" }
         ],
       },

     ],
   },





  { Name: "Study Materials", path: "/books" },








  { Name: "More", path: "/recursion-dropdown",
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
  return (
    <>
    <nav className="flex px-2 py-3 bg-white shadow-lg h-25">

      <div className=" flex items-center mr-20 ">
        <img src={logo} className=" h-9 w-15 ml-10 " alt="allen-logo" />
      </div>

      <ul className="flex gap-6 ">
        {NavArray.map((item) => (
          <DropdownItem key={item.Name} item={item} depth={0} />
        ))}
      </ul>
    </nav>
    <div className="bg-green-800">something</div>
    </>
  );
}

// Recursive Dropdown Item Component
function DropdownItem({ item, depth }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  return (
    <li
      className="relative list-none "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
            `block group px-4 py-2 rounded-xl m-1 whitespace-nowrap
             ${isActive && depth === 0 ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100 "}`
          }
      >
        
        {/* <span>{item.Name}
        <span className="pt-1 ml-5"><MdKeyboardArrowRight /></span>
        </span> */}


        {depth===0 || hasDropdown === false?

        <span>{item.Name}</span> 
            :
        <span className="flex justify-between">{item.Name}
            <span className="pt-1 ml-5 "><MdKeyboardArrowDown className={`${hasDropdown === true ? "transition-all group-hover:-rotate-90":''}`}/></span>
        </span>

         } 

      </NavLink>

      {/* Dropdown logic */}
      {hasDropdown && open && (
        <ul
          className={`
            absolute bg-white border shadow-lg rounded-xl min-w-[250px] z-10
            ${depth === 0 ? "top-19 left-0" : "top-0 left-full"}
          `}
        >
          {item.dropdown.map((subItem) => (
            <DropdownItem key={subItem.Name} item={subItem} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
