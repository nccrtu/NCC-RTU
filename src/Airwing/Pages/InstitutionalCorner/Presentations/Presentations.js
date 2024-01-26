import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Presentations/Presentations.css";
import NavBar from "../../../Components/Navbar/Nav";

const Presentations = () => {
  const presentations = [
    {
      url: "https://docs.google.com/presentation/d/1EG8HwKJsSKBsZFdgo8roGLk-OmRiuuzN/embed?start=true&loop=true&delayms=5000",
      title: "NCC Airwing",
    },
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
      <p className="heading-title">Presentations</p>

      <div className="Presentation-container">
        <Slider ref={sliderRef} {...settings}>
          {presentations.map((presentation, index) => (
            <div key={index} className="presentation">
              <p className="heading-title2 pinline">{presentation.title}</p>
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