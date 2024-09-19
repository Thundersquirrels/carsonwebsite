import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Test from './Test.js';
import BouncingLogo from './BouncingLogo.js';

function App() {
  const tests = Array.from({ length: 592 }, (_, i) => i + 1);
  const gridRef = useRef(null);
  const testScreenRef = useRef(null);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        return prevColor + 1 % 360;
      });
    }, 100);

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  

  return (
    <div id="Home">
      <h1>Carson Cox</h1>
      <div id="TestScreen" ref={testScreenRef}>
        <div id="Testgrid" ref={gridRef}>
          {tests.map((num) => (
            <Test key={num} color={color} />
          ))}
        </div>
        <BouncingLogo parent={testScreenRef} />
      </div>
    </div>
  )
};

export default App;