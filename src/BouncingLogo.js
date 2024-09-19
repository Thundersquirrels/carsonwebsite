import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

const BouncingLogo = ({ parent }) => {
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const logoRef = useRef(null);

    useEffect(() => {
        let colorHue = 0;
        let direction = { x: 1, y: 1 };
        let mousePosition = { x: 0, y: 0 };

        const updatePosition = () => {
            setPosition((prevPosition) => {
                let newX = prevPosition.x + direction.x;
                let newY = prevPosition.y + direction.y;

                if (parent.current) {
                    const leftBoundary = 20;
                    const topBoundary = 20;
                    const rightBoundary = parent.current.offsetWidth - 72;
                    const bottomBoundary = parent.current.offsetHeight - 74;

                    if (newX >= rightBoundary) {
                        newX = rightBoundary;
                        direction = { ...direction, x: -1 };
                        colorHue = Math.random() * 360;
                    }
                    if (newX <= leftBoundary) {
                        newX = leftBoundary;
                        direction = { ...direction, x: 1 };
                        colorHue = Math.random() * 360;
                    }
                    if (newY >= bottomBoundary) {
                        newY = bottomBoundary;
                        direction = { ...direction, y: -1 };
                        colorHue = Math.random() * 360;
                    }
                    if (newY <= topBoundary) {
                        newY = topBoundary;
                        direction = { ...direction, y: 1 };
                        colorHue = Math.random() * 360;
                    }
                
                    const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
                    const distance = Math.sqrt((newX + 50 - mousePosition.x) ** 2 + (newY + 50 - mousePosition.y) ** 2);
                    const colorMult = 1 - (distance / maxDistance) ** 0.7;
                    logoRef.current.style.backgroundColor = `hsl(${colorHue}, 50%, ${colorMult * 100}%)`;
                }

                return { x: newX, y: newY };
            });
        };

        const intervalId = setInterval(updatePosition, 10);

        const handleMouseMove = debounce((event) => {
            const { clientX, clientY } = event;
            mousePosition = { x: clientX, y: clientY };
        }, 1); // Adjust this value as needed
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            handleMouseMove.cancel(); // Cancel any pending executions
            clearInterval(intervalId);
        };
    }, [parent]);

    return (
        <div ref={logoRef}
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '5%',
                position: 'absolute',
                top: position.y + 'px',
                left: position.x + 'px',
                backgroundColor: 'hsl(0, 50%, 50%)',
            }}
        >
        </div>
    );
};

export default BouncingLogo;
