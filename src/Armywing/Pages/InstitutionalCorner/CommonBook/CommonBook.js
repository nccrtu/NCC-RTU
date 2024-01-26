import React from "react";
import "../CommonBook/commonBook.css";
import NavBar from "../../../Components/Navbar/Nav";
import CommonBookPre from "../../../Assests/commonBook.png";

const CommonBook = () => {
  const bookDownloadLink =
    "https://drive.google.com/file/d/1vT_uUOC7qFx59uZZUua7jBIfQR1MT57t/view?usp=sharing";

  return (
    <div>
      <NavBar />
      <p className="army-heading-title">Common Book</p>

      <div className="army-commonBook">
        <img alt="preview" src={CommonBookPre} />
        <a href={bookDownloadLink} download>
          <button>Download Book</button>
        </a>
      </div>
    </div>
  );
};

export default CommonBook;
