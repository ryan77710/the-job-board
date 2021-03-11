import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="jobs">
      <Job
        className="job red"
        title={"Full Time Sales Associate - Sydney Boutique"}
        contrat={"CDI - "}
        contry={"Australie - "}
        city={"Sydney"}
      />
      <Job
        className="job green"
        title={"Agent de Sécurité - Pantin"}
        contrat={"CDI - "}
        contry={"France - "}
        city={"Pantin"}
      />
      <Job
        className="job yellow"
        title={"Responsable d'Atelier (H/F)"}
        contrat={"CDD - "}
        contry={"France - "}
        city={"Paris"}
      />
      <Job
        className="job blue"
        title={"Chef de Projets"}
        contrat={"CDD - "}
        contry={"France - "}
        city={"Paris"}
      />
      <Job
        className="job pink"
        title={"Dévelopeur Réact.js"}
        contrat={"CDI - "}
        contry={"France - "}
        city={"Paris"}
      />
      <Job
        className="job red"
        title={"Sales Associate Stockholm"}
        contrat={"CDI - "}
        contry={"Suède - "}
        city={"Stockholm"}
      />
      <Job
        className="job green"
        title={"Vendeur/se - Crans Montana"}
        contrat={"CDI - "}
        contry={"Suisse - "}
        city={"Crans-Montana"}
      />
      <Job
        className="job yellow"
        title={"CRM & Data Quality Analyst"}
        contrat={"CDI - "}
        contry={"USA - "}
        city={"New York"}
      />
      <Job
        className="job blue"
        title={"Infirmier (H/F)"}
        contrat={"CDI - "}
        contry={"France - "}
        city={"Pantin"}
      />
    </div>
  );
};

export default Jobs;
