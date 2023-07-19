import useNavDropDown from "@/app/hooks/useNavDropDown";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
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
      {isOpen ? <AiOutlineClose /> : <BsMusicNoteList />}
    </div>
  );
};

export default NavButton;
