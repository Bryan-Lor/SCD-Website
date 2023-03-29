import { NextPage } from "next";
import { useState } from "react";
import Footer from "~/components/Footer";
import HeaderTag from "~/components/HeaderTag";
import Modal from "~/components/Modal";
import Nav from "~/components/Nav";
import { useThemeContext } from "~/data/ThemeContext";

const Recordings: NextPage = () => {
  const { darkTheme } = useThemeContext();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((current) => !current);
  };

  return (
    <>
      <HeaderTag />
      <div
        className={
          "flex min-h-screen flex-col " +
          (darkTheme ? "bg-heroDark" : "bg-hero")
        }
      >
        <Nav />
        <main className="flex h-full w-full flex-1 justify-center align-middle">
          <div className="flex max-w-screen-sm flex-col gap-6 overflow-y-auto py-4 px-6 md:max-w-screen-md lg:max-w-screen-xl lg:px-6">
            <div className="text-difference flex flex-col items-center justify-center align-middle">
              <h2 className="text-4xl">Archived Recordings</h2>
              <div className="h-0.5 w-72 bg-white" />
            </div>
            <button
              // onClick={() => setShowModal((current) => !current)}
              onClick={toggleModal}
              className="absolute top-48 z-0 rounded bg-gray-800 py-2 px-7 text-base text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              Video1
            </button>
            {showModal ? (
              <Modal
                title="Video Title"
                desc="Description goes here."
                showMenu={toggleModal}
              />
            ) : null}
          </div>
        </main>
        <Footer className="mx-auto lg:max-w-screen-xl" />
      </div>
    </>
  );
};

export default Recordings;
