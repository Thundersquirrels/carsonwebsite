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
    <h2>Email</h2>
    <h3>carson@reality.net</h3>
    <h2>GitHub</h2>
    <h3>github.com/Thundersquirrels</h3>
    <h2>LinkedIn</h2>
    <h3>linkedin.com/in/carson-s-cox</h3>
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