import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

interface HeaderContent {
  title: string;
  path: string;
}

const Header: NextPage = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const listContent: HeaderContent[] = [
    { title: "Home", path: "#home" },
    { title: "Our Service", path: "#service" },
    { title: "Project", path: "#project" },
    { title: "About Us", path: "#about" },
  ];

  return (
    <>
      <header className="bg-gray-100">
        <div className="flex flex-row justify-between items-center px-4 md:px-12 py-4">
          <h2 className="font-medium text-2xl">Aftercode</h2>
          <div className="md:hidden cursor-pointer flex justify-center items-center">
            <Image
              src="/icons/menu-icon.svg"
              alt="menu-icon"
              width={24}
              height={24}
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            />
          </div>
          <ul className="hidden md:flex flex-row space-x-8 items-center">
            {listContent.map((item, index) => {
              return (
                <li key={index} className="font-medium cursor-pointer">
                  {item.title}
                </li>
              );
            })}
            <button className="font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md hover:opacity-75 duration-500">
              Get In Touch
            </button>
          </ul>
        </div>
      </header>
      <CSSTransition
        classNames="mobile-menu"
        in={isMobileMenu}
        timeout={300}
        unmountOnExit
      >
        <div
          className="md:hidden bg-white fixed top-0 left-0 right-0 p-4 z-10 transition ease-in-out"
          style={{
            height: "100vh",
          }}
        >
          <div className="flex justify-end cursor-pointer">
            <Image
              src="/icons/close-icon.svg"
              alt="close-icon"
              width={18}
              height={18}
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            />
          </div>
          <h2 className="font-medium text-2xl text-center">Aftercode</h2>
          <ul className="flex flex-col space-y-4 justify-center mt-8">
            {listContent.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-lg font-medium cursor-pointer hover:text-violet-500 duration-500"
                >
                  {item.title}
                </li>
              );
            })}
            <button className="font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md hover:opacity-75 duration-500">
              Get In Touch
            </button>
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default Header;
