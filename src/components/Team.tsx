import Image from "next/image";
import TeamData from "~/data/TeamData";

const Team: React.FC = () => {
  return (
    <>
      {/* <div className="relative h-[37.5rem] w-screen flex-col items-center justify-center bg-red-500 align-middle"> */}
      <div
        className="relative w-screen flex-col items-center justify-center object-cover pb-12 align-middle"
        style={{ backgroundImage: "url('bg.webp')" }}
      >
        <h3 className="relative z-[1] py-4 text-center text-2xl text-white">
          Meet The Team
        </h3>
        <div className="relative z-[1] flex w-full items-center justify-center ">
          <div className="flex w-[102rem] snap-mandatory snap-proximity snap-start gap-8 overflow-x-scroll text-black">
            {TeamData.map((person) => (
              <TeamCard
                key={person.email}
                firstName={person.firstName}
                lastName={person.lastName}
                role={person.role}
                imgSrc={person.imgSrc}
                email={person.email}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, #2f2f2f 0%, #646464 11.98%, rgba(255, 255, 255, 0) 42.19%",
          }}
        ></div>
      </div>
    </>
  );
};
export default Team;

interface member {
  firstName: string;
  lastName: string;
  role: string;
  imgSrc: string;
  email: string;
}

const TeamCard: React.FC<member> = ({
  firstName,
  lastName,
  role,
  imgSrc,
  email,
}) => {
  return (
    <div>
      <div className="h-[26.875rem] w-[18.75rem] bg-white">
        <Image
          className="h-[18.75rem] w-full object-cover"
          width={300}
          height={300}
          src={imgSrc}
          alt={"Picture of SCD " + role}
        />
        <div className="p-4 capitalize">
          <h4>
            <b>{firstName}</b> {lastName}
          </h4>
          <h5>{role}</h5>
          <h5>{email}</h5>
        </div>
      </div>
    </div>
  );
};
