import { MdOutlineArrowRightAlt } from "react-icons/md";
import WeeklySchedule from "./WeeklySchedule";

const EventPreview: React.FC<{ darkTheme: boolean }> = ({
  darkTheme = true,
}) => {
  return (
    <section
      className={
        "mx-auto flex flex-col items-center justify-center align-middle " +
        "bg-white"
        // (darkTheme ? "bg-heroDark" : "bg-hero")
      }
    >
      <div className="mx-auto flex flex-col justify-start py-8 px-8 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center md:py-4 md:px-2 lg:max-w-screen-xl">
        <h3>Weekly Events</h3>
        <hr className="pb-2" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          duis ultricies lacus sed turpis tincidunt. Dignissim convallis aenean
          et tortor at risus viverra.
        </p>
        <button className="justify center my-4 inline-flex w-96 items-center bg-white py-2 text-center align-middle mix-blend-difference sm:mb-2 md:mb-8">
          <p className="flex-1 text-xl">View More</p>
          <MdOutlineArrowRightAlt className="mx-6 text-3xl" />
        </button>
      </div>
      <WeeklySchedule />
      {/* </div> */}
    </section>
  );
};

export default EventPreview;
