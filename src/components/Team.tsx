import Image from "next/image";
import TeamData from "~/data/TeamData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Team: React.FC = () => {
  return (
    <>
      <div
        className="relative w-screen flex-col items-center justify-center object-contain pb-12 align-middle"
        style={{
          backgroundImage: "url('bg.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      >
        <h3 className="relative z-[1] py-4 text-center text-2xl text-white">
          Meet The Team
          <hr className="w-[20rem]" style={{ margin: "0 auto" }} />
        </h3>
        <div className="relative z-[1] flex w-full items-center justify-center ">
          <div
            className="flex h-[28rem] w-[8rem] justify-center bg-red-500 text-center align-middle"
            style={{ marginLeft: "auto", marginRight: "0" }} //FIX THIS I AM TRYING TO ALIGN LEFT ARROW TO RIGHT SIDE
          >
            <MdChevronLeft className="self-center bg-purple-500" size={40} />
          </div>
          <div className="flex w-[102rem] snap-mandatory snap-proximity snap-start gap-8 overflow-y-hidden overflow-x-scroll scroll-smooth text-black">
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

          <div className="flex h-[28rem] w-[8rem] justify-center bg-red-500 text-center align-middle">
            <MdChevronRight className="self-center bg-purple-500" size={40} />
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
      <div className="h-[26.875rem] w-[18.75rem] bg-white duration-200 hover:scale-110">
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
          <h5 className="normal-case">{email}</h5>
        </div>
      </div>
    </div>
  );
};
