import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FaWindowClose } from "react-icons/fa";

const Nav = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const stickyActive = () => {
    if (window.scrollY > 0) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    stickyActive();
  }, []);

  window.addEventListener("scroll", stickyActive);

  return (
    <header
      className={`padding-x py-8 absolute z-[99] w-full ${
        stickyMenu ? "sticky" : ""
      }`}
    >
      <nav
        className="flex justify-between items-center max-container"
        onClick={() => setMenuToggle(true)}
      >
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* ABOVE 1024 */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* BELOW 1024 */}
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} alt="hamburger menu" width={25} height={25} />
        </div>
      </nav>

      <div
        className={`small-nav h-full w-[20rem] bg-coral-red fixed top-0 right-[-105%] hidden max-lg:block px-9 pt-20 ${
          menuToggle ? "active" : ""
        }`}
      >
        <FaWindowClose
          className="absolute right-[3rem] top-[2rem] text-white cursor-pointer text-3xl"
          onClick={() => setMenuToggle(false)}
        />
        <ul className="">
          {navLinks.map((item) => (
            <li key={item.label} className="mb-4">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-white"
                onClick={() => setMenuToggle(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
