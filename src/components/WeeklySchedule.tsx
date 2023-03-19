const WeeklySchedule: React.FC = () => {
  const curr: Date = new Date();
  const currDate: number = curr.getDate();
  const eventDates: string[] = ["Mon", "Thu", "Fri"];
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const week: number[] = [];

  for (let i = 1; i <= 7; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).getDate();
    week.push(day - 1);
  }

  return (
    <>
      <div className="mx-auto flex justify-start py-4 px-2 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center lg:max-w-screen-xl">
        {weekDays.map((dateName: string, index: number) => (
          <CalendarDate
            key={index}
            isCurrentDate={currDate === week[index]}
            isEventDate={eventDates.includes(dateName)}
            eventColor={
              dateName === eventDates[0]
                ? "bg-yellow-500"
                : dateName === eventDates[1]
                ? "bg-purple-500"
                : "bg-red-500"
            }
            eventBrightColor={
              dateName === eventDates[0]
                ? "bg-yellow-300"
                : dateName === eventDates[1]
                ? "bg-purple-300"
                : "bg-red-300"
            }
            dateName={dateName}
            dateNum={week[index]}
          />
        ))}
      </div>
    </>
  );
};

export default WeeklySchedule;

// Calendar Date Element --------------------------------------------
const CalendarDate: React.FC<{
  isCurrentDate: boolean;
  isEventDate?: boolean;
  eventColor?: string;
  eventBrightColor?: string;
  dateName: string;
  dateNum: number | undefined;
}> = ({
  isCurrentDate = false,
  isEventDate = false,
  eventColor = "",
  eventBrightColor = "",
  dateName,
  dateNum,
}) => {
  const dateClass =
    "relative hover-light-shadow group mx-1 flex w-11 sm:w-12 md:w-16  cursor-pointer justify-center rounded-lg transition-all duration-300 md:hover:bg-[#EEFFEB] md:hover:shadow-lg";
  const eventDateClass =
    "light-shadow group relative mx-1 flex w-11 sm:w-12 md:w-16 cursor-pointer content-center justify-center rounded-lg outline outline-1 outline-gray-200 bg-[#CBFFC0] shadow-lg";
  const currentDateClass =
    "light-shadow group relative mx-1 flex w-11 sm:w-12 md:w-16 cursor-pointer content-center justify-center rounded-lg bg-[#9BF788] shadow-lg ";

  return (
    <div
      className={
        isCurrentDate
          ? currentDateClass
          : isEventDate
          ? eventDateClass
          : dateClass
      }
    >
      {isEventDate ? (
        <EventPing color={eventColor} colorBright={eventBrightColor} />
      ) : null}
      <div className="flex items-center px-2 py-2 sm:px-2 sm:py-2 md:px-4 md:py-4">
        <div className="text-center">
          <p className="text-sm text-gray-300 mix-blend-difference transition-all duration-300">
            {dateName}
          </p>
          <p className="mt-3 text-gray-300 mix-blend-difference transition-all duration-300 md:group-hover:font-bold">
            {dateNum}
          </p>
        </div>
      </div>
    </div>
  );
};

// Calendar Event Ping Element --------------------------------------------
export const EventPing: React.FC<{
  className?: string;
  color: string;
  colorBright: string;
}> = ({ className, color, colorBright }) => {
  return (
    <span
      className={
        className ? className : "absolute -top-1 -right-1 flex h-3 w-3"
      }
    >
      <span
        className={
          className
            ? ""
            : "absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 md:group-hover:opacity-75 " +
              colorBright
        }
      ></span>
      <span
        className={"relative inline-flex h-3 w-3 rounded-full " + color}
      ></span>
    </span>
  );
};
