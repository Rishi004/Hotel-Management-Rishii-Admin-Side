import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "..";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { AdminProfile } from "../../../assets/images";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="nav-bar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="nav-bar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <img
                            src={AdminProfile}
                            alt="admin-profile"
                            className="admin-img"
                        />
                        <h5 className="prof-name">MrHappy</h5>
                        <h6 className="prof-name-2">Admin</h6>
                        {SidebarData.map((val, key) => {
                            return (
                                <li key={key} className={val.clsName}>
                                    <Link to={val.path}>
                                        {val.icon}
                                        <span className="span">
                                            {val.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
