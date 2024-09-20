import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import LightBlock from './LightBlock.js';
import BouncingBlock from './BouncingBlock.js';

const BlockScreen = () => {
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
    <div id="TestScreen" ref={testScreenRef}>
        <div id="Testgrid" ref={gridRef}>
            {tests.map((num) => (
            <LightBlock key={num} color={color} />
            ))}
        </div>
        <BouncingBlock parent={testScreenRef} />
    </div>
  )
};

export default BlockScreen;