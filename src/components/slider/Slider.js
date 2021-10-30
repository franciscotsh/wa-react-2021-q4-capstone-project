import { React, useEffect } from "react";
import "./slider.scss";

const Slider = (props) => {
  let slides = props.slides;

  var slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    let slideArr = [...slides];
    var dots = document.querySelectorAll(".dot");
    if (n === "undefined" || slideArr.length === 0) {
      return;
    }

    if (n > slideArr.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slideArr.length;
    }
    for (i = 0; i < slideArr.length; i++) {
      slideArr[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slideArr[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => {
          return (
            <div className="mySlides fade" key={slide.id}>
              <div className="numbertext">
                {index + 1} / {slides.length}
              </div>
              <img
                src={slide.data.main_image.url}
                style={{ width: "100%" }}
                alt="test"
              />
              <div className="text">{slide.data.title}</div>
            </div>
          );
        })}
        <span
          className="prev"
          onClick={(e) => {
            plusSlides(-1);
          }}
        >
          &#10094;
        </span>
        <span
          className="next"
          onClick={(e) => {
            plusSlides(1);
          }}
        >
          &#10095;
        </span>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        {slides.map((element, index) => {
          return (
            <span
              key={index}
              className="dot"
              onClick={(e) => {
                currentSlide(index + 1);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
