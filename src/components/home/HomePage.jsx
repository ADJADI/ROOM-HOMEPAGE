import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import bedroom from "../../../../images/image-about-dark.jpg";
import chair from "../../../../images/image-about-light.jpg";
import PropTypes from "prop-types";

export default function HomePage({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="items-center h-screen justify-center text-[12px] lg:flex ">
      <div className="flex flex-col min-h-screen md:min-h-0 md:h-full md:max-h-[800px] lg:grid lg:grid-cols-quatro lg:grid-rows-duo ">
        <section className="flex flex-col col-span-2 w-full relative">
          <div className="absolute top-0 w-full">
            <Navbar />
          </div>
          {window.innerWidth < 575 ? (
            <img
              src={currentSlide.img_url.mobile}
              alt={currentSlide.alt}
              className=" object-cover"
            />
          ) : (
            <img
              src={currentSlide.img_url.desktop}
              alt={currentSlide.alt}
              className=" h-full "
            />
          )}
          {!windowWidth.innerWidth < 1024 ? (
            <div className="absolute bottom-0 right-0 lg:hidden">
              <div className=" flex ">
                <button
                  className="bg-black  w-12 h-12 md:w-[71px] md:h-[68px] flex items-center justify-center  hover:opacity-50"
                  onClick={prevSlide}
                >
                  <svg
                    width="14"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" />
                  </svg>
                </button>
                <button
                  className="bg-black w-12 h-12 md:w-[71px] md:h-[68px] flex items-center justify-center  hover:opacity-50"
                  onClick={nextSlide}
                >
                  <svg
                    width="14"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className=""></div>
          )}
        </section>
        <section className="col-span-2 h-full flex flex-col flex-grow-0 justify-center gap-5 py-20 px-5  lg:p-20 lg:relative">
          <h2 className="font-semibold text-xl lg:text-3xl lg:font-bold">
            {currentSlide.title}
          </h2>
          <p>{currentSlide.article}</p>
          <button className="flex items-center gap-5 font-semibold">
            <span>S H O P</span>
            <span>N O W</span>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
              />
            </svg>
          </button>
          <div className="hidden absolute lg:block lg:bottom-0 lg:right-0 xl:left-0 xl:right-auto">
            <div className="flex ">
              <button
                className="bg-black w-12 h-12 md:w-[71px] md:h-[68px] flex items-center justify-center  hover:opacity-50"
                onClick={prevSlide}
              >
                <svg
                  width="14"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" />
                </svg>
              </button>
              <button
                className="bg-black w-12 h-12 md:w-[71px] md:h-[68px] flex items-center justify-center   hover:bg-opacity-50 "
                onClick={nextSlide}
              >
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="h-full">
          <img src={bedroom} alt="" className=" object-cover h-full w-full" />
        </section>
        <section className="col-span-2 h-full flex flex-col gap-2 justify-center py-10 px-5 lg:px-10">
          <h2 className="font-bold text-sm tracking-widest [word-spacing:7px]">
            ABOUT OUR FURNITURE
          </h2>
          <p className="opacity-70">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
        <section className="">
          <img src={chair} alt="" className="min-h-full w-full" />
        </section>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      img_url: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};
