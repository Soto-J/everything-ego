import React from "react";
import Container from "../Container";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white shadow-md">
      <div className="border-b-[1px] py-4">
        <Container>
          <div
            className="
              flex 
              flex-row 
              items-center 
              justify-between 
              gap-3 
              font-semibold
              lg:gap-0
            "
          >
            <h1 className="flex items-center gap-1 ">
              <span
                className="
                  border-r-[2px] 
                  border-r-black 
                  pr-1 
                  text-4xl 
                  font-bold
                "
              >
                EGO
              </span>{" "}
              A Gift To The Soul
            </h1>

            <NavLinks />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
