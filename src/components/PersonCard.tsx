import React from "react";
import { Person } from "../interface/interface";

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <div className="bg-white shadow-sm drop-shadow-md p-8 rounded-md hover:bg-blue-200">
      <h1 className="text-lg font-bold">{person.name}</h1>
      <h3 className="font-semibold text-blue-500 my-3">{person.npm}</h3>
      <p className="text-justify">{person.bio}</p>
    </div>
  );
};

export default PersonCard;
