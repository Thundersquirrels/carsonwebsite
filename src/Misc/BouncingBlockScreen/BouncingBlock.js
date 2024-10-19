// import React, { useState, useEffect, useRef } from 'react';

// const BouncingBlock = ({ parent, mousePosition }) => {
//     const [position, setPosition] = useState({ x: 100, y: 100 });
//     const [colorHue, setColorHue] = useState(0);
//     const [direction, setDirection] = useState({ x: 1, y: 1 });
//     const [maxDistance, setMaxDistance] = useState(1);
//     const [parentRect, setParentRect] = useState(null);
//     const logoRef = useRef(null);
//     const leftBoundary = 0;
//     const rightBoundary = parentRect.width - logoRef.current.getBoundingClientRect().width;
//     const topBoundary = 0;
//     const bottomBoundary = parentRect.height - logoRef.current.getBoundingClientRect().height;

//     const updatePosition = () => {setPosition(position => {
//         if (!parentRect) return position;
//         let newX = position.x + direction.x;
//         let newY = position.y + direction.y;

//         if (newX > rightBoundary) {
//             newX = rightBoundary;
//             setDirection({ ...direction, x: -1 });
//             setColorHue(Math.random() * 360);
//         }
//         if (newX < leftBoundary) {
//             newX = leftBoundary;
//             setDirection({ ...direction, x: 1 });
//             setColorHue(Math.random() * 360);
//         }
//         if (newY > bottomBoundary) {
//             newY = bottomBoundary;
//             setDirection({ ...direction, y: -1 });
//             setColorHue(Math.random() * 360);
//         }
//         if (newY < topBoundary) {
//             newY = topBoundary;
//             setDirection({ ...direction, y: 1 });
//             setColorHue(Math.random() * 360);
//         }
//         console.log({ x: newX, y: newY });
//         return { x: newX, y: newY };
//     })};

//     useEffect(() => {
//         setParentRect(parent.current.getBoundingClientRect());
//         setMaxDistance(Math.sqrt(parent.current.getBoundingClientRect().width ** 2 + parent.current.getBoundingClientRect().height ** 2));
//         const intervalId = setInterval(updatePosition, 10);
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [parent, updatePosition]);

//     return (
//         <div ref={logoRef}
//             style={{
//                 width: '1em',
//                 height: '1em',
//                 borderRadius: '5%',
//                 position: 'absolute',
//                 left: position.x,
//                 top: position.y,
//                 backgroundColor: `hsl(${colorHue}, 50%, ${(1 - (Math.sqrt((position.x - mousePosition.x) ** 2 + (position.y - mousePosition.y) ** 2) / maxDistance) ** 0.7) * 100}%)`,
//             }}
//         >
//         </div>
//     );
// };

// export default BouncingBlock;
