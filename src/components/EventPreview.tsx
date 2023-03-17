import WeeklySchedule from "./WeeklySchedule";

const EventPreview: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-center">
        <WeeklySchedule />
      </div>
    </section>
  );
};

export default EventPreview;
