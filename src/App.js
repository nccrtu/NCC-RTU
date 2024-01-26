import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Home/Home.js";
import Footer from "./Components/Footer/Footer";

// Importing Airwing components
import AboutAirwing from "./Airwing/Pages/About/About.js";
import EnrollPro from "./Airwing/Pages/InstitutionalCorner/EnrollProc/EnrollPro.js";
import AnoNcc from "./Airwing/Pages/InstitutionalCorner/AnoNcc/AnoNcc.js";
import CommonBook from "./Airwing/Pages/InstitutionalCorner/CommonBook/CommonBook.js";
import SpecialBook from "./Airwing/Pages/InstitutionalCorner/SpecialBook/SpecialBook.js";
import Presentations from "./Airwing/Pages/InstitutionalCorner/Presentations/Presentations.js";
import RankStructure from "./Airwing/Pages/InstitutionalCorner/RankStructure/RankStructure.js";
import Alumni from "./Airwing/Pages/Alumni/Alumni.js";
import AchievementsPage from "./Airwing/Pages/Achievements/Achievements.js";
import Activities from "./Airwing/Pages/Activities/Activities.js";

// Importing Armywing components
import AboutArmywing from "./Armywing/Pages/About/About.js";
import ArmyEnrollPro from "./Armywing/Pages/InstitutionalCorner/EnrollProc/EnrollPro.js";
import ArmyAnoNcc from "./Armywing/Pages/InstitutionalCorner/AnoNcc/AnoNcc.js";
import ArmyCommonBook from "./Armywing/Pages/InstitutionalCorner/CommonBook/CommonBook.js";
import ArmySpecialBook from "./Armywing/Pages/InstitutionalCorner/SpecialBook/SpecialBook.js";
import ArmyPresentations from "./Armywing/Pages/InstitutionalCorner/Presentations/Presentations.js";
import ArmyRankStructure from "./Armywing/Pages/InstitutionalCorner/RankStructure/RankStructure.js";
import ArmyAlumni from "./Armywing/Pages/Alumni/Alumni.js";
import ArmyAchievementsPage from "./Armywing/Pages/Achievements/Achievements.js";
import ArmyActivities from "./Armywing/Pages/Activities/Activities.js";

// Main App component
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />

        {/* Airwing Routes */}
        <Route path="/airwing/about" element={<AboutAirwing />} />
        <Route path="/airwing/enrollmentProcedure" element={<EnrollPro />} />
        <Route path="/airwing/anoNccHandbook" element={<AnoNcc />} />
        <Route path="/airwing/commonBook" element={<CommonBook />} />
        <Route path="/airwing/specialBook" element={<SpecialBook />} />
        <Route path="/airwing/presentations" element={<Presentations />} />
        <Route path="/airwing/rankStructure" element={<RankStructure />} />
        <Route path="/airwing/alumni" element={<Alumni />} />
        <Route path="/airwing/achievements" element={<AchievementsPage />} />
        <Route path="/airwing/activities" element={<Activities />} />


        {/* Armywing Routes */}
        <Route path="/armywing/about" element={<AboutArmywing/>}/>
        <Route path="/armywing/enrollmentProcedure" element={<ArmyEnrollPro/>}/>
        <Route path="/armywing/anoNccHandbook" element={<ArmyAnoNcc/>}/>
        <Route path="/armywing/commonBook" element={<ArmyCommonBook/>}/>
        <Route path="/armywing/specialBook" element={<ArmySpecialBook/>}/>
        <Route path="/armywing/presentations" element={<ArmyPresentations/>}/>
        <Route path="/armywing/rankStructure" element={<ArmyRankStructure/>}/>
        <Route path="/armywing/alumni" element={<ArmyAlumni/>}/>
        <Route path="/armywing/achievements" element={<ArmyAchievementsPage/>}/>
        <Route path="/armywing/activities" element={<ArmyActivities/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
