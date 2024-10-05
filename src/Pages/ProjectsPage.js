import React from 'react';
import HUD from './HUD';

const Content = () => (
  <div>
    <h1>Projects</h1>
    <p>Here are some projects I've worked on:</p>
  </div>
);

function ProjectsPage() {
  return (
    <HUD>
      <Content />
    </HUD>
  )
};

export default ProjectsPage;