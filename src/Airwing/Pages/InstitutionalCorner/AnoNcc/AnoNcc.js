import React from "react";
import "../AnoNcc/AnoNcc.css";
import NavBar from "../../../Components/Navbar/Nav";
import AnoNccBook from "../../../Assests/AnoNcc.png";

const AnoNcc = () => {
  const bookDownloadLink =
    "https://drive.google.com/file/d/10bCv5xXh74kOdXqDdDEgVFEOOrCJEjxC/view?usp=sharing";

  return (
    <div className="ano-Container">
      <NavBar />
      <p className="heading-title">ANO NCC Handbook</p>

      <div className="AnoNcc">
        <img src={AnoNccBook} alt="bookpreview" />
        <a href={bookDownloadLink} download>
          <button>Download Book</button>
        </a>
      </div>
    </div>
  );
};

export default AnoNcc;
