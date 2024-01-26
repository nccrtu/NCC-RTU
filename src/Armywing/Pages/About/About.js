import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../Components/Navbar/Nav";
import "./About.css";
import fourteenraj from "../../Assests/14raj.jpg";
import NCCArmywing from "../../Assests/nccarmy.jpg";
import img1 from "../../Assests/img1.jpg";
import img2 from "../../Assests/img2.jpg";
import img3 from "../../Assests/img3.jpg";
import img4 from "../../Assests/img4.jpg";
import img5 from "../../Assests/img6.jpg";
import img6 from "../../Assests/img7.jpeg";

function AboutArmywing() {
  const images = [img1, img2, img3, img4, img5, img6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="army-about-container">
      <NavBar />
      <p className="army-heading-title">ABOUT NCC</p>

      <div className="army-caraousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>


      <div>
        <p className="army-heading-title2 army-pinline">History Of NCC</p>
        <div className="army-history">
          <p>
            The NCC in India was formed in 1948. It can be traced back to the
            ‘University Corps’, which was created under the Indian Defence Act
            1917. In 1920, when the Indian Territorial Act was passed, the
            ‘University Corps’ was replaced by the University Training Corps
            (UTC). The first Prime Minister of India, Pandit Jawaharlal Nehru
            presided over the function of raising the first NCC Unit at Delhi on
            the last Sunday of Nov. 1948. This day is traditionally celebrated
            as the 'NCC Day'. In 1949, the Girls Division was formed in order to
            provide equal opportunities to school and college-going girls. The
            Air Wing of the National Cadet Corps (NCC) was established on April
            1, 1950, with one Air Squadron each in Bombay and Kolkata and
            followed by the Naval Wing in 1952. Same year, the NCC curriculum
            was extended to include community development/social service
            activities as a part of the NCC syllabus at the behest of Late
            Pandit Jawaharlal Nehru who took keen interest in the growth of the
            NCC. <br /> Following the 1962 Sino-Indian War, to meet the
            requirement of the Nation, the NCC training was made compulsory in
            1963. In 1968, the Corps was again made voluntary. During
            Indo-Pakistani war of 1965 & Bangladesh-Pakistani war of 1971, NCC
            cadets were second line of defense. They organized camp to assist
            ordnance factories, supplying arms and ammunition to the front and
            also were used as patrol parties to capture enemy paratroopers. The
            NCC cadets also worked hand in hand with the Civil defence
            authorities and actively took part in rescue works and traffic
            control. After 1965 and 1971 wars NCC syllabus was revised. Rather
            than just being second line of defence, NCC syllabus laid greater
            stress on developing quality of leadership and officer like
            qualities. The military training which the NCC cadets received was
            reduced and greater importance was given to other areas like social
            service and youth management.
          </p>
        </div>
      </div>


      <div >
        <p className="army-heading-title2 army-pinline">14 RAJ BATTALION NCC, KOTA</p>
        <div className="army-fourteen-raj">
          <p>
            The 14 Rajasthan Battalion of the National Cadet Corps (NCC) is a
            regional unit based in Kota Group, Rajasthan Directorate, India. NCC
            battalions like this one typically conduct various activities such
            as training camps, drills, and community service to instill values
            of discipline, leadership, and patriotism among the cadets. The
            cadet strength in 14 Raj Bn NCC is around 2200 cadets, highest among
            all the battalions of Kota group.
          </p>
          <img alt="Fourteen Raj" src={fourteenraj} />
          <div className="army-sub-sec">
            <h4 className="army-sub-head">Recruitment:</h4>
            <p>
              Recruitment into NCC Army Wing happens in the mid of year.the
              process is same for all the intrested students willing to join
              NCC.
              <br />
              The selection process includes:
              <br />
              1. Physical test
              <br /> 2. Written paper <br />
              3. Interview round
            </p>
          </div>
          <div className="army-sub">
            <div className="army-sub-sec">
              <h4 className="army-sub-head">Centrally Organized Camps:</h4>
              <p>
                <ul className="army-sub-sec-list">
                  <li>Youth Ecxhnage Programme (YEP)</li>
                  <li>All India Vayu Sainik Camp</li>
                  <li>Rock Climbing Camps</li>
                  <li>Trekking Camps</li>
                  <li>National Integration Camps</li>
                  <li>Airforce Attachment Camp (AAC)</li>
                  <li>Republic Day Camp (RDC)</li>
                  <li>Annual training Camp(ATC)</li>
                  <li>YOUTH EXCHANGE PROGRAMME (YEP)</li>
                  <li>Paratroopers Camps</li>
                </ul>
              </p>
            </div>
            <div className="army-sub-sec">
              <h4 className="army-sub-head">Training</h4>
              <p>
                The selected cadets will be given training that includes
                <li>Parade</li>
                <li>Physical Training</li>
                <li>Technical Education</li>
                <li>Arms</li>
                <li>Drill</li>
                <li>Firing</li>
                <li>SSB Training</li>
                <li>games and other activities.</li>
                <li>
                  Social Services like: Blood donation, Plantation drive,
                  Orphanage visit, Puneet Sagar Abhitan, Swatchta Rally.
                </li>
                The training will be condected by PI staff with the help of
                senior cadets.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <p className="army-heading-title2 army-pinline">NCC ARMY WING, KOTA</p>
        <div className="aboutArmywing">
          <p>There are 18 cadets are enrolled per year.</p>
          <img alt="NCC Airwing" src={NCCArmywing} />

          <div className="army-sub-sec">
            <h4 className="army-sub-head">Institutional Classes</h4>
            <p>
              This is the most important aspect of NCC Training and hence great
              emphasis on institutional training to be given. These classes are
              scheduled and conducted by ANO and senior cadets of NCC. In these
              classes, the cadets are introduced to activities of NCC. The
              cadets are taught drill , discipline , effective communication and
              sports. The cadets are also given training of SSB tests like
              Thematic Apperception Test (TAT), Word Assessment Test (WAT),
              Situation Reaction Test (SRT), Self-Description Test (SDT) .
            </p>
          </div>
          <div className="army-sub-sec">
            <h4 className="army-sub-head">Officer’s Session </h4>
            <p>
              Officer’s sessions are organized timely by ANO to motivate cadets
              and to give them proper guidance regarding their career, to fill
              the cadets with enthusiasm and to make their vision clear
              regarding their future.
            </p>
          </div>
          <div className="army-sub-sec">
            <h4 className="army-sub-head">Tests and classes </h4>
            <p>
              Cadets are taught the books of NCC (Common and Special Book) and
              their tests are also taken timely. These books are important as
              these are required for B and C certificate examination and also
              important as aspect of national camps.
            </p>
          </div>
          <div className="army-sub-sec">
            <h4 className="army-sub-head">Blood Donation Camp</h4>
            <p>
              NCC plays a vital role in many social activities like this. The
              blood donation camps are often organized in the college. Cadets
              take great part in it and manage it as well. The students and
              professors of college take immense part in it.{" "}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutArmywing;