import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="text-sm">Copyright © 2023 ÉGO</div>
      <div className="flex gap-3 text-xl">
        <Link href="https://www.youtube.com/@eazy360" target="_blank">
          <BsYoutube />
        </Link>
        <Link href="https://linkedin.com">
          <BsLinkedin />
        </Link>
        <Link href="https://facebook.com">
          <BsFacebook />
        </Link>
        <Link href="https://instagram.com">
          <BsInstagram />
        </Link>
        <Link href="https://twitter.com">
          <BsTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
