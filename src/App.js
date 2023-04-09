import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Demo,
  Dashboard,
  Permissions,
  RolesPermissions,
  UserRoles,
  Companies,
  CompanyBankDetails,
  Countries,
  Customers,
  Products,
  PurchaseOrders,
  Quotations,
  Roles,
  SalesInvoices,
  States,
  Suppliers,
  Users,

} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

import {
  QueryClient,
  QueryClientProvider,

} from "@tanstack/react-query";

const queryClient = new QueryClient();


const App = () => {



  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className={ currentMode === 'Dark' ? 'dark': ''}>
      <QueryClientProvider client={queryClient}>

    
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/****************** Theme Setting Option Button **************/}
          {/* <div className="fixed right-4 bottom-4" style={{ zindex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
          
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              
              activeMenu
                ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 widsty "
                : "bg-main-bg dark:bg-main-dark-bg  min-h-screen flex-2 widsty"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            <div>
          { themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />

                {/* Master Pages */}
                <Route path="/Roles" element={<Roles />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/UserRoles" element={<UserRoles />} />
                <Route path="/Permissions" element={<Permissions />} />
                <Route
                  path="/Roles-Permissions"
                  element={<RolesPermissions />}
                />
                <Route path="/Companies" element={<Companies />} />
                <Route
                  path="/Company-Bank-Details"
                  element={<CompanyBankDetails />}
                />
                <Route path="/Products" element={<Products />} />
                <Route path="/Suppliers" element={<Suppliers />} />
                <Route path="/Customers" element={<Customers />} />
                <Route path="/States" element={<States />} />
                <Route path="/Countries" element={<Countries />} />

                {/* Pages */}
                <Route path="/Quotations" element={<Quotations />} />
                <Route path="/Sales-Invoices" element={<SalesInvoices />} />
                <Route path="/Purchase-Orders" element={<PurchaseOrders />} />
                <Route path="/Demo" element={<Demo />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
