import React, { useEffect, useRef } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work__card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="work__container container grid">
        {projectsData.map((item, index) => (
          <WorkItems item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Works;
