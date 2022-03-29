import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const data = useGlobalContext();
  console.log(data);

  const { isSidebarOpen, openSideBar, closeSideBar} = useGlobalContext();
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4 className="">Navbar</h4>
        </div>
        <button className="btn nav-toggler" onClick={openSideBar}>
          <FaBars className="icon" />
        </button>
      </header>
      <div className="links-container">
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id} onClick={closeSideBar}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar/>
      </div>
    </nav>
  );
};

export default Navbar;
