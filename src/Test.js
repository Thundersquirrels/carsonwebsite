import React, { useState, useEffect, useRef, useMemo } from 'react';
import debounce from 'lodash/debounce';

function Test({ color }) {
    const [colorMult, setColorMult] = useState(1);
    const testRef = useRef(null);

    const [rect, setRect] = useState(null);

    useEffect(() => {
      if (testRef.current) {
        setRect(testRef.current.getBoundingClientRect());
      }
    }, []);
  
    const { maxDistance, x, y, randomColor } = useMemo(() => {
      if (!rect) return {};
  
      const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const randomColor = Math.random() * 4;
      return { maxDistance, x, y, randomColor };
    }, [rect]); // Add dependencies here if any

    useEffect(() => {
        const handleMouseMove = debounce((event) => {
            const { clientX, clientY } = event;
            const distance = Math.sqrt((clientX - x) ** 2 + (clientY - y) ** 2);
            setColorMult(1 - Math.sqrt(distance / maxDistance));
        }, 0.1); // Adjust this value as needed
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            handleMouseMove.cancel(); // Cancel any pending executions
        };
      }, [maxDistance, x, y]);

    const backgroundColor = `hsl(${color}, 50%, ${colorMult * 90 + randomColor}%)`;

    return (
        <div className={"test"} ref={testRef} style={{ backgroundColor: backgroundColor }}>
        </div>
    );
}

export default Test;