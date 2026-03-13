import React, { useState, useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./recentWork.css";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = "prathamrohatgi26";

const RecentWork = () => {
  const [stats, setStats] = useState(null);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setStats({
          publicRepos: data.public_repos,
        });
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".recent-work__stat", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(calendarRef.current, {
        scrollTrigger: {
          trigger: calendarRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section className="section" id="recent-work" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title">Recent Activity</h2>
        <span className="section__subtitle">My GitHub contributions</span>

        <div className="recent-work__stats" ref={statsRef}>
          <div className="recent-work__stat">
            <i className="bx bx-git-repo-forked recent-work__stat-icon"></i>
            <h3 className="recent-work__stat-value">
              {stats ? `${stats.publicRepos}+` : "—"}
            </h3>
            <span className="recent-work__stat-label">Public Repos</span>
          </div>
          <div className="recent-work__stat">
            <i className="bx bx-code-alt recent-work__stat-icon"></i>
            <h3 className="recent-work__stat-value">3+</h3>
            <span className="recent-work__stat-label">Years Coding</span>
          </div>
        </div>

        <div className="recent-work" ref={calendarRef}>
          <div className="recent-work__header">
            <div className="recent-work__dots">
              <span className="recent-work__dot recent-work__dot--red"></span>
              <span className="recent-work__dot recent-work__dot--yellow"></span>
              <span className="recent-work__dot recent-work__dot--green"></span>
            </div>
            <span className="recent-work__header-text">
              github-contributions
            </span>
          </div>
          <div className="recent-work__calendar">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={12}
              blockMargin={5}
              fontSize={14}
              colorScheme="light"
            />
          </div>
        </div>

        <div className="recent-work__cta">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex"
          >
            View GitHub Profile
            <i className="bx bxl-github button__icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
