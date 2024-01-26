import React from "react";
import "../SpecialBook/SpecialBook.css";
import NavBar from "../../../Components/Navbar/Nav";
import SpecialBookPre from "../../../Assests/specialBook.png"

const SpecialBook = () => {
  const bookDownloadLink =
    "https://drive.google.com/file/d/10SbK-8kfI35XqUK3tTpTj31qILIzNkPe/view?usp=sharing";

  return (
    <div>
      <NavBar />
      <p className="heading-title">Special Book</p>
      <div className="specialBook">
        <img alt="preview" src={SpecialBookPre}/>
        <a href={bookDownloadLink} download>
          <button>Download Book</button>
        </a>
      </div>
    </div>
  );
};

export default SpecialBook;