import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./qual.css";

gsap.registerPlugin(ScrollTrigger);

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const sectionRef = useRef(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".qualification__data", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [toggleState]);

  return (
    <section className="qualification section" ref={sectionRef}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* ===== EDUCATION ===== */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">B.Tech (CCE)</h3>
                <span className="qualification__subtitle">
                  Manipal University Jaipur
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__card">
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
              <div className="qualification__card">
                <h3 className="qualification__title">10th CBSE</h3>
                <span className="qualification__subtitle">
                  Dayawati Modi Academy, Meerut
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>
          </div>

          {/* ===== EXPERIENCE ===== */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__card qualification__card--current">
                <h3 className="qualification__title">Frontend Engineer</h3>
                <span className="qualification__subtitle">
                  Kutumb, PrimeTrace
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Jan 2025 - Present
                </div>
              </div>

              <div className="qualification__timeline">
                <span className="qualification__rounder qualification__rounder--active"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__card">
                <h3 className="qualification__title">
                  Software Developer - Frontend
                </h3>
                <span className="qualification__subtitle">
                  LENS Corporation
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> June 2023 - Nov 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">
                  Frontend Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  LENS Corporation
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Nov 2022 - May 2023
                </div>
              </div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__card">
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
              <div className="qualification__card">
                <h3 className="qualification__title">Cloud Intern, AWS</h3>
                <span className="qualification__subtitle">Siemens</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> July 2021 - Oct 2021
                </div>
              </div>

              <div className="qualification__timeline">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
