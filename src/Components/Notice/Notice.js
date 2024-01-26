import React, { useState, useEffect } from 'react';
import '../Notice/Notice.css';

function Notice() {
  const [notices, setNotices] = useState([
    `Foot camp is being organised to help handicapped people in which people will be provided wheel chairs, tricycles etc. for free.
    Date :- 9 Jan to 12 Jan 2024
    Address:- Shraddha bhawan , in front of airport, jhalawar road, kota`,
    // Add more notices as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotices((prevNotices) => [
        prevNotices[prevNotices.length - 1],
        ...prevNotices.slice(0, prevNotices.length - 1),
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notice-panel">
      <h2>Notice Panel</h2>
      <div className="notice-container">
        {notices.map((notice, index) => (
          <div key={index} className={`notice-item${index === 0 ? ' latest' : ''}`}>
            {notice}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notice;