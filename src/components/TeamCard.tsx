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
    <div className="relative w-full flex-shrink-0 flex-grow overflow-hidden bg-white md:w-auto">
      <Image
        className="h-[18.75rem] w-full object-cover object-center"
        width={300}
        height={300}
        src={imgSrc}
        alt={"Picture of SCD " + role}
      />
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
