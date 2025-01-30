import React, { useState } from "react";

const SimpleButtonClickUI = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div>
      <h1>Simple Button Click UI</h1>
      <button onClick={handleClick}>
        {isVisible ? "Hide Details" : "View More"}
      </button>
      {isVisible && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
          <h3>Here are some additional details!</h3>
          <p>This content becomes visible after you click the button.</p>
        </div>
      )}
    </div>
  );
};

export default SimpleButtonClickUI;
