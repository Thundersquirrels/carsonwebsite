import React from 'react';
import HUD from './HUD';
import BlockScreen from '../Misc/BouncingBlockScreen/BlockScreen';

const content = (
  <div>
    <h1>Misc</h1>
    <p>Here are some miscellaneous things I've made:</p>
    <BlockScreen />
  </div>
);

function MiscPage() {
  return (
    HUD({ content })
  )
};

export default MiscPage;