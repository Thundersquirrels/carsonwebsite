import React from 'react';
import HUD from './HUD';

const content = (
  <div>
    <img src="/dying_emoji.gif" alt="Dying Emoji" style={{width: "50vw"}}></img>
  </div>
);

function HomePage() {
  return (
    HUD({ content })
  )
};

export default HomePage;