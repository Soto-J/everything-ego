import React, { useState } from "react";
import Link from "next/link";

const DesktopLinks = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <ul
      className="
        hidden
        gap-5
        lg:flex
        lg:flex-row
        lg:items-center
      "
    >
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
          href="/biography"
          className="transition duration-200 hover:text-neutral-500"
        >
          Biography
        </Link>
      </li>
      <li>
        <Link
          href="/calander"
          className="transition duration-200 hover:text-neutral-500"
        >
          Calander
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="transition duration-200 hover:text-neutral-500"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/galary"
          className="transition duration-200 hover:text-neutral-500"
        >
          Galary
        </Link>
      </li>
      <li>
        <Link
          href="/testimonials"
          className="duration-200hover:text-neutral-500 transition"
        >
          Testimonials
        </Link>
      </li>
    </ul>
  );
};

export default DesktopLinks;
