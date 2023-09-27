import React from "react";
import { userMenu } from "./Menus/userMenu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../../styles/Layout.css";

const Sidebar = () => {
  const location = useLocation();
  const isActive = location.pathname;
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div className={`menu-item ${isActive === "/" && "active"}`}>
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>

              <div className={`menu-item ${isActive === "/donor" && "active"}`}>
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donor">Donor</Link>
              </div>

              <div
                className={`menu-item ${isActive === "/hospital" && "active"}`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  isActive === "/donor-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donor-list">Donor List</Link>
              </div>

              <div
                className={`menu-item ${
                  isActive === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>

              <div
                className={`menu-item ${isActive === "/org-list" && "active"}`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}

          {(user?.role === "donor" || user?.role === "hospital") && (
            <>
              <div
                className={`menu-item ${
                  isActive === "/organisation" && "active"
                }`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to="/organisation">Organisation</Link>
              </div>
            </>
          )}

          {user?.role === "donor" && (
            <>
              <div
                className={`menu-item ${isActive === "/donation" && "active"}`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to="/donation">Donation</Link>
              </div>
            </>
          )}

          {user?.role === "hospital" && (
            <>
              <div
                className={`menu-item ${isActive === "/consumer" && "active"}`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to="/consumer">Consumer</Link>
              </div>
            </>
          )}

          {/* {userMenu.map((menu) => {
            
            return (
              <div
                className={`menu-item ${isActive && "active"}`}
                key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}> {menu.name}</Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
