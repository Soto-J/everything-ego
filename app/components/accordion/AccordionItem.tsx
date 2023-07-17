import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Collapse } from "react-collapse";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div
        onClick={toggleAccordion}
        className="
          flex
          items-center
          justify-between
          overflow-hidden
          border-2
          p-4
        "
      >
        <h3 className="font-semibold">{title}</h3>
        <div
          className={`
            cursor-pointer 
            transition 
            duration-300
            ${isOpen && "rotate-90"}
          `}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="px-4 py-2">{content}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
