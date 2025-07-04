import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Frontend = () => {
  const importantRef = useRef(null);

  useEffect(() => {
    // Animate the !important text font size on scroll
    gsap.fromTo(importantRef.current, 
      {
        fontSize: "3rem", // Start with large font size
        opacity: 0.8
      },
      {
        fontSize: "1rem", // End with normal font size
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: importantRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Frontend <br />
        <span ref={importantRef} className="imp">!important</span>
      </h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS/SCSS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">JS/TS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">Svelte</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-git"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
