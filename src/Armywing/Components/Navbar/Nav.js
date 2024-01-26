import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function NavBar() {
  const [armywingDropdown, setArmywingDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [cornerDropdown, setCornerDropdown] = useState(false);

  const containerRef = useRef(null);

  const handleArmywingClick = () => {
    setArmywingDropdown(!armywingDropdown);
    setAboutDropdown(false);
    setCornerDropdown(false);
  };

  const handleCornerClick = () => {
    setCornerDropdown(!cornerDropdown);
    setArmywingDropdown(false);
    setAboutDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setArmywingDropdown(false);
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
    <div className="army-container" ref={containerRef}>
      
      <div className="army-menu-cont">
        <div className="army-main-menu">
          <Link to="/">
          <img
          className="army-home-menu"
          alt="home"
          src={require("../../Assests/home.png")}
        />
          </Link>
        </div>
        <div className="army-menu" onClick={handleArmywingClick}>
          <Link to="/armywing/about">About NCC</Link>
        </div>
        <div className="army-menu" onClick={handleCornerClick}>
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
              className="army-dropdown-content"
              onClick={() => setCornerDropdown(false)}
            >
              <Link to="/armywing/enrollmentProcedure">Enrollment Procedure</Link>
              <Link to="/armywing/anoNccHandbook">ANO NCC Handbook</Link>
              <Link to="/armywing/commonBook">Common Book</Link>
              <Link to="/armywing/specialBook">Special Book</Link>
              <Link to="/armywing/presentations">Presentations</Link>
              <Link to="/armywing/rankStructure">Rank Structure</Link>
            </div>
          )}
        </div>
        <div className="army-menu">
          <Link to="/armywing/alumni">Alumni</Link>
        </div>
        <div className="army-menu">
          <Link to="/armywing/achievements">Achievements</Link>
        </div>
        <div className="army-menu">
          <Link to="/armywing/activities">Activities</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
