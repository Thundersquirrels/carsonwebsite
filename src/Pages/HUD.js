import React from 'react';
import { Link } from 'react-router-dom';
import './HUD.css';
import NameLogo from '../Carson_Cox_Name_Logo.png';

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
          <img id="NameLogo" src={NameLogo} alt="Carson Cox">
          </img>
        </Link>
        <SubpageButton title='Games' link='/games' />
        <SubpageButton title='Misc' link='/misc' />
      </div>
      {content}
    </div>
  )
};

export default HUD;