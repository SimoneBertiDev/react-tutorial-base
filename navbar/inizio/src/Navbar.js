import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const linkContainerRef = useRef(null);

  const linkListRef = useRef(null);

  useEffect(()=>{
    const linksListAltezza = linkListRef.current.getBoundingClientRect().height;
    if(show){
      linkContainerRef.current.style.height = `${linksListAltezza}px`
    }else{
      linkContainerRef.current.style.height = `0px`
    }
    console.log(linksListAltezza);
  },[show])
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <h4>DevBar</h4>
        </div>
        <button className="btn nav-toggler" onClick={() => setShow(!show)}>
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div
        className={`${show ? "links-container show" : "links-container"}`}
        ref={linkContainerRef}
      >
        <ul className="nav-links" ref={linkListRef}>
          {links.map((el) => {
            return (
              <li key={el.id}>
                <a href={el.url}>{el.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="social-links">
          <SocialBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
