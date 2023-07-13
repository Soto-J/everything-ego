"use client";
import NavButton from "./links/NavButton";
import DesktopLinks from "./links/DesktopLinks";
import MobileLinks from "./links/MobileLinks";

const NavLinks = () => {
  return (
    <>
      <DesktopLinks />
      <MobileLinks />
      <NavButton />
    </>
  );
};

export default NavLinks;
