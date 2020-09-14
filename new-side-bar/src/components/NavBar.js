import React from 'react'
import { NavBarData } from "./NavBarData";
import { Link } from 'react-router-dom';

import "./NavBar.css";

function Navbar() {
  return (
    <nav className="nav-menu">
      <div className="nav-menu-items">
        {NavBarData.map((item, index) => {
          return(
            <li  
              key={index}
              className={item.cName}
            >
              <Link to={item.path}>
                <span>{item.title}</span>              
                {item.icon}
              </Link>
            </li>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
