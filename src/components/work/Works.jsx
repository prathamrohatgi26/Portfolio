import React from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {

  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
