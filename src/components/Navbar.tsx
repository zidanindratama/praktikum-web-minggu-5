import React from "react";
import { links } from "../data/mock-data";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Pertemuan 5</div>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="hover:text-gray-300">
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
