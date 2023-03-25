// import Link from "next/link";

const Modal: React.FC<{ title: string; desc: string }> = ({ title, desc }) => {
  const showMenu = () => {
    console.log("Clicked Show Menu");
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={showMenu}
        className="absolute top-48 z-0 rounded bg-gray-800 py-2 px-7 text-base text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
      >
        Open
      </button>

      <div
        id="menu"
        className="sticky-0 fixed top-0 h-full w-full bg-gray-900 bg-opacity-80"
      >
        <div className="flex  items-center justify-center py-48 px-4 2xl:container md:px-28 2xl:mx-auto">
          <div className="relative flex w-96 flex-col items-center justify-center bg-gray-800 py-16 px-4 md:w-auto md:px-24 xl:py-24 xl:px-36">
            <div role="banner">Video</div>
            <div className="mt-12">
              <h2
                role="title"
                className="text-difference font-semibold leading-7 lg:leading-9"
              >
                {title}
              </h2>
            </div>
            <div className="mt">
              <p className="text-difference text-center text-base leading-7">
                {desc}
              </p>
            </div>
            {/* People */}
            {/* <div className="mt">
              <p className="text-difference text-center text-base leading-7">
                {desc}
              </p>
            </div> */}
            {/* Date */}
            {/* <div className="mt">
              <p className="text-difference text-center text-base leading-7">
                {desc}
              </p>
            </div> */}
            <button
              onClick={showMenu}
              className="text-difference absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              aria-label="close"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
