import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { PageLinks } from "~/data/Links";
import WeeklySchedule, { EventPing } from "./WeeklySchedule";

const EventPreview: React.FC = () => {
  return (
    <section
      className={
        "mx-auto flex items-center justify-center align-middle " + "bg-white "
      }
      style={{
        background: "linear-gradient(150deg, #f2f2f2, #ffffff)",
      }}
    >
      <div className="mx-auto flex flex-col justify-start py-8 px-8 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center md:py-4 md:px-2 lg:max-w-screen-xl lg:flex-row-reverse">
        <div>
          <h3 className="">Join Our Events</h3>
          <hr className="pb-2" />
          <p className="">
            Participate in engaging activities, including project showcases,
            coding practice, and industry speaker sessions. We also offer
            skill-building workshops, hackathons, and social events to keep
            things exciting. Don&#39;t miss the chance to meet like-minded
            individuals, learn new skills, and have fun!
          </p>
          <Link
            href={PageLinks.events}
            className="justify center my-4 inline-flex w-full items-center bg-white py-2 px-6 text-center align-middle mix-blend-difference duration-700 lg:w-96 lg:hover:w-full"
          >
            <p className="flex-1 text-xl">View More</p>
            <MdOutlineArrowRightAlt className="text-3xl" />
          </Link>
          <div className="pointer-events-none flex flex-col lg:mb-2 lg:flex-row lg:gap-4">
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
              Game Night, Fridays - 6pm EST
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
