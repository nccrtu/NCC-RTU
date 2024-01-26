import React from "react";
import "../SpecialBook/SpecialBook.css";
import NavBar from "../../../Components/Navbar/Nav";
import SpecialBookPre from "../../../Assests/specialBook.png"

const SpecialBook = () => {
  const bookDownloadLink =
    "https://drive.google.com/file/d/1F8XRydjWKUnrONcdO1o2mo6ZoSugKmU-/view?usp=sharing";

  return (
    <div>
      <NavBar />
      <p className="army-heading-title">Special Book</p>
      <div className="army-specialBook">
        <img alt="preview" src={SpecialBookPre}/>
        <a href={bookDownloadLink} download>
          <button>Download Book</button>
        </a>
      </div>
    </div>
  );
};

export default SpecialBook;