const WeeklySchedule: React.FC = () => {
  const curr: Date = new Date();
  const currDate: number = curr.getDate();
  const eventDates: string[] = ["Mon", "Thu", "Fri"];
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const week: number[] = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).getDate();
    week.push(day - 1);
  }

  const dateClass =
    "hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg transition-all duration-300 hover:bg-[#C3FAB8] hover:shadow-lg";
  const eventDateClass =
    "light-shadow group relative mx-1 flex w-16 cursor-pointer content-center justify-center rounded-lg bg-[#86D376] shadow-lg";

  return (
    <>
      <div className="lg:max-w-screenxl mx-auto flex justify-start py-4 px-2 sm:max-w-screen-sm md:mx-12 md:max-w-screen-md md:justify-center">
        {weekDays.map((dateName: string, index: number) => (
          <CalendarDate
            isCurrentDate={currDate === week[index]}
            isEventDate={eventDates.includes(dateName)}
            eventColor={
              dateName === eventDates[0]
                ? "bg-green-400"
                : dateName === eventDates[1]
                ? "bg-red-400"
                : "bg-purple-400"
            }
            eventBrightColor={
              dateName === eventDates[0]
                ? "bg-green-500"
                : dateName === eventDates[1]
                ? "bg-red-500"
                : "bg-purple-500"
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

const CalendarDate: React.FC<{
  isCurrentDate: boolean;
  isEventDate?: boolean;
  eventColor?: string;
  eventBrightColor?: string;
  dateName: string;
  dateNum: number;
}> = ({
  isCurrentDate = false,
  isEventDate = false,
  eventColor = "",
  eventBrightColor = "",
  dateName,
  dateNum,
}) => {
  const dateClass =
    "hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg transition-all duration-300 hover:bg-[#C3FAB8] hover:shadow-lg";
  const eventDateClass =
    "light-shadow group relative mx-1 flex w-16 cursor-pointer content-center justify-center rounded-lg bg-[#86D376] shadow-lg";

  return (
    <div className={isCurrentDate ? eventDateClass : dateClass}>
      {isEventDate ? (
        <EventPing color={eventColor} colorBright={eventBrightColor} />
      ) : null}
      <div className="flex items-center px-4 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-900 transition-all duration-300">
            {dateName}
          </p>
          <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold">
            {dateNum}
          </p>
        </div>
      </div>
    </div>
  );
};

const EventPing: React.FC<{ color: string; colorBright: string }> = ({
  color,
  colorBright,
}) => {
  return (
    <span className="absolute -top-1 -right-1 flex h-3 w-3">
      <span
        className={
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 group-hover:opacity-75 " +
          colorBright
        }
      ></span>
      <span
        className={"relative inline-flex h-3 w-3 rounded-full " + color}
      ></span>
    </span>
  );
};
