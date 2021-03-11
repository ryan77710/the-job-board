import React from "react";
import Title from "./Title";
import Contrat from "./Contrat";
import Contry from "./Contry";
import City from "./City";

const Job = (props) => {
  return (
    <div className={props.className}>
      <Title title={props.title} />
      <div className="ligne2">
        <Contrat contrat={props.contrat} />
        <Contry contry={props.contry} />
        <City city={props.city} />
      </div>
    </div>
  );
};

export default Job;
