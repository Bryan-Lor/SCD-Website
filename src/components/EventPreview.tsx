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
      <div className="lg:max-w-screenxl mx-auto flex flex-col justify-start py-4 px-2 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center">
        <h3>Weekly Events</h3>
        <hr className="pb-2" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          duis ultricies lacus sed turpis tincidunt. Dignissim convallis aenean
          et tortor at risus viverra.
        </p>
        <button>View More</button>
      </div>
      <WeeklySchedule />
      {/* </div> */}
    </section>
  );
};

export default EventPreview;
