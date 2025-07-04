import React from "react";
import GitHubCalendar from 'react-github-calendar';
import './recentWork.css';

const RecentWork = () => {
    return (
        <section className="section" id="recent-work">
          <div className="container">
            <h2 className="section__title">Recent Activity</h2>
            <span className="section__subtitle">My GitHub contributions</span>
            
            <div className="recent-work">
              <GitHubCalendar
                username="prathamrohatgi26"
                blockSize={10}
                blockMargin={5}
                fontSize={14}
                colorScheme="light"
              />
            </div>
          </div>
        </section>
      );
    };

export default RecentWork;
