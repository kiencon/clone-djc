import React from 'react';

const Navigation = ({ title }) => (
  <>
    <div className="navigation">
      <h1 className="main-title">{title}</h1>
      <div className="group-btn">
        <button type="button">Add new Job</button>
        <button type="button">View previous Jobs</button>
      </div>
    </div>
  </>
);

export default Navigation;
