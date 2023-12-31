import useNavDropDown from "@/app/hooks/useNavDropDown";
import Link from "next/link";

const MobileLinks = () => {
  const { isOpen } = useNavDropDown();

  return (
    <div
      className={`
        translate
        absolute
        right-3
        top-16
        rounded-md
        bg-red-500
        p-4
        shadow-md
        duration-300
        md:right-10
        lg:hidden
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        ${isOpen ? "opacity-100" : "opacity-0"}
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      <ul
        className={`
        gap-5
        lg:flex
        lg:flex-row
        lg:items-center
      `}
      >
        <li>
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
            href="calander"
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
            className="transition duration-200 hover:text-neutral-500"
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileLinks;
