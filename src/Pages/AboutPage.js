import React from 'react';
import HUD from './HUD';

const content = (
  <div>
    <h1>About Me</h1>
    <p>Hi! I'm Carson Cox. I'm a software developer based in Los Angeles. I like to make games and websites.</p>
  </div>
);

function AboutPage() {
  return (
    HUD({ content })
  )
};

export default AboutPage;