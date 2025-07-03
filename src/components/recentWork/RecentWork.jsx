import React from "react";
import GitHubCalendar from 'react-github-calendar';
import './recentWork.css';
// import ReactTooltip from 'react-tooltip';

const RecentWork = () => {
    return (
        <div className="recent-work">
          <h2 className="recent-work__title">Recent Activity</h2>
          <GitHubCalendar
            username="prathamrohatgi26"
            blockSize={10}
            blockMargin={5}
            fontSize={14}
            colorScheme="light"
          />
          {/* <ReactTooltip delayShow={50} /> */}
        </div>
      );
    };

export default RecentWork;
