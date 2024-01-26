import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Presentations/Presentations.css";
import NavBar from "../../../Components/Navbar/Nav";

const Presentations = () => {
  const presentations = [
    {
      url: "https://docs.google.com/presentation/d/1uCiaKf30bOo7tmuM31Yi1HfBDBNOdf85/edit?usp=sharing&ouid=110537621047665377781&rtpof=true&sd=true&delayms=5000",
      title: "Intoductory Session",
    }
    // Add more presentation links here
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically go to the next slide every 5 seconds
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <NavBar />
      <p className="army-heading-title">Presentations</p>

      <div className="army-Presentation-container">
      <Slider ref={sliderRef} {...settings}>
        {presentations.map((presentation, index) => (
          <div key={index} className="army-presentation">
            <p>{presentation.title}</p>
            <iframe
              title={`presentation-${index}`}
              src={presentation.url}
              width="100%"
              height="500px"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Presentations;