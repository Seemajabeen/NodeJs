import { useState } from "react";
import React from "react";

function DisplayText() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        React Dynamic Input
      </h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{
          padding: "12px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "1px solid #ccc", // Corrected this line
        }}
      />
      <p style={{ fontSize: "20px", marginTop: "20px", color: "#333" }}>
        You typed: <strong style={{ color: "brown" }}>{text}</strong>
      </p>
    </div>
  );
}

export default DisplayText;
