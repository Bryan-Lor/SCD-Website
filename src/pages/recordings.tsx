import { NextPage } from "next";
import Footer from "~/components/Footer";
import HeaderTag from "~/components/HeaderTag";
import Modal from "~/components/Modal";
import Nav from "~/components/Nav";
import { useThemeContext } from "~/data/ThemeContext";

const Recordings: NextPage = () => {
  const { darkTheme } = useThemeContext();

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
              <h2 className="text-4xl">Recordings</h2>
              <div className="h-0.5 w-72 bg-white" />
            </div>
            <Modal title="Video Title" desc="Description goes here." />
          </div>
        </main>
        <Footer className="mx-auto lg:max-w-screen-xl" />
      </div>
    </>
  );
};

export default Recordings;
