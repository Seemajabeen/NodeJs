import React from 'react';
import './Child.css';  // Import the CSS file for styling

function Child({ message }) {
  return (
    <div className="child-container">
      <h2 className="child-title">Child Component</h2>
      <p className="child-text">{message}</p>
    </div>
  );
}

export default Child;
