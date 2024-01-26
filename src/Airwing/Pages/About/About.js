import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../Components/Navbar/Nav";
import "../About/About.css";
import sevenraj from "../../Assests/img6.png";
import NCCAirwing from "../../Assests/7raj.jpg";
import img1 from "../../Assests/img1.png";
import img2 from "../../Assests/img2.png";
import img3 from "../../Assests/img3.png";
import img4 from "../../Assests/abdul.jpeg";
import img5 from "../../Assests/img5.png";
import img6 from "../../Assests/img6.png";
import img7 from "../../Assests/yogesh.jpeg";
import img8 from "../../Assests/img8.jpg"
import img9 from "../../Assests/img9.jpg"

function AboutAirwing() {
  const images = [img8, img2, img3, img4, img5, img6, img7, img1, img9];

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
    <div className="about-container">
      <NavBar />
      <p className="heading-title">ABOUT NCC</p>

      {/* Carousel Section */}
      <div className="caraousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* History of NCC Section */}
      <div className="history-of-airwingncc">
        <p className="heading-title2 pinline">History Of NCC</p>
        <div className="line"> </div>
        <div className="history">
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

      {/* About 7 Raj Air Sqn NCC Kota Section */}
      <div className="about-unit">
        <p className="heading-title2 pinline">7 RAJ AIR SQN NCC KOTA</p>
        <div className="seven-raj">
          <p>
            7 RAJ Air Sqn NCC was raised at Kota as 22 (Rajasthan) Air Sqn NCC.
            On the creation of the Directorate, the unit was renamed as 2 RAJ
            Air Sqn NCC sometime in 1964-65. On reorganisation of the
            Directorate, it was renamed as 7 Raj Air Sqn NCC possibly around
            1978.
          </p>
          <img alt="Seven Raj" src={NCCAirwing} />
          <div className="sub-sec">
            <h4 className="sub-head">Recruitment:</h4>
            <p>
              Recruitment into the NCC Air Wing happens during the start of
              every year. The procedure is common for all the enthusiastic
              students willing to join. Few rounds of the recruitment will be
              endurance test, fitness test, group discussion and interview.
            </p>
          </div>
          <div className="sub">
            <div className="sub-sec">
              <h4 className="sub-head">Centrally Organized Camps:</h4>
              <p>
                <ul className="sub-sec-list">
                  <li>Leadership Camps</li>
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
            <div className="sub-sec">
              <h4 className="sub-head">Training</h4>
              <p>
                The selected cadets will be given training that includes
                <li>Parade</li>
                <li>Running</li>
                <li>Technical Education</li>
                <li>Arms</li>
                <li>Drill</li>
                <li>Trekking</li>
                <li>Flying</li>
                <li>Aeromodelling</li>
                <li>Social Services</li>
                <li>games and many other disciplines.</li>
                <br />
                The training will be conducted by the PI staff with the help of
                senior cadets. The attitude of the cadets is well groomed so
                that they become well-furnished citizens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About NCC Air Wing RTU Kota Section */}
      <div className="about-airwingrtu">
        <p className="heading-title2 pinline">NCC AIR WING RTU, KOTA</p>
        <div className="aboutAirwing">
          <p>
            NCC Airwing RTU Kota is associated with 7 Raj Air Squadron Kota and
            has 100 open positions. 33 cadets are enrolled per year which
            includes Senior Division (SD) and Senior Wing (SW) from RTU.
          </p>
          <img alt="NCC Airwing" src={sevenraj} />

          <div className="sub-sec">
            <h4 className="sub-head">Institutional Classes</h4>
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
          <div className="sub-sec">
            <h4 className="sub-head">Officer’s Session </h4>
            <p>
              Officer’s sessions are organized timely by ANO to motivate cadets
              and to give them proper guidance regarding their career, to fill
              the cadets with enthusiasm and to make their vision clear
              regarding their future.
            </p>
          </div>
          <div className="sub-sec">
            <h4 className="sub-head">Tests and classes </h4>
            <p>
              Cadets are taught the books of NCC (Common and Special Book) and
              their tests are also taken timely. These books are important as
              these are required for B and C certificate examination and also
              important as aspect of national camps.
            </p>
          </div>
          <div className="sub-sec">
            <h4 className="sub-head">Blood Donation Camp</h4>
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

export default AboutAirwing;