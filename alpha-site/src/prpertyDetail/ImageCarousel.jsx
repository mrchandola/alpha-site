import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="swiper-button-next sw-btn border-0" onClick={onClick}>
      <i className="fa fa-long-arrow-right"></i>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="swiper-button-prev sw-btn border-0" onClick={onClick}>
      <i className="fa fa-long-arrow-left"></i>
    </button>
  );
};

const ImageCarousel = ({ medias, propertyName }) => {
  propertyName = propertyName.toLowerCase().replace(/\s+/g, "_");
  let MediaBaseUrl = `${process.env.PUBLIC_URL}/assets/united_kingdom_images/${propertyName}/property_images/`;

  const settings = {
    dots: false, // Enables navigation dots
    infinite: true, // Enables infinite scrolling
    speed: 600, // Slide transition speed
    slidesToShow: 1, // Show **one** image at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable navigation arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // Enables auto-play
    autoplaySpeed: 3000, // Auto-play speed (3 seconds)
    // fade: true, // Enables smooth fading effect
    // cssEase: "linear", // Ensures smooth animation
  };

  return (
    <div className="list-single-carousel-wrap fl-wrap" id="sec1">
      <Slider {...settings} className="fw-carousel fl-wrap full-height lightgallery">
        {medias.map((img, index) => (
          <div key={index} className="slick-slide-item">
            <div className="box-item" style={{marginLeft: "8%", marginRight: "8%"}}>
              <img
                src={`${MediaBaseUrl}${img.name}`}
                alt={`Slide ${index + 1}`}
                title={img.name}
                className="full-width-image"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
