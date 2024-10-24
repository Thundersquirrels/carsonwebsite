import React from 'react';
import HUD from './HUD';

const Content = () => (
  <div>
    <h1>Projects</h1>
    <p>This page is still under construction.</p>
    <p>Check back soon for updates!</p>
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