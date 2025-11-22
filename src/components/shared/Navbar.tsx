import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavbarProps {
  onDonateClick?: () => void;
}

const Navbar = ({ onDonateClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "trasparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  function displayModal() {
    if (onDonateClick) {
      onDonateClick();
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" id="nav">
      <div className="md:flex-center gap-30  relative  px-8 hidden ">
        <ul className="flex gap-10 text-sm text-white">
          <Link to="/">
            <li className="nav-hover-btn">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-hover-btn">About</li>
          </Link>
          <Link to="/ministry">
            <li className="nav-hover-btn">Mandate</li>
          </Link>
        </ul>
        <div className="relative ">
          <div className="size-20 text-purple-100 ml-4">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className=" font-bold tracking-[-0.015em] left-5/150 top-2 absolute text-center text-white/80">
            <p className="text-3xl">CACYOF</p>
            <p className="text-lg -mt-2">Medaiyese</p>
          </h2>
        </div>
        <ul className="flex gap-10 text-sm text-white">
          <Link to="/media">
            <li className="nav-hover-btn">Media</li>
          </Link>
          <Link to="/contact">
            <li className="nav-hover-btn">Contact</li>
          </Link>

          <button className="nav-hover-btn" onClick={displayModal}>
            Donate Now
          </button>
        </ul>
      </div>
      <div className="md:hidden py-2 flex justify-between items-center px-2">
        <div className="relative ">
          <div className="size-20 text-purple-100 ml-4">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className=" font-bold tracking-[-0.015em] left-5/150 top-2 absolute text-center text-white/80">
            <p className="text-3xl">CACYOF</p>
            <p className="text-lg -mt-2">Medaiyese</p>
          </h2>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent border-none"
        >
          <FaBars size={40} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/80 text-white p-4 rounded-md z-50">
          <ul className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="text-left text-xl hover:text-purple-100">Home</li>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <li className="text-left text-xl hover:text-purple-100">About</li>
            </Link>
            <Link to="/ministry" onClick={() => setIsOpen(false)}>
              <li className=" text-left text-xl hover:text-purple-100">
                Mandate
              </li>
            </Link>
            <Link to="/media" onClick={() => setIsOpen(false)}>
              <li className=" text-left text-xl hover:text-purple-100">
                Media
              </li>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <li className="text-left text-xl hover:text-purple-100">
                Contact
              </li>
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                displayModal();
              }}
              className="hover:scale-105 text-xl font-bold border py-2 rounded-full hover:bg-purple-100"
            >
              Donate Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
