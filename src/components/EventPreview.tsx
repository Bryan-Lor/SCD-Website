import { MdOutlineArrowRightAlt } from "react-icons/md";
import WeeklySchedule, { EventPing } from "./WeeklySchedule";

const EventPreview: React.FC<{ darkTheme: boolean }> = ({
  darkTheme = true,
}) => {
  return (
    <section
      className={
        "mx-auto flex items-center justify-center align-middle " + "bg-white "
        // (darkTheme ? "bg-heroDark" : "bg-hero")
        // (darkTheme ? "bg-white" : "bg-gray-900")
      }
    >
      <div className="mx-auto flex flex-col justify-start py-8 px-8 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center md:py-4 md:px-2 lg:max-w-screen-xl lg:flex-row-reverse">
        <div>
          <h3 className="">Join Our Events</h3>
          <hr className="pb-2" />
          <p className="">
            Join our weekly coding and game nights to engage with like-minded
            individuals, sharpen your skills, and have fun! Don't miss out on
            other opportunities to grow your network and participate in our
            community.
          </p>
          <button className="justify center mb-8 mt-4 inline-flex w-full items-center bg-white py-2 px-6 text-center align-middle mix-blend-difference lg:w-96">
            <p className="flex-1 text-xl">View More</p>
            <MdOutlineArrowRightAlt className="text-3xl" />
          </button>
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <p>
              <EventPing
                className={"px-2"}
                color={"bg-yellow-500"}
                colorBright={"bg-yellow-400"}
              />
              Coding Night, Mondays - 8pm EST
            </p>
            <p>
              <EventPing
                className={"px-2"}
                color={"bg-red-500"}
                colorBright={"bg-red-400"}
              />
              Game Night, Firdays - 6pm EST
            </p>
          </div>
        </div>

        <div className="my-auto">
          <WeeklySchedule />
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
