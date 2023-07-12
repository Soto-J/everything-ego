import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="hidden gap-5 lg:flex">
      <li className="">
        <Link
          href="/"
          className="transition duration-200 hover:text-neutral-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition duration-200 hover:text-neutral-500"
        >
          Biography
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition duration-200 hover:text-neutral-500"
        >
          Calander
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition duration-200 hover:text-neutral-500"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition duration-200 hover:text-neutral-500"
        >
          Galary
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="duration-200hover:text-neutral-500 transition"
        >
          Testimonials
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
