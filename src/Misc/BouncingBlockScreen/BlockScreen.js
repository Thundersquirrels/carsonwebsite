import React, { useRef, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import './BlockScreen.css';
import LightBlock from './LightBlock.js';
// import BouncingBlock from './BouncingBlock.js';

const BlockScreen = () => {
  const tests = Array.from({ length: 144 }, (_, i) => i + 1);
  const gridRef = useRef(null);
  const testScreenRef = useRef(null);
  const [color, setColor] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = debounce((event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }, 0.5);

    window.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        return prevColor + 1 % 360;
      });
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      handleMouseMove.cancel();
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div id="Screen" ref={testScreenRef}>
        <div id="Grid" ref={gridRef}>
          {tests.map((num) => (
            <LightBlock key={num} color={color} mousePosition={mousePosition}/>
          ))}
          {/* <BouncingBlock parent={testScreenRef} mousePosition={mousePosition}/> */}
        </div>
        {/* <div style={{
          width: '1em',
          height: '1em',
          borderRadius: '5%',
          position: 'absolute',
          left: 100,
          top: 100,
          backgroundColor: 'white',
        }} /> */}
    </div>
  )
};

export default BlockScreen;