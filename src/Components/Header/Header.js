import React from 'react';
import "../Header/Header.css"

function Header() {
  return (
    <div className='header-container'>
        <div className="Logo">
        <div className="NCC">
        <img
          className="logo logo1"
          alt="logo"
          src={require("../../Assets/Flag.png")}
        />
          <div className="sub-ncc">
            <p>राष्ट्रीय कैडेट कोर</p>
            <p>National Cadet Corps</p>
          </div>
        </div>
        <img
          className="logo logo2"
          alt="logo"
          src={require("../../Assets/Azadi-logo.png")}
        />
        <img
          className="logo logo4"
          alt="logo"
          src={require("../../Assets/Unity-logo.png")}
        />
        <img
          className="logo logo3"
          alt="logo"
          src={require("../../Assets/RTU Logo.png")}
        />
      </div>
    </div>
  )
}

export default Header