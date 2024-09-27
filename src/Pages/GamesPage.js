import React from 'react';
import HUD from './HUD';
import Chessboard from '../Games/Chess/Chessboard';
// import DungeonCrawler from '../Games/DungeonCrawler/DungeonCrawler';

const content = (
  <div>
    <h1>Games</h1>
    <p>Here are some games I've made:</p>
    {/* <DungeonCrawler /> */}
    <Chessboard />
  </div>
);

function GamesPage() {
  return (
    HUD({ content })
  )
};

export default GamesPage;