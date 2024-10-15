import React from "react";
import "./qual.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active "
                : "qualification__button "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech (CCE)</h3>
                <span className="qualification__subtitle">
                  Manipal University Jaipur
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th (PCM+IP)</h3>
                <span className="qualification__subtitle">
                  Dayawati Modi Academy, Meerut
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th CBSE</h3>
                <span className="qualification__subtitle">
                  Dayawati Modi Academy, Meerut
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active button--flex"
                : "qualification__content button--flex"
            }
          >

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Developer - Frontend
                </h3>
                <span className="qualification__subtitle">LENS Corporation</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> June 2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Developer Intern
                </h3>
                <span className="qualification__subtitle">LENS Corporation</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Nov 2022 - May 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Developer Intern
                </h3>
                <span className="qualification__subtitle">OpenSense Labs</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Jan 2022 - Apr 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cloud Intern, AWS</h3>
                <span className="qualification__subtitle">Siemens</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> July 2021 - Oct 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
