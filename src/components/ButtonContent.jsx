import React from "react";
import { EXAMPLE_CONTENT } from "../data";

const ButtonContent = ({ selectedTopic }) => {
  return (
    <div className="border-t border-rose-500 p-20 mt-10">
      {selectedTopic ? (
        <div>
          <h3 className="text-2xl text-rose-400">
            {EXAMPLE_CONTENT[selectedTopic].title}
          </h3>
          <br />
          <p className="text-slate-400 font-semibold">
            {EXAMPLE_CONTENT[selectedTopic].desc}
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-center text-rose-500 font-extrabold">
            Welcome! My name is Mahsa.
          </h3>
          <div className="flex justify-center pt-10">
            <img src="./student.png" alt="student" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonContent;
