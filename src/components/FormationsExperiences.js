import React from "react";
import "./FormationsExperiences.css";
import DataFormations from "../datas/Formations";
import Formations from "./Formations";
import DataExperiences from "../datas/Experiences";
import Experiences from "./Experiences";

function FormationsExperiences() {
  console.log(DataFormations);
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  );
}

export default FormationsExperiences;
