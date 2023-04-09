import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import logo from "../data/dtslogo.png";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

// import { Fragment } from "react";
import { Disclosure,} from "@headlessui/react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";

import { links, links1, links2 } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={{ handleCloseSideBar }}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img
                src={logo}
                alt="DTS Logo"
                style={{ width: "70px", height: "30px" }}
              />{" "}
              <span>Machiners</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                // style={{ color: 'black' }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {/* ----------------------Dashbord--------------------------- */}
            {links.map((item) => (
              <div key={item.title}>
                {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                  </p> */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={{handleCloseSideBar}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}

            {/* ----------------------Master DropDown--------------------------- */}
            {links1.map((item) => (
              <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button 
                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    {item.title}
                    {/* <span>Master</span> */}
                    <span className="ml-2">
                      {open ? (
                        <AiOutlineMinusSquare />
                      ) : (
                        <AiOutlinePlusSquare />
                      )}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    {item.links1.map((linker) => (
                      <NavLink
                        key1={linker.name}
                        to={`/${linker.name}`}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <span className="mr-2 ml-6">{linker.icon}</span>
                        <span className="capitalize">{linker.name}</span>
                      </NavLink>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            
            ))}
            {/* ----------------------Dashbord--------------------------- */}
            {links2.map((item) => (
              <div key={item.title}>
                {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                  </p> */}
                {item.links2.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key2={link.name}
                    onClick={{handleCloseSideBar}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
// import { useStateContext } from '../contexts/ContextProvider';

// const Sidebar = () => {
//   const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

//   const handleCloseSideBar = () => {
//     if (activeMenu !== undefined && screenSize <= 900) {
//       setActiveMenu(false);
//     }
//   };

//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

//   return (
//     <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
// {activeMenu && (
//   <>
//     <div className="flex justify-between items-center">
//       <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
//         <SiShopware /> <span>Shoppy</span>
//       </Link>
//             <TooltipComponent content="Menu" position="BottomCenter">
//               <button
//                 type="button"
//                 onClick={() => setActiveMenu(!activeMenu)}
//                 style={{ color: currentColor }}
//                 className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
//               >
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>
//           <div className="mt-10 ">
//             {links.map((item) => (
//               <div key={item.title}>
//                 <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
//                   {item.title}
//                 </p>
//                 {item.links.map((link) => (
//                   <NavLink
//                     to={`/${link.name}`}
//                     key={link.name}
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     {link.icon}
//                     <span className="capitalize ">{link.name}</span>
//                   </NavLink>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
