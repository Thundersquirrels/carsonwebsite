import React from 'react';
import HUD from './HUD';

const content = (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to my website!</p>
  </div>
);

function HomePage() {
  return (
    HUD({ content })
  )
};

export default HomePage;