import React from 'react';
import './App.css';
import BlockScreen from './BlockScreen';
import Chessboard from './Chess/Chessboard';

function App() {
  return (
    <div id="Home">
      <h1>Carson Cox</h1>
      <Chessboard />
      <BlockScreen />
    </div>
  )
};

export default App;