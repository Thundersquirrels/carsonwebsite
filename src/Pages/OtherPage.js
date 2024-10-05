import React from 'react';
import HUD from './HUD';
import BlockScreen from '../Misc/BouncingBlockScreen/BlockScreen';

const Content = () => (
  <div>
    <h1>Other</h1>
    <p>Here are some miscellaneous things I've made:</p>
    <BlockScreen />
  </div>
);

function OtherPage() {
  return (
    <HUD>
      <Content />
    </HUD>
  )
};

export default OtherPage;