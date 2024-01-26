import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import Notice from "../Components/Notice/Notice";
import QueryForm from "../Components/QueryForm/QueryForm";

function Home() {
  return (
    <div className="home-container">
      <div className="nav-container"></div>

      <div className="navigate">
        <Link to="/airwing/about" className="overlay">
          <img
            src={require("../Assets/air.jpeg")}
            alt="airwing"
            className="website-image"
          />
          <div className="overlay-content">
            <h2>Air Wing</h2>
          </div>
        </Link>
        <Link to="/armywing/about" className="overlay">
          <img
            src={require("../Assets/army.jpg")}
            alt="armywing"
            className="website-image"
          />
          <div className="overlay-content">
            <h2>Army Wing</h2>
          </div>
        </Link>
      </div>

      <div className="txt-container">
        <div className="aim-pledge">
          <div className="aim">
            <h1>AIM</h1>
            <p>
              To develop qualities of character, courage, comradeship,
              discipline, leadership, secular outlook, spirit of adventure and
              sportsmanship and the ideals of selfless service among the youth
              to make them useful citizens.
            </p>
          </div>
          <div className="pledge">
            <h1>PLEDGE</h1>
            <p>
              I do hereby solemnly promise that I will serve my motherland most
              truly and loyally and that, I will abide by the rules and
              regulations of the National Cadet Corps. Further under the command
              and control of my commanding officer I will participate in every
              camp most sincerely and wholeheartedly.
            </p>
          </div>
        </div>

        <div className="notice">
          <Notice />
        </div>
      </div>

      <div className="ncc-song">
        <h1>NCC SONG</h1>
        <p>
          Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
          <br />
          Apni Manzil Ek Hai,
          <br />
          Ha, Ha, Ha, Ek Hai,
          <br />
          Ho, Ho, Ho, Ek Hai.
          <br />
          Hum Sab Bharatiya Hain.
          <br /> <br />
          Kashmir Ki Dharti Rani Hai,
          <br />
          Sartaj Himalaya Hai,
          <br />
          Saadiyon Se Humne Isko Apne Khoon Se Pala Hai
          <br />
          Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,
          <br />
          Hum Shamshir Utha Lenge.
          <br />
          <br />
          Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,
          <br />
          Ha, Ha, Ha, Ek Hai
          <br />
          Hum Sab Bharatiya Hai.
          <br />
          Mandir Gurudwaare Bhi Hain Yahan
          <br />
          Aur Masjid Bhi Hai Yahan
          <br />
          Girija Ka Hai Ghariyaal Kahin
          <br />
          Mullah ki Kahin Hai Ajaan
          <br />
          <br />
          Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,
          <br />
          Ek Hee Allah Taala Hain, Raang Birange Deepak Hain Hum,
          <br />
          lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.
          <br />
          Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.
          <br />
        </p>
      </div>

      <div className="query-form">
        <QueryForm />
      </div>
    </div>
  );
}

export default Home;
