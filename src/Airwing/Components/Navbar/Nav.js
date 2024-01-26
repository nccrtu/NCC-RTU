import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function NavBar() {
  const [airwingDropdown, setAirwingDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [cornerDropdown, setCornerDropdown] = useState(false);
  const [linkColor, setLinkColor] = useState('rgb(0, 42, 89)');

  const containerRef = useRef(null);

  

  const handleAirwingClick = () => {
    setAirwingDropdown(!airwingDropdown);
    setAboutDropdown(false);
    setCornerDropdown(false);
    setLinkColor('rgb(0, 42, 89)');
  };

  const handleCornerClick = () => {
    setCornerDropdown(!cornerDropdown);
    setAirwingDropdown(false);
    setAboutDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setAirwingDropdown(false);
      setAboutDropdown(false);
      setCornerDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="air-container" ref={containerRef}>
      
      <div className="air-menu-cont">
        <div className=" air-main-menu">
          <Link to="/">
          <img
          className="air-home-menu"
          alt="home"
          src={require("../../Assests/home.png")}
        />
          </Link>
        </div>
        <div className="air-menu" onClick={handleAirwingClick}>
          <Link to="/airwing/about" style={{ color: linkColor }}>About NCC</Link>
        </div>
        <div className="air-menu" onClick={handleCornerClick}>
          <p>
            Institutional Corner{" "}
            <AiOutlineDown
              style={{
                position: "relative",
                top: "3px",
              }}
            />
          </p>
          {cornerDropdown && (
            <div
              className="air-dropdown-content"
              onClick={() => setCornerDropdown(false)}
            >
              <Link to="/airwing/enrollmentProcedure" style={{ color: linkColor }}>Enrollment Procedure</Link>
              <Link to="/airwing/anoNccHandbook" style={{ color: linkColor }}>ANO NCC Handbook</Link>
              <Link to="/airwing/commonBook" style={{ color: linkColor }}>Common Book</Link>
              <Link to="/airwing/specialBook" style={{ color: linkColor }}>Special Book</Link>
              <Link to="/airwing/presentations" style={{ color: linkColor }}>Presentations</Link>
              <Link to="/airwing/rankStructure" style={{ color: linkColor }}>Rank Structure</Link>
            </div>
          )}
        </div>
        <div className="air-menu">
          <Link to="/airwing/alumni" style={{ color: linkColor }}>Alumni</Link>
        </div>
        <div className="air-menu">
          <Link to="/airwing/achievements" style={{ color: linkColor }}>Achievements</Link>
        </div>
        <div className="air-menu">
          <Link to="/airwing/activities" style={{ color: linkColor }}>Activities</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
