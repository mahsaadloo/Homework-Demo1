import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between border border-rose-500 p-10 shadow bg-rose-100 items-center">
      <div className="font-semibold text-rose-600 text-2xl">Mahsa English</div>
      <div className="flex gap-5">
        <button>Introduction</button>
        <button>About Us</button>
        <button>Contact Us</button>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
