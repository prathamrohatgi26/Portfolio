import React from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <div className="work__img-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="work__img"
          loading="lazy"
        />
        <div className="work__overlay">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className="work__overlay-btn"
          >
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      <div className="work__info">
        <h3 className="work__title">{item.title}</h3>
      </div>
    </div>
  );
};

export default WorkItems;
