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
      <CarouselProvider
        className="mx-auto hidden max-w-screen-xl lg:block"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={TeamData.length}
        visibleSlides={4}
        step={1}
        infinite={true}
      >
        <div className="relative mx-auto flex w-full items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
              >
                {/* Team Cards */}
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
            className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>

      {/* Carousel for tablet and medium size devices */}
      <CarouselProvider
        className="hidden md:block lg:hidden"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={TeamData.length}
        visibleSlides={2}
        step={1}
        infinite={true}
      >
        <div className="relative flex w-full items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
              >
                {/* Team Cards */}
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
            className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>

      {/* Carousel for mobile and Small size Devices */}
      <CarouselProvider
        className="block md:hidden "
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={TeamData.length}
        visibleSlides={1}
        step={1}
        infinite={true}
      >
        <div className="relative flex w-full items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8"
              >
                {/* Team Cards */}
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
            className="absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
      {/* Large Screen Devices min-w-1024px */}
      <TeamCarousel classNameExtra="hidden lg:flex" visibeSlides={4} step={4} />
      {/* Medium Screen Devices min-w-768px */}
      <TeamCarousel
        classNameExtra="hidden md:flex lg:hidden"
        visibeSlides={2}
        step={1}
      />
      {/* Small Screen Devices min-w-640px */}
      <TeamCarousel
        classNameExtra="hidden sm:flex md:hidden"
        visibeSlides={1}
        step={1}
      />
      {/* Shading */}
      <div
        className="absolute top-0 left-0 z-[0] h-full w-full mix-blend-multiply"
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
    </section>
  );
};

export default Team;

const TeamCarousel: React.FC<{
  classNameExtra?: string;
  visibeSlides?: number;
  step?: number;
}> = ({ classNameExtra, visibeSlides, step }) => {
  return (
    <CarouselProvider
      className={
        "relative z-[1] mx-auto flex h-full w-full items-center justify-center px-4 " +
        classNameExtra
      }
      naturalSlideWidth={300}
      naturalSlideHeight={430}
      isIntrinsicHeight={true}
      totalSlides={TeamData.length}
      // In order to have this be responsive, modify the visibleSlides and step
      visibleSlides={visibeSlides}
      step={step}
      infinite={true}
    >
      {/* Responsive Inner Container */}
      <div className="relative flex w-full items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <ButtonBack
          role="button"
          aria-label="slide backward"
          className="absolute left-0 z-[1] cursor-pointer p-5 text-3xl text-gray-300 hover:text-gray-200 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
          id="prev"
        >
          <MdChevronLeft />
        </ButtonBack>
        {/* Slider Container */}
        <div className="mx-auto h-full w-full overflow-hidden">
          <Slider>
            <div
              id="slider"
              className="flex h-full items-center justify-start transition duration-700 ease-out md:gap-8"
            >
              {/* Team Cards */}
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
          className="absolute right-0 z-[1] p-5 text-3xl text-gray-300 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          id="next"
        >
          <MdChevronRight />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
