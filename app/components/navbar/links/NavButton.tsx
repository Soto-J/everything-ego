import useNavDropDown from "@/app/hooks/useNavDropDown";
import React, { use, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavButton = () => {
  const { isOpen, onClose, onOpen } = useNavDropDown();

  return (
    <div
      onClick={isOpen ? onClose : onOpen}
      className="
          cursor-pointer 
          rounded-full 
          border-2 
          p-2 
          transition 
          duration-200 
          focus:outline-none 
          lg:hidden"
    >
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </div>
  );
};

export default NavButton;
