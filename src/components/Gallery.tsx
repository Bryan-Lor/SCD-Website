import { GalleryImages } from "~/data/GalleryImages";

const Gallery: React.FC = () => {
  const BigBoxClass =
    "min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded-[0.2rem] bg-gray-500 object-cover object-center shadow-sm lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-105 ";
  const SmallBoxClass =
    "min-h-48 aspect-square h-full w-full rounded-[0.2rem] bg-gray-500 object-cover object-center shadow-sm lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-105";
  return (
    <section
      className={"py-16"}
      // style={{
      //   background:
      //     "linear-gradient(to bottom, #b5bdc8 0%,#828c95 36%,#28343b 100%)",
      //   // "linear-gradient(180deg, rgba(30,30,36,1) 0%, rgba(27,40,28,1) 49%, rgba(50,68,46,1) 100%)",
      // }}
    >
      <h3 className="sr-only">Photo Gallery</h3>
      <div className="mx-auto grid max-w-screen-sm grid-cols-2 gap-4 p-4 md:max-w-screen-md md:grid-cols-4 lg:max-w-screen-xl lg:px-4">
        <img
          src={GalleryImages[0]?.url}
          alt={GalleryImages[0]?.desc}
          className={BigBoxClass + "md:col-start-3 md:row-start-1"}
        />

        <img
          src={GalleryImages[1]?.url}
          alt={GalleryImages[1]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[2]?.url}
          alt={GalleryImages[2]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[3]?.url}
          alt={GalleryImages[3]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[4]?.url}
          alt={GalleryImages[4]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[5]?.url}
          alt={GalleryImages[5]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[6]?.url}
          alt={GalleryImages[6]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[8]?.url}
          alt={GalleryImages[8]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[9]?.url}
          alt={GalleryImages[9]?.desc}
          className={SmallBoxClass}
        />
        <img
          src={GalleryImages[7]?.url}
          alt={GalleryImages[7]?.desc}
          className={BigBoxClass + "md:col-start-1 md:row-start-3"}
        />
      </div>
    </section>
  );
};

export default Gallery;
