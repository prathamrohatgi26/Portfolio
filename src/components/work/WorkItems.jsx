import React from "react";
import "./work.css";

const WorkItems = ({ item, index }) => {
  return (
    <div className="work__card" key={index}>
      <img src={item.image} alt={item.title} className="work__img" loading="lazy" />
      <h3 className="work__title">{item.title}</h3>
      <a target="_blank" href={item.link} className="work__button">
        demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
