import React, { useState } from "react";
import "../Alumni/Alumni.css";
import NavBar from "../../Components/Navbar/Nav";

const Card = ({ name, rank, photo, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="army-card">
        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <h3>{rank}</h3>
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Know More"}
        </button>
        {showDetails && (
          <div className="army-details">
            <p>{details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Alumni = () => {
  const cardsData = [
    {
      name: "SUO TANISH SHARMA ",
      rank:"SUO",
      photo: require("../../Assests/Tanish sir.jpg"),
      details: (
        <>
          <p>
            <strong>Recommended in SSC- Tech 62 entry</strong>
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2017-2021
          </p>
        </>
      ),
    },
    {
      name: "SUO PRADHUMAN SINGH SISODIA ",
      rank:"SUO",
      photo: require("../../Assests/pradhuman sir.jpg"),
      details: (
        <>
          <p>
            <strong>Camps: </strong>
            YEP||IMA||IGC-GOLD MEDALIST BEST CADET
          </p>
          <p>
            <strong>Branch</strong> Petroleum Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "UO YASHWANT SINGH GAUR ",
      rank:"UO",
      photo: require("../../Assests/yashwant sir.jpg"),
      details: (
        <>
          <p>
          <strong>GOT RECOMMENDED FROM NCC-55 ENTRY ON 8 DEC 2023 (ARMY)</strong>
          <br/>
            <strong>Camps: </strong>
            YEP||RDC BEST CADET, PM RALLEY, ALL INDIA CULTURAL
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "SGT SUDHEER KUMAR ",
      rank:"SGT",
      photo: require("../../Assests/Sudheer Kumar.jpg"),
      details: (
        <>
          <p>
            <strong>Camps: </strong>
            YEP-NEPAL||AITSC
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "CQMS AMAN KUMAR DHAKAD ",
      rank:"CQMS",
      photo: require("../../Assests/Aman sir.jpg"),
      details: (
        <>
          <p>
            <strong>Camps: </strong>
            PRE RDC-2||AITSC||2ND IN OT IN DTE.||GOLD MEDALIST IN ALL INDIA TUG OF WAR
          </p>

          <p>
            <strong>Branch</strong> Petro-Chemical Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "SGT ANKIT KUMAR DHAKAD  ",
      rank:"SGT",
      photo: require("../../Assests/ankit sir.jpg"),
      details: (
        <>
          <p>
            <strong>Camps: </strong>
            RDC PM RALLEY, FLAG AREA||IGGSC-SILVER MEDALIST||AITSC||SELECTED FOR IDDSC (FIRST IN FIRING OPEN 3P)
          </p>

          <p>
            <strong>Branch</strong> Petro-Chemical Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "SGT ISHAAN PANDYA",
      rank:"SGT",
      photo: require("../../Assests/ishan pandya.jpg"),
      details: (
        <>
          <p>
            <strong>GOT RECOMMENDED FROM NCC-55 ENTRY ON 8 DEC 2023(ARMY)</strong> <br/>
            <strong>Camps: </strong>
            GOT 2ND POSITIN DEBATE COMPETITION IN CATC CUM YOGA DAY CAMP 2019, BEST ANCHOR MEDAL IN SAME CAMP
          </p>

          <p>
            <strong>Branch</strong> Mechanical Engineering
            <br />
            <strong>Batch</strong> 2017 - 2021
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="alumni-container">
      <NavBar />
      <p className="army-heading-title">ALUMNI</p>
      <div className="army-card-list">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            rank={card.rank}
            photo={card.photo}
            details={card.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Alumni;
