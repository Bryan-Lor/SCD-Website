import Link from "next/link";

const Modal: React.FC = () => {
  const menu = document.getElementById("menu");
  const showMenu = () => {
    menu?.classList.toggle("hidden");
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
          <div className="relative flex w-96 flex-col items-center justify-center bg-white py-16 px-4 dark:bg-gray-800 md:w-auto md:px-24 xl:py-24 xl:px-36">
            <div role="banner">Image</div>
            <div className="mt-12">
              <h1
                role="main"
                className="text-center text-3xl font-semibold leading-7 text-gray-800 dark:text-white lg:text-4xl lg:leading-9"
              >
                Video Title
              </h1>
            </div>
            <div className="mt">
              <p className="mt-6 text-center text-base leading-7 text-gray-800 dark:text-white sm:w-80">
                Please, accept these sweeties to continue enjoying our site!
              </p>
            </div>
            <button className="mt-14 w-full bg-gray-800 py-6 px-16 text-center text-base leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 sm:w-auto">
              Mmm... Sweet!
            </button>
            <Link
              href="javascript:void(0)"
              className="mt-6 border-b border-transparent text-center text-base leading-none text-gray-800 hover:border-gray-800 focus:border-gray-800 focus:outline-none dark:text-white dark:hover:border-white"
            >
              Nope.. I am on a diet
            </Link>
            <button
              onClick={showMenu}
              className="absolute top-8 right-8 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-gray-400"
              aria-label="close"
            >
              BUTTON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
