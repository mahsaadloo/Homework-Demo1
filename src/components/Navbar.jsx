import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLE_CONTENT } from "../data";

const Navbar = () => {
  const [selectedTopic, setSelectedTopic] = useState("introduction");
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };
  return (
    <>
      <nav className="flex justify-between border border-rose-500 p-10 shadow bg-rose-50 items-center">
        <div className="font-semibold text-rose-400 text-3xl">
          Mahsa English
        </div>
        <div className="flex gap-2">
          <TabButton onSelect={() => handleSelect("introduction")}>
            Introduction
          </TabButton>
          <TabButton onSelect={() => handleSelect("about")}>About Us</TabButton>
          <TabButton onSelect={() => handleSelect("offered")}>
            Offered Classes
          </TabButton>
          <TabButton onSelect={() => handleSelect("contact")}>
            Contact Us
          </TabButton>
          <TabButton onSelect={() => handleSelect("register")}>
            Register
          </TabButton>
        </div>
      </nav>
      <div className="border-t border-rose-500 p-20 mt-10">
        <h3 className="text-2xl text-rose-400">
          {EXAMPLE_CONTENT[selectedTopic].title}
        </h3>
        <br />
        <p className="text-slate-400 font-semibold">
          {EXAMPLE_CONTENT[selectedTopic].desc}
        </p>
      </div>
    </>
  );
};

export default Navbar;
