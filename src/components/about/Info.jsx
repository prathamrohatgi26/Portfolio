import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Growth</h3>
        <span className="about__subtitle">3 Years Growing</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Learning</h3>
        <span className="about__subtitle">Always</span>
      </div>
    </div>
  );
};

export default Info;
