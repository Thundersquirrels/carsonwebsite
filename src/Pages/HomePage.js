import React from 'react';
import HUD from './HUD';

const Content = () => (
  <div>
    {/* <img src="/dying_emoji.gif" alt="Dying Emoji" style={{width: "50vw"}}></img> */}
    <h1>Hey there</h1>
    <p>Welcome to my website!</p>
    <p>It's still under construction, so please excuse the mess.</p>
    <p>Feel free to look around and check out my work.</p>
    <p>Thanks for stopping by!</p>
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