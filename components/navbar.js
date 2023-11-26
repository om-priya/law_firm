"use client";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <>
      <header className="flex items-center justify-between p-2 shadow-2xl">
        {/* logo */}
        <div className="flex items-center gap-2">
          <BsFire size={30} color="#7752FE" />
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold hover:scale-110 text-[#7752FE]">
              Law Locatus
            </h1>
          </Link>
        </div>

        {/* Navbar for mobile screens */}
        <button className="md:hidden" onClick={() => setHamburger(!hamburger)}>
          {hamburger ? <FaBars size={30} /> : <RxCross1 size={30} />}
        </button>
        {/* Navbar for big screens */}
        <nav className="hidden md:inline-block">
          <ul className="font-medium space-x-3">
            <Link className="hover:border-b-2" href={"/"}>
              <span className="hover:text-[#7752FE]">Home</span>
            </Link>
            <Link className="hover:border-b-2 hover:scale-110" href={"/about"}>
              <span className="hover:text-[#7752FE]">About</span>
            </Link>
            <Link className="hover:border-b-2 hover:scale-110" href={"/team"}>
              <span className="hover:text-[#7752FE]">Team</span>
            </Link>
            <Link
              className="hover:border-b-2 hover:scale-110"
              href={"/services"}
            >
              <span className="hover:text-[#7752FE]">Services</span>
            </Link>
            <Link className="hover:border-b-2 hover:scale-110" href={"/policy"}>
              <span className="hover:text-[#7752FE]">
                Disclaimer and Privacy Policy
              </span>
            </Link>
          </ul>
        </nav>
      </header>
      {!hamburger && (
        <ul className=" mt-4 font-medium flex flex-col min-w-full items-center gap-4 mb-6">
          <Link className="hover:border-b-2 hover:scale-110" href={"/"}>
            <span className="hover:text-[#7752FE]">Home</span>
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/about"}>
            <span className="hover:text-[#7752FE]">About</span>
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/team"}>
            <span className="hover:text-[#7752FE]">Team</span>
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/services"}>
            <span className="hover:text-[#7752FE]">Services</span>
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/policy"}>
            <span className="hover:text-[#7752FE]">
              Disclaimer and Privacy Policy
            </span>
          </Link>
        </ul>
      )}
    </>
  );
};

export default Navbar;
