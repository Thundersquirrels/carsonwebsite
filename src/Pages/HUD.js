import React from 'react';
import { Link } from 'react-router-dom';
import './HUD.css';

const SubpageButton = ({ title, link }) => {
  return (
    <Link to={link}>
      <div className='subpagebutton'>
        <h1>{title}</h1>
      </div>
    </Link>
  )
}

const HUD = ({ content }) => {
  return (
    <div id="HUD">
      <div id="TopBar">
        <SubpageButton title='About Me' link='/about' />
        <SubpageButton title='Projects' link='/projects' />
        <Link to='/'>
          <img id="NameLogo" src={'/Carson_Cox_Logo.png'} alt="Carson Cox"></img>
        </Link>
        <SubpageButton title='Games' link='/games' />
        <SubpageButton title='Misc' link='/misc' />
      </div>
      <div id="Main">
        <div id="LeftSideBar" className="SideBar">
          <h1>Carson Cox</h1>
          <h2>Software Developer</h2>
          <h3>Los Angeles</h3>
        </div>
        <div id="Content">
          {content}
        </div>
        <div id="RightSideBar" className="SideBar">
          <h1>Contact</h1>
          <h2>Email</h2>
          <h3>carson@reality.net</h3>
          <h2>GitHub</h2>
          <h3>github.com/Thundersquirrels</h3>
          <h2>LinkedIn</h2>
          <h3>linkedin.com/in/carson-cox</h3>
        </div>
      </div>
    </div>
  )
};

export default HUD;