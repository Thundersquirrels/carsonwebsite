import React from 'react';
import HUD from './HUD';
import "./AboutPage.css";

const Content = () => (
  <div id="Content">
    <h1>About Me</h1>
    <p>Hi, I'm Carson Cox.</p>
    <p>I am a recent UCLA graduate with a B.S. in Computer Science and a passion for new technology, evolving industries, and all things nerdy. I have work/internship experience in Full-Stack Engineering and Machine Learning, and have years of experience as an officer and as vice president of ACM ICPC, the Competitive Programming Club at UCLA. I am interested in getting more involved with the fields of AI and Full-Stack Development.</p>
    <p>Contact me if you have any questions or opportunities!</p>
    <h1>Resume</h1>
    <Resume />
  </div>
);

const Resume = () => (
  <div id="Resume">
    <h1>Carson Cox</h1>
    <div className="flexbox">
      <p>Los Angeles, CA</p>
      <p>+1 (415) 747-5311</p>
      <p>carson@reality.net</p>
      <a href="https://www.linkedin.com/in/carson-s-cox/">linkedin.com/in/carson-s-cox/</a>
      <a href="https://carsoncox.com/">carsoncox.com</a>
    </div>
    <hr />
    <div id="Summary">
      <p>Recent UCLA Computer Science graduate seeking to secure a position that offers optortunities for growth and advancement in the field of Computer Science.</p>
    </div>
    <hr />
    <div id="Education">
      <h2>Education</h2>
      <div className="flexbox">
        <strong>University of California, Los Angeles</strong>
        <p>September 2020 - June 2024</p>
      </div>
      <p style={{margin: '0 1%'}}><em style={{margin: '0'}}>B.S. Computer Science,</em> GPA: 3.5</p>
      <h3>Relevant Coursework and Skills</h3>
      <div className="flexbox" style={{margin: "0 2% 0 1%"}}>
        <div>
          <h4>Computer Science</h4>
          <ul>
            <li>Algorithms and Complexity</li>
            <li>Programming Languages</li>
            <li>Operating Systems</li>
            <li>Computing Theory</li>
            <li>Software Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Networks</li>
            <li>Computer Graphics</li>
            <li>Cryptography</li>
            <li>Engineering Ethics</li>
          </ul>
        </div>
        <div>
          <h4>Mathematics</h4>
          <ul>
            <li>Linear Algebra</li>
            <li>Real Analysis</li>
            <li>Optimization</li>
            <li>Graph Theory</li>
            <li>Probability and Statistics</li>
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
          </ul>
        </div>
        <div>
          <h4>Tools</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Unity</li>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div id="Experience">
      <h2>Experience</h2>
      <div className="flexbox">
        <strong>Full Stack Engineer Intern</strong>
        <p>June 2022 - August 2022</p>
      </div>
      <p style={{margin: '0 1%'}}><em style={{margin: '0'}}>Solutions.io,</em> Berlin, Germany</p>
      <ul>
        <li>Worked on a team to develop company web hosting portal incorporating Laravel and Vue.js</li>
        <li>Coded in SQL, PHP, and HTML for front-end design, internal and external facing request handling, database organization, and code refactoring</li>
      </ul>
      <div className="flexbox">
        <strong>Computer Science Instructor</strong>
        <p>June 2023 - January 2024</p>
      </div>
      <p style={{margin: '0 1%'}}><em style={{margin: '0'}}>ID Tech,</em> Los Angeles, CA</p>
      <ul>
        <li>Instructed groups of 10+ students aged 6-17 in computer science topics ranging from Machine Learning to Roblox Lua Scripting</li>
        <li>Developed lesson plans and led team-based activities to meet students' academic and interpersonal needs</li>
      </ul>
    </div>
    <hr />
    <div id="Extracurriculars">
      <h2>Extracurriculars</h2>
      <div className="flexbox">
        <strong>International Collegiate Programming Contest Committee Vice President</strong>
        <p>Fall 2021 - March 2024</p>
      </div>
      <em>UCLA Association for Computing Machinery</em>
      <ul>
        <li>Managed internal affairs for over 20 members, including leading collaborative events, organizing internal meetings, and participating in ACM board, as well as led development and taught workshop series on competitive programming</li>
        <li>Coordinated and hosted events with 100+ attendees such as Estimathon® and Break the Binary to bring new students into the math and computer science community at UCLA</li>
      </ul>
    </div>
    <hr />
    <div id="Projects">
      <h2>Projects</h2>
      <ul>
        <li>Implemented web router to handle TCP connections and route HTTP packets using a NAT table in C++</li>
        <li>Recreated a 3D modeled version of a scene from the movie Totoro including interactive features in Javascript</li>
        <li>Developed interactive game site with an integrated chatbot and saved account info using React and Django</li>
        <li>Created various games in Unity, Unreal Engine, Javascript, C++, and Python</li>
        <li>Developed personal website in React and hosted on Cloudflare</li>
      </ul>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <HUD>
      <Content />
    </HUD>
  )
};

export default AboutPage;