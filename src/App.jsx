import React from "react";
import Navbar from "./components/Navbar";
import PersonCard from "./components/PersonCard";
import { persons } from "./data/mock-data";
import Count from "./components/Count";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col w-full max-w-7xl mx-auto mt-20 p-6">
        <Count />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {persons.map((person) => {
            return <PersonCard key={person.id} person={person} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
