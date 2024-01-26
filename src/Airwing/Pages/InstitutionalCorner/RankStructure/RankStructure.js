import React from "react";
import RankStruct from "../../../Assests/ARMS RANK.png";
import "../RankStructure/RankStructure.css";
import NavBar from "../../../Components/Navbar/Nav";

function RankStructure() {
  return (
    <div>
      <NavBar/>
      <p className="heading-title">Rank Structure</p>

      <div className="rank">
        <img alt="Rank Structure" src={RankStruct} />
      </div>
    </div>
  );
}

export default RankStructure;
