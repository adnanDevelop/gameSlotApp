import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sideBar, showSideBar] = useState<boolean>(false);

  const links = [
    { name: "Rewards", path: "#hero", icon: <GoGift /> },
    { name: "Raffles", path: "#about", icon: <IoTicketOutline /> },
    { name: "Leaderboard", path: "#service", icon: <BsTrophy /> },
    { name: "store", path: "#blog", icon: <AiOutlineShoppingCart /> },
  ];

  useEffect(() => {
    const windowScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && window.scrollY > 50) {
        document.querySelector("nav")?.classList.add("nav-hide");
        document.querySelector("nav")?.classList.remove("nav-show");
      } else {
        document.querySelector("nav")?.classList.add("nav-show");
        document.querySelector("nav")?.classList.remove("nav-hide");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", windowScroll);

    return () => window.removeEventListener("scroll", windowScroll);
  }, [lastScrollY]);

  // Sidebar function
  const openSidebar = () => {
    showSideBar(!sideBar);
    setOpen(!open);
  };

  return (
    <div className="relative">
      {/* Large screen Navbar */}
      <nav className="w-full transitions lg:h-auto h-[60px] lg:flex-none flex items-center justify-center absolute top-0 left-0 z-[10] bg-gradient-to-b from-[#000000fb] to-[#ffffff07]">
        <div className="flex items-center justify-between custom-width ">
          {/* Logo section */}
          <div
            data-aos="zoom-in-out"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <a
              href="#hero"
              className="flex items-center justify-center text-white gap-2 text-xl font-semibold tracking-[2px]"
            >
              <span className="w-[100px] h-[32px] flex items-center justify-center text-black bg-yellow rounded-sm">
                GAME{" "}
              </span>{" "}
              SLOT
            </a>
          </div>

          {/* Links */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center">
              {links.map((link, index: number) => (
                <p
                  data-aos="zoom-in-out"
                  data-aos-duration={0.5 * index}
                  data-aos-easing="linear"
                >
                  <a
                    href={link?.path}
                    key={index}
                    className="transitions lg:text-sm text-xs text-[#848895] cursor-pointer font-medium uppercase xl:p-[25px] lg:p-[20px] tracking-[2px] block hover:text-yellow hover:bg-[#d9d9d940]"
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <p className="flex items-center gap-2 mb-0">
                      <span className="text-lg">{link?.icon}</span> {link?.name}
                    </p>
                  </a>
                </p>
              ))}
            </div>
          </div>
          {/* Nav Button */}
          <div className="hidden nav_btn lg:block">
            <button className="text-white border transitions flex items-center gap-2 hover:text-yellow hover:border-yellow hover:scale-[1.04] border-white rounded-sm px-[35px] py-[10px] bg-transparent text-sm tracking-[2px] font-semibold ">
              <FaArrowRightToBracket /> LOGIN
            </button>
          </div>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              type="button"
              className="flex flex-col hamburger "
              onClick={openSidebar}
            >
              <span
                className={`w-[30px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out mb-1.5 ${
                  open
                    ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                    : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out mb-1.5 ${
                  open ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                  open
                    ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      <div>
        <div
          className={`fixed md:w-[250px] w-[85%] h-screen bg-dark-blue rounded-tr-xl top-0 transitions overflow-y-auto z-[60] bg-[#1B1919] ${
            sideBar ? " left-[0%]" : "left-[-200%]"
          } `}
        >
          {/* Logo section */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between menu_header p-[20px]">
                <div className="logo ">
                  <a
                    href="#hero"
                    className="flex items-center justify-center text-white gap-2 text-base font-semibold tracking-[2px]"
                  >
                    <span className="w-[70px] h-[32px] flex items-center justify-center text-black bg-yellow rounded-sm">
                      GAME{" "}
                    </span>{" "}
                    SLOT
                  </a>
                </div>
                <button
                  className="close_btn text-[16px] text-white p-2 border  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
                  onClick={() => {
                    showSideBar(false);
                    setOpen(false);
                  }}
                >
                  <GrClose />
                </button>
              </div>
              {/* Link */}
              <ul className="list-none gap-y-6 mt-[20px]">
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className=" transitions hover:bg-black hover:text-yellow text-[#848895] px-[20px] py-[15px] uppercase "
                    >
                      <a
                        href={link?.path}
                        key={index}
                        className="block"
                        onClick={() => {
                          showSideBar(false);
                          setOpen(false);
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        <p className="flex items-center gap-5 mb-0">
                          <span className="text-lg">{link?.icon}</span>{" "}
                          {link?.name}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Login button */}
            <div className="p-[20px]">
              <button className="text-white border transitions gap-2 hover:text-yellow hover:border-yellow hover:scale-[1.04] border-white rounded-sm w-full flex items-center justify-center py-[10px] bg-transparent text-xs tracking-[2px] font-semibold ">
                <FaArrowRightToBracket /> LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
