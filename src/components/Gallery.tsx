const Gallery: React.FC<{ darkTheme?: boolean }> = ({ darkTheme }) => {
  return (
    <section
      className={
        "text-difference py-16 " + (darkTheme ? "bg-heroDark" : "bg-hero")
      }
      style={{
        background:
          "linear-gradient(to bottom, #b5bdc8 0%,#828c95 36%,#28343b 100%)",
        // "linear-gradient(180deg, rgba(30,30,36,1) 0%, rgba(27,40,28,1) 49%, rgba(50,68,46,1) 100%)",
      }}
    >
      <h3 className="sr-only">Photo Gallery</h3>
      <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/301x301/"
          alt=""
          className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded  bg-gray-500 shadow-sm transition duration-500 ease-in-out hover:scale-105 md:col-start-3 md:row-start-1"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded  bg-gray-500 shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded  bg-gray-500 shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?3"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?4"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?5"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?6"
        />
        <img
          alt=""
          className="min-h-48 aspect-square h-full w-full rounded bg-gray-500  shadow-sm  transition duration-500 ease-in-out hover:scale-105"
          src="https://source.unsplash.com/random/200x200/?7"
        />
        <img
          src="https://source.unsplash.com/random/302x302/"
          alt=""
          className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded bg-gray-500 shadow-sm transition duration-500 ease-in-out hover:scale-105 md:col-start-1 md:row-start-3"
        />
      </div>
    </section>
  );
};

export default Gallery;
