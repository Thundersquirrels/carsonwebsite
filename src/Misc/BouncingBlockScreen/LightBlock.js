import React, { useState, useEffect, useRef, useMemo } from 'react';

function LightBlock({ color, mousePosition }) {
  const testRef = useRef(null);

  const [rect, setRect] = useState(null);
  const [parentRect, setParentRect] = useState(null);

  useEffect(() => {
    if (testRef.current) {
      setRect(testRef.current.getBoundingClientRect());
      setParentRect(testRef.current.parentNode.getBoundingClientRect());
    }
  }, []);

  const { maxDistance, x, y, randomColor } = useMemo(() => {
    if (!rect || !parentRect) return {};

    const maxDistance = Math.sqrt(parentRect.width ** 2 + parentRect.height ** 2);
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const randomColor = Math.random() * 4;
    return { maxDistance, x, y, randomColor };
  }, [rect, parentRect]);

  return (
    <div className={"lightBlock"} ref={testRef} style={{ backgroundColor: `hsl(${color}, 50%, ${(1 - Math.sqrt(Math.sqrt((mousePosition.x - x) ** 2 + (mousePosition.y - y) ** 2) / maxDistance)) * 90 + randomColor}%)` }}>
    </div>
  );
}

export default LightBlock;