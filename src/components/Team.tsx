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

/* Using pure-react-carousel*/

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

      {/* Extra Large Screen Devices min-w-1024px */}
      <TeamCarousel
        className="relative z-[1] mx-auto hidden max-w-screen-xl xl:block"
        visibeSlides={4}
        step={4}
      />
      {/* Large Screen Devices min-w-1024px */}
      <TeamCarousel
        className="relative z-[1] mx-auto hidden max-w-screen-xl lg:block xl:hidden"
        visibeSlides={3}
        step={3}
      />
      {/* Medium Screen Devices min-w-768px */}
      <TeamCarousel
        className="relative z-[1] hidden md:block lg:hidden"
        visibeSlides={2}
      />
      {/* Small Screen Devices min-w-640px */}
      <TeamCarousel className="relative z-[1] block md:hidden" />

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
  className?: string;
  visibeSlides?: number;
  step?: number;
}> = ({ className, visibeSlides, step }) => {
  return (
    <CarouselProvider
      className={className}
      naturalSlideWidth={300}
      naturalSlideHeight={430}
      isIntrinsicHeight={true}
      totalSlides={TeamData.length}
      visibleSlides={visibeSlides ? visibeSlides : 1}
      step={step ? step : 1}
      infinite={true}
      isPlaying={true}
    >
      <div className="relative flex w-full items-center justify-center">
        <ButtonBackSlide />
        <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
          <Slider>
            <div
              id="slider"
              className="flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8"
            >
              {/* Team Cards */}
              {TeamData.map((person, index) => (
                <Slide key={index} index={index}>
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
        <ButtonNextSlide />
      </div>
    </CarouselProvider>
  );
};

const ButtonBackSlide: React.FC = () => {
  return (
    <ButtonBack
      role="button"
      aria-label="slide backward"
      className="absolute left-0 z-30 ml-8 cursor-pointer text-3xl text-gray-300 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      id="prev"
    >
      <MdChevronLeft />
    </ButtonBack>
  );
};

const ButtonNextSlide: React.FC = () => {
  return (
    <ButtonNext
      role="button"
      aria-label="slide forward"
      className="absolute right-0 z-30 mr-8 text-3xl text-gray-300 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      id="next"
    >
      <MdChevronRight />
    </ButtonNext>
  );
};
