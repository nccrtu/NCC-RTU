import React from "react";
import "../AnoNcc/AnoNcc.css";
import NavBar from "../../../Components/Navbar/Nav";
import AnoNccBook from "../../../Assests/AnoNcc.png"

const AnoNcc = () => {
  const bookDownloadLink =
    "https://drive.google.com/file/d/12qqxLq45zhqWpQxz8xiimJoXGgnOQYVO/view?usp=sharing";

  return (
    <div className="army-ano-Container">
<NavBar/>
      <p className="army-heading-title">Ano Ncc Handbook</p>

      <div className="army-AnoNcc">
        <img src={AnoNccBook} alt="bookpreview"/>
        <a href={bookDownloadLink} download>
          <button>Download Book</button>
        </a>
      </div>
    </div>
  );
};

export default AnoNcc;