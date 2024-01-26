import React from "react";
import "../EnrollProc/EnrollProc.css";
import NavBar from "../../../Components/Navbar/Nav";

function EnrollPro() {
  return (
    <div className="enrollProc-container">
      <NavBar/>
      <p className="heading-title">Enrollment Procedure</p>

      <div className="enrollPro">
        <p>
          The National Cadet Corps (NCC) is a youth development movement in
          India. It has a large membership of student youth in high schools,
          colleges, and universities all over India. The members of the corps
          receive basic military training in small arms and parades.
        </p>

        <div className="prolist">
          <ol style={{ listStyleType: "none" }}>
            <li>
              {" "}
              <h3>Google form filling:</h3> Students have to fill the google
              form which includes their personal details and some personality
              questions.
            </li>
            <li>
              {" "}
              <h3>Selection Process:</h3> The selection process includes some
              steps which are as follows:-
            </li>
          </ol>

          <ol className="list2" style={{ listStyleType: "lower-alpha" }}>
            <li>
              {" "}
              <h4>Physical Test:</h4> All the students have to go through the
              physical test firstly which includes running, push-ups etc.{" "}
            </li>
            <li>
              {" "}
              <h4>Communication :</h4> A communication test is also taken in
              which a group discussion is held between the students to check
              their awareness and thought process.{" "}
            </li>
            <li>
              {" "}
              <h4>Written Test :</h4> A Written test is also held which includes
              general knowledge, basic knowledge and history of NCC and some
              questions from content which will be provided earlier with the
              form only.
            </li>
            <li>
              {" "}
              <h4>Interview :</h4> A personal interview is taken by senior
              cadets to go through your personality.{" "}
            </li>
          </ol>

          <ol style={{ listStyleType: "none" }}>
            <li>
              {" "}
              <h3>Enrollment:</h3> Once you are selected, you'll be enrolled as
              a cadet in the NCC. The enrollment process includes filling up
              required forms and submission of necessary documents.
            </li>
            <li>
              {" "}
              <h3>Training:</h3> After enrollment, cadets undergo training with
              the NCC, which includes drill, weapon training, map reading, first
              aid, and other aspects of military training.
            </li>
            <li>
              {" "}
              <h3>Exams & Certifications:</h3> During your time in the NCC, you
              will be required to take exams for 'B' and 'C' Certificates based
              on your NCC division (senior or junior). These certificates have
              value for recruitment in Indian Armed Forces and several other
              government jobs.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default EnrollPro;
