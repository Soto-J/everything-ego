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
        flex
        h-10
        w-10
        cursor-pointer
        items-center 
        justify-center 
        rounded-full 
        border-2
        border-black
        p-2
        transition 
        duration-200 
        focus:outline-none 
        lg:hidden
      "
    >
      {isOpen ? <AiOutlineClose size={20} /> : <BsMusicNoteList size={20} />}
    </div>
  );
};

export default NavButton;
