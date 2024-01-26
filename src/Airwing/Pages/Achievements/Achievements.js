import React from "react";
import "../Achievements/Achievements.css";
import NavBar from "../../Components/Navbar/Nav";

const AchievementsPage = () => {
  return (
    <div>
      <NavBar/>
      <p className="heading-title">ACHIEVEMENTS</p>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h3>Attended AIVSC 2022</h3>
                <ul>
                  <li>CSUO Krishnkant Dixit</li>
                  <li>
                    CWO Dharmendra Singh
                  </li>
                  <li>CDT SGT Darpan Agrawal</li>
                  <li>CDT SGT Tejas Prajapati</li>
                  <li>CDT CPL Saniya Ali</li>
                </ul>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h3>Attended AIVSC 2023</h3>
                <ul>
                  <li>CDT SGT Priya Gupta</li>
                  <li>CDT SGT Gopendra Singh</li>
                  <li>CDT SGT Keshav Vijay</li>
                  <li>CDT SGT Harsh Vardhan Jhala</li>
                  <li>CDT SGT Deepali Thakur</li>
                  <li>CDT SGT Khushboo Goyal</li>
                  <li>CDT SGT Jaya Dhakar</li>
                  <li>CDT SGT Rishiraj Singh</li>
                </ul>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h3>Individual Achievements</h3>
                <ul>
                  <li>CWO Dharmendra Singh (Part of KARTAVYA PATH in RDC 2023)</li>
                  <li>CSUO Krishnkant Dixit (Attended AFA 2023)</li>
                  <li>CDT SGT Gopendra Singh (Part of PM RALLY in RDC 2024)</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
