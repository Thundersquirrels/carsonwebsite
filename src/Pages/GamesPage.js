import React, { useRef, useState, useEffect } from 'react';
import HUD from './HUD';
import Chessboard from '../Games/Chess/Chessboard';
// import DungeonCrawler from '../Games/DungeonCrawler/DungeonCrawler';

const Content = () => {
  const parent = useRef(null);
  const [squareSize, setSquareSize] = useState(0);

  useEffect(() => {
    if (parent.current) {
      setSquareSize(parent.current.offsetWidth / 20);
    }
  }, []);

  return (
    <div id="GamesPage" ref={parent}>
      <h1>Games</h1>
      <p>Here are some games I've made:</p>
      {/* <DungeonCrawler /> */}
      <Chessboard squareSize={squareSize} style={{fontSize: '1em'}}/>
    </div>
  );
};

function GamesPage() {
  return (
    <HUD>
      <Content />
    </HUD>
  )
};

export default GamesPage;