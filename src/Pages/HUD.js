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
};

const TopBar = () => (
  <div id="TopBar">
    <SubpageButton title='About Me' link='/about' />
    <SubpageButton title='Projects' link='/projects' />
    <Link id="NameLogoLink" to='/'>
      <img id="NameLogo" src={'/Carson_Cox_Logo.png'} alt="Carson Cox"></img>
    </Link>
    <SubpageButton title='Games' link='/games' />
    <SubpageButton title='Other' link='/other' />
</div>
);

const SideBar = () => (
  <div id="SideBar">
    <h1>Contact Info</h1>
    <p>Los Angeles, CA</p>
    <h2>Email</h2>
    <p>carson@reality.net</p>
    <h2>GitHub</h2>
    <a href="https://github.com/Thundersquirrels">github.com/Thundersquirrels</a>
    <h2>LinkedIn</h2>
    <a href="https://www.linkedin.com/in/carson-s-cox/">linkedin.com/in/carson-s-cox/</a>
</div>
);

const HUD = (props) => {
  return (
    <div id="HUD">
      <TopBar />
      <div id="Main">
        <SideBar />
        <div id="Content">
          {props.children}
        </div>
      </div>
      <TopBar />
    </div>
  )
};

export default HUD;