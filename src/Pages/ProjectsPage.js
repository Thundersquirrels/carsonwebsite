import React from 'react';
import HUD from './HUD';

const content = (
  <div>
    <h1>Projects</h1>
    <p>Here are some projects I've worked on:</p>
  </div>
);

function ProjectsPage() {
  return (
    HUD({ content })
  )
};

export default ProjectsPage;