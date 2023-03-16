import { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import TeamData from "~/data/TeamData";
import TeamCard from "./TeamCard";

/* Using pure-react-carousel with modified carousel provided by tailwind ui kit */

const Team: React.FC<{ darkTheme?: boolean }> = ({ darkTheme }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    console.log("Window Width " + windowWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Window Width " + windowWidth);
    };
  }, []);

  return (
    <section
      className="relative w-full px-24 pb-12"
      style={{
        backgroundImage: "url('bg.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "contain",
      }}
    >
      <h3 className="relative z-[1] py-6 text-center text-xl uppercase text-white">
        Meet our team
        <hr className="mx-auto w-[20rem]" />
      </h3>
      <div
        className="absolute top-0 left-0 h-full w-full mix-blend-multiply"
        style={
          darkTheme
            ? {
                background:
                  "linear-gradient(180deg, #2f2f2f 0%, #646464 11.98%, rgba(255, 255, 255, 0) 42.19%",
              }
            : {
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #CDCDCD 24.48%, rgba(255, 255, 255, 0) 62.5%)",
              }
        }
      />
      <CarouselProvider
        className="mx-auto flex h-full w-full items-center justify-center bg-blue-500 px-4"
        naturalSlideWidth={300}
        naturalSlideHeight={430}
        isIntrinsicHeight={true}
        totalSlides={TeamData.length}
        // visibleSlides={4}
        visibleSlides={windowWidth >= 768 ? 4 : 1}
        step={windowWidth >= 768 ? 4 : 1}
        // step={4}
        infinite={true}
      >
        <div className="relative flex w-full max-w-screen-xl items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute left-0 z-30 cursor-pointer p-5 text-3xl text-gray-300 hover:text-gray-200 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            id="prev"
          >
            <MdChevronLeft />
          </ButtonBack>
          <div className="mx-auto h-full w-full overflow-hidden">
            <Slider>
              <div
                id="slider"
                className="flex h-full items-center justify-start gap-8 px-14 transition duration-700 ease-out"
              >
                {TeamData.map((person, index) => (
                  <Slide index={index}>
                    <TeamCard
                      key={person.email}
                      firstName={person.firstName}
                      lastName={person.lastName}
                      role={person.role}
                      imgSrc={person.imgSrc}
                      email={person.email}
                    />
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute right-0 z-30 p-5 text-3xl text-gray-300 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="next"
          >
            <MdChevronRight />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
};

export default Team;
