import React from 'react';
import HUD from './HUD';

const Content = () => (
  <div>
    <img src="/dying_emoji.gif" alt="Dying Emoji" style={{width: "50vw"}}></img>
  </div>
);

function HomePage() {
  return (
    <HUD>
      <Content />
    </HUD>
  )
};

export default HomePage;