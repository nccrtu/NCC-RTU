import React, { useState } from "react";
import "../Alumni/Alumni.css";
import NavBar from "../../Components/Navbar/Nav"; //Navbar Component

// Card component to display individual alumni information
const Card = ({ name, rank, photo, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Rendering individual card with alumni information
  return (
    <div>
      <div className="card">
        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <h3>{rank}</h3>
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Know More"}
        </button>
        {showDetails && (
          <div className="details">
            <p>{details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Alumni component to display a list of alumni cards
const Alumni = () => {
  const cardsData = [
    {
      name: "ABDUL MAJID",
      rank: "CUO",
      photo: require("../../Assests/abdul.jpeg"),
      details: (
        <>
          <p>
            <strong>
              Recommended by the Services Selection Board (SSB) to join the
              Indian Naval Academy, Ezhimala, and further to join the Indian
              Navy as an officer.
            </strong>
          </p>
          <p>
            He has attended some of the most prestigious camps of the NCC:
            <br />
            - All India Vayu Sainik Camp (AIVSC) 2022
            <br />
            - Indian Military Academy Attachment Camp 2021-22
            <br />
            - Special National Integration Camp (SNIC)
            <br />
            Holds the{" "}
            <strong>second highest rank of Cadet Under Officer</strong> and
            manages the teaching team at 7 Raj Air Sqn NCC Kota.
            <br />
            <p>
              <strong>Branch</strong> Aeronautical Engineering
              <br />
              <strong>Batch</strong> 2019 - 2023
            </p>
          </p>
        </>
      ),
    },
    {
      name: "YOGESH KUMAR",
      rank: "CSUO",
      photo: require("../../Assests/yogesh.jpeg"),
      details: (
        <>
          <p>
            <strong>Recommended in Airforce</strong>
            <br />
            <strong>Youth Exchange Program (YEP) 2022: </strong>
            He was a part of the Indian contingent to YEP Bangladesh, where he
            exchanged the cultural and military values of India with his
            Bangladeshi and Maldivian counterparts. He was the only cadet to get
            selected from Rajasthan State.
          </p>
          <p>
            <strong>All India Vayu Sainik Camp (AIVSC): </strong>
            Where he was the overall senior of all the 17 state departments of
            India and represented Raj Directorate in .22 rifle shooting
            competitions.
          </p>
          <p>
            He was ranked number one in Rajasthan in the best cadet competition
            during IGC 2022. Holds the highest rank of Cadet Senior Under
            Officer and leads 1200 cadets of 7 Raj Air Sqn NCC, Kota.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "ABHINAV VYAS",
      rank: "CWO",
      photo: require("../../Assests/abhinav.jpeg"),
      details: (
        <>
          <p>
            He attended the Republic Day Camp (RDC) 2022, wherein he:
            <br />
            -Represented Rajasthan in the ALL INDIA BEST CADET COMPETITION
            <br />
            -He was selected as a Hall of Fame and Line Area briefer.
            <br />
            -Represented the directorate in cultural dance.
          </p>
          <p>
            Holds the
            <strong>third highest rank</strong> of Cadet Warrant Officer and was
            part of the teaching team at 7 Raj Air Sqn NCC, Kota.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2019 - 2023
          </p>
        </>
      ),
    },
    {
      name: "SAURAV KUMAR",
      rank: "CAPTAIN",
      photo: require("../../Assests/saurav.jpeg"),
      details: (
        <>
          <p>
            Serving in the Indian Army as an officer in the Regiment of
            Artillery.
            <br />
            Ex-Cadet Under Officer at 7 Raj Air Sqn NCC, Kota.
            <br />
            He completed one of the most prestigious camps in the NCC, i.e., the
            Para Basic Course at Paratrooper Training School, Agra.
          </p>
          <p>
            He also completed several other camps, like
            <br />
            -Air Force Academy attachment camp
            <br />
            -All India Vayu Sainik Camp (AIVSC)
            <br />
            -Advance leadership camps
            <br />
            -Basic leadership camp
          </p>
          <p>
            Holds the
            <strong> third highest rank</strong> of Cadet Warrant Officer and is
            part of the teaching team at 7 Raj Air Sqn NCC, Kota.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
          </p>
        </>
      ),
    },
    {
      name: "MANGLARAM",
      photo: require("../../Assests/mangalram.jpeg"),
      details: (
        <>
          <p>
            One of the three cadets from all India, awarded Defence Secretary
            Award 2016 for social work.
            <br />
            Gold medal in 10m and 50m Rifle Shooting and Bronze medal in Double
            bore skeet shooting, Awarded with RRM Award.
            <br />
            Currently, a national level shooter.
            <br />
            He completed one of the most prestigious camps in the NCC, i.e., the
            Para Basic Course at Paratrooper Training School, Agra.
            <br />
            Ex-Cadet Under Officer at 7 Raj Air Sqn NCC, Kota.
          </p>
          <p>
            He did several other camps, like
            <br />
            -Air Force Academy attachment camp
            <br />
            -All India Vayu Sainik Camp (AIVSC)
            <br />
            -Inter Group Shooting Competition
            <br />
            -Ek Bharat Shrestha Bharat
          </p>

          <p>
            <strong>Branch</strong> Petro-Chemical Engineering
            <br />
            <strong>Batch</strong> 2014 - 2018
          </p>
        </>
      ),
    },
    {
      name: "ANIRUDDHA DIGGIWAL",
      rank: "CDT.",
      photo: require("../../Assests/Anirudha.jpg"),
      details: (
        <>
          <p>
            During college:
            <br />
            -Training and Placement Cell Coordinator.
            <br />
            -Overall head of THAR 2017.
            <br />
            -Campus convener of IEI.
            <br />
            -And organized lots of workshops.
          </p>
          <p>
            <strong>M.Tech:</strong> IIT Delhi ( Thermal Engineering).
            <br />
            <strong>Previous Job:</strong> Ex Applied materials, NPCIL.
            <br />
            <strong>Current:</strong> Doing MBA ( IIM MUMBAI).
          </p>
          <p>
            <strong>Branch</strong> Mechanical Engineering
            <br />
            <strong>Batch</strong> 2014 - 2018
            <br />
            <strong>E-mail</strong> ani.diggiwal@gmail.com
            <br />
            <strong>Mob:</strong> 941319622
          </p>
        </>
      ),
    },
    {
      name: "DHARAMVEER SINGH GURJAR",
      rank: "CDT.",
      photo: require("../../Assests/dharamveer.jpg"),
      details: (
        <>
          <p>
            During college:
            <br />
            -AIVSC 2014.
            <br />
            -AFA 2015.
          </p>
          <p>
            <strong>Current:</strong> Indian railways, Delhi
          </p>
          <p>
            <strong>Branch</strong> Electronics and Communication Engineering
            <br />
            <strong>Batch</strong> 2012 - 2016
            <br />
            <strong>E-mail</strong> dharmveergurjar1994@gmail.com
            <br />
            <strong>Mob:</strong> 8955835581
          </p>
        </>
      ),
    },
    {
      name: "KAMAL KUMAR JAIN",
      rank: "CDT.",
      photo: require("../../Assests/kamal-kumar.jpg"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Indian Railway (SM).
          </p>
          <p>
            <strong>Branch</strong> Mechanical Engineering
            <br />
            <strong>Batch</strong> 2014 - 2018
            <br />
            <strong>E-mail</strong> kamaljain6858@gmail.com
            <br />
            <strong>Mob:</strong> 8233685848
          </p>
        </>
      ),
    },
    {
      name: "VIRENDRA AKANI",
      rank: "CDT.",
      photo: require("../../Assests/virendra.jpg"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Basic computer Instructor.
          </p>
          <p>
            <strong>Branch</strong> Electronic & Communication Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>E-mail</strong> virujat398@gmail.com
            <br />
            <strong>Mob:</strong> 9521546790
          </p>
        </>
      ),
    },
    {
      name: "DEVRAJ SARAN",
      rank: "CDT.",
      photo: require("../../Assests/Devraj.jpg"),
      details: (
        <>
          <p>
            <strong>Current:</strong> JEn.
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>E-mail</strong> devraj011998@gmail.com
            <br />
            <strong>Mob:</strong> 8005630650
          </p>
        </>
      ),
    },
    {
      name: "OM PRAKASH JAJRA",
      rank: "CDT.",
      photo: require("../../Assests/OMPRAKASH.jpg"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Sub inspector (ITBP).
          </p>
          <p>
            <strong>Branch</strong> Mechanical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> omprakash020498@gmail.com
            <br />
            <strong>Mob:</strong> 9649194559
          </p>
        </>
      ),
    },
    {
      name: "SARITA YADAV",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Current:</strong> JEn.
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> sy15382ce2015@gmail.com
            <br />
            <strong>Mob:</strong> 7023389242
          </p>
        </>
      ),
    },
    {
      name: "PRAKASH SINGH",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Current:</strong> M.Tech (IIT BOMBAY).
          </p>
          <p>
            <strong>Branch</strong> Civil Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>E-mail</strong> 001prakhar@gmail.com
            <br />
            <strong>Mob:</strong> 7023509136
          </p>
        </>
      ),
    },
    {
      name: "SUSHIL KUMAR",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Basic computer Instructor.
          </p>
          <p>
            <strong>Branch</strong> Electronic & Communication engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> choudharysilu17@gmail.com
            <br />
            <strong>Mob:</strong> 7976868354
          </p>
        </>
      ),
    },
    {
      name: "YATENDRA KUMAR",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
          </p>
        </>
      ),
    },
    {
      name: "ASHOK",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Branch</strong> Production & Industrial Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>E-mail</strong> as16220pi2016@gmail.com
            <br />
            <strong>Mob:</strong> 9549439244
          </p>
        </>
      ),
    },
    {
      name: "PUSHPENDRA SINGH YADAV",
      rank: "CDT. SERGEANT",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Business.
          </p>
          <p>
            <strong>Branch</strong> Electrical Engineering
            <br />
            <strong>Batch</strong> 2014 - 2018
            <br />
            <strong>Mob:</strong> 8058865669
          </p>
        </>
      ),
    },
    {
      name: "PAMITA JAIN",
      rank: "CDT. SERGEANT",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>M.Tech: </strong>Power System <br />
            <strong>Current:</strong> Technical assistant in Ctae udaipur.
          </p>
          <p>
            <strong>Branch</strong> Electronics and Instrumentation Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>Mob:</strong> 8619669678
          </p>
        </>
      ),
    },
    {
      name: "ANJUL GARG",
      rank: "CDT.",
      photo: require("../../Assests/user.png"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Bank Manager (BGGB).
          </p>
          <p>
            <strong>Branch</strong> Production and Industrial Engineering
            <br />
            <strong>Batch</strong> 2014 - 2018
            <br />
            <strong>E-mail</strong> anjulgarg3295@gmail.com
            <br />
            <strong>Mob:</strong> 7240459104
          </p>
        </>
      ),
    },
    {
      name: "SAURAV",
      rank: "CWO",
      photo: require("../../Assests/saurav-kumar.jpg"),
      details: (
        <>
          <p>
            During college: <br />
            -AIVSC
            <br />
            -NIC
            <br />
            -PBC <br />
            -ALC <br />
          </p>
          <p>
            <strong>Current Job:</strong> Indian Army.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> 786saurav786@gmail.com
            <br />
            <strong>Mob:</strong> 7240459104
          </p>
        </>
      ),
    },
    {
      name: "DHWANI SHARMA",
      rank: "CDT. SGT.",
      photo: require("../../Assests/Dhwani Sharma.jpg"),
      details: (
        <>
        <p>
          Camps: <br/>
          -CATC<br/>
          -National<br/>
          -BLC<br/>
          -ALC
        </p>
          <p>
            <strong>Current Job:</strong> Analyst.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> sdhwani1997@gmail.com
            <br />
            <strong>Mob:</strong> 9588287709
          </p>
        </>
      ),
    },
    {
      name: "KRISHNA SHEKHAWAT",
      rank: "CDT.",
      photo: require("../../Assests/krishna shekhawat.jpg"),
      details: (
        <>
        <p>
          Camps: <br/>
          -BLC
        </p>
          <p>
            <strong>Current:</strong> Aeronautical Analyst.
          </p>
          <p>
            <strong>Branch</strong> Aeronautical Engineering
            <br />
            <strong>Batch</strong> 2015 - 2019
            <br />
            <strong>E-mail</strong> krishna134356@gmail.com
            <br />
            <strong>Mob:</strong> 9785134109
          </p>
        </>
      ),
    },
    {
      name: "SUSEEL KUMAR",
      rank: "CDT.",
      photo: require("../../Assests/Choudhary Silu.jpg"),
      details: (
        <>
          <p>
            <strong>Current:</strong> Govt. Teacher.
          </p>
          <p>
            <strong>Branch</strong> Electronics and Communication Engineering
            <br />
            <strong>Batch</strong> 2016 - 2020
            <br />
            <strong>E-mail</strong> choudharysilu17@gmail.com
            <br />
            <strong>Mob:</strong> 7976868354
          </p>
        </>
      ),
    }
  ];
  

  return (
    <div className="alumni-container">
      <NavBar />
      <p className="heading-title">ALUMNI</p>
      <div className="card-list">
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
