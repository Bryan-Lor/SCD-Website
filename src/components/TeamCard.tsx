import Image from "next/image";

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
    // lg:hover:scale-105 <-- For Hover Responsiveness
    <div className="relative flex-shrink-0 flex-grow overflow-hidden rounded-[0.2rem] bg-white">
      <div className="w-[18.75rem relative h-[18.75rem] overflow-hidden">
        <Image
          className="object-cover object-center transition duration-[225ms] ease-in md:hover:scale-105"
          fill
          src={imgSrc}
          alt={"Picture of SCD " + role}
        />
      </div>
      <div className="relative w-full p-4 capitalize">
        <h4>
          <b>{firstName}</b> {lastName}
        </h4>
        <h5 className="">{role}</h5>
        <h5 className="normal-case">{email}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
