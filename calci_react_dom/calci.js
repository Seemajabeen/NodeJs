import React, { useState } from "react";
import Add from "./components/add/Add";
import Subtract from "./components/subtract/Subtract";
import Multiply from "./components/multiply/Multiply";
import Divide from "./components/divide/Divide";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  return (
    <div style={{
      textAlign: "center", 
      backgroundColor: "#f5f5f5", 
      padding: "30px", 
      borderRadius: "10px", 
      width: "350px", 
      margin: "auto" 
    }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>React Calculator</h1>      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          style={{ 
            padding: "12px", 
            margin: "8px", 
            borderRadius: "8px", 
            border: "1px solid #ccc", 
            width: "80%" 
          }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          style={{ 
            padding: "12px", 
            margin: "8px", 
            borderRadius: "8px", 
            border: "1px solid #ccc", 
            width: "80%" 
          }}
        />
      </div>
      <div>
        <Add a={Number(num1)} b={Number(num2)} />
        <Subtract a={Number(num1)} b={Number(num2)} />
        <Multiply a={Number(num1)} b={Number(num2)} />
        <Divide a={Number(num1)} b={Number(num2)} />
      </div>
    </div>
  );
}

export default App;


{/*import React from 'react';

function Add(props) {
  return (
    <div>
      <h3> {props.a} + {props.b} = {props.a + props.b}</h3>
    </div>
  );
}

export default Add;*/}
