import React from "react";
import TabButton from "./TabButton";

const Navbar = ({ selectedTopic, onSelectButton }) => {
  return (
    <>
      <nav className="flex justify-between border border-rose-500 p-10 shadow bg-rose-50 items-center">
        <div className="font-semibold text-rose-400 text-3xl">
          Mahsa English
        </div>
        <div className="flex gap-2">
          <TabButton
            isSelected={selectedTopic === "introduction"}
            onSelect={() => onSelectButton("introduction")}
          >
            Introduction
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "about"}
            onSelect={() => onSelectButton("about")}
          >
            About Us
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "offered"}
            onSelect={() => onSelectButton("offered")}
          >
            Offered Classes
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "contact"}
            onSelect={() => onSelectButton("contact")}
          >
            Contact Us
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "register"}
            onSelect={() => onSelectButton("register")}
          >
            Register
          </TabButton>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
