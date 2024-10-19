import React from 'react';
import HUD from './HUD';
import "./AboutPage.css";

const Content = () => (
  <div id="Content">
    <h1>About Me</h1>
    <p>Hi, I'm Carson Cox.</p>
    <p>I am a recent UCLA graduate with a B.S. in Computer Science and a passion for new technology, evolving industries, and all things nerdy. I have work/internship experience in Full-Stack Engineering and Machine Learning, and have years of experience as an officer and as vice president of ACM ICPC, the Competitive Programming Club at UCLA. I am interested in getting more involved with the fields of AI and Front-End Development.</p>
    <p>Contact me if you have any questions or opportunities!</p>
    <Resume />
  </div>
);

const Resume = () => (
  <div id="Resume">
    <h1>Resume</h1>
    <div id="ResumeBox">
      <div id="ResumeMain">
        <h1>Carson Cox</h1>
        <div className="flexbox">
          <p>Los Angeles, CA</p>
          <p>+1 (415) 747-5311</p>
          <p>carson@reality.net</p>
          <p>linkedin.com/in/carson-s-cox/</p>
          <p>carsoncox.com</p>
        </div>
        <hr />
        <div id="Summary">
          <p>Recent UCLA Computer Science graduate seeking to secure a position that offers optortunities for growth and advancement in the field of Computer Science</p>
        </div>
        <hr />
        <div id="Education">
          <h2>Education</h2>
          <strong>University of California, Los Angeles</strong>
          <div className="flexbox">
            <em>B.S. Computer Science</em>
            <p>GPA: 3.5</p>
            <p>September 2020 - June 2024</p>
          </div>
          <h3>Relevant Coursework and Skills</h3>
          <div className="flexbox">
            <div>
              <h4>Computer Science</h4>
              <ul>
                {/* <li>Algorithms and Complexity</li> */}
                {/* <li>Programming Languages</li> */}
                <li>Operating Systems</li>
                {/* <li>Computing Theory</li> */}
                {/* <li>Software Engineering</li> */}
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Networks</li>
                <li>Computer Graphics</li>
                <li>Cryptography</li>
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
                {/* <li>Engineering Ethics</li> */}
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
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
              <h3>Tools</h3>
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
          <strong>Full Stack Engineer Intern</strong>
          <div className="flexbox">
            <em>Solutions.io</em>
            <p>Berlin, Germany</p>
            <p>June 2022 - August 2022</p>
          </div>
          <ul>
            <li>Worked on a team to develop company web hosting portal incorporating Laravel and Vue.js</li>
            <li>Coded in SQL, PHP, and HTML for front-end design, internal and external facing request handling, SQL database organization, and code refactoring</li>
          </ul>
          <strong>Computer Science Instructor</strong>
          <div className="flexbox">
            <em>ID Tech</em>
            <p>Los Angeles, CA</p>
          <p>June 2023 - January 2024</p>
          </div>
          <ul>
            <li>Instructed students aged 6-17 in computer science topics ranging from Machine Learning to Roblox Lua Scripting</li>
            <li>Developed lesson plans and led team-based activities to meet students' academic and interpersonal needs</li>
          </ul>
        </div>
        <hr />
        <div id="Extracurriculars">
          <h2>Extracurriculars</h2>
          <strong>International Collegiate Programming Contest Committee Vice President</strong>
          <div className="flexbox">
            <em>UCLA Association for Computing Machinery</em>
            <p>Fall 2021 - March 2024</p>
          </div>
          <ul>
            <li>Managed internal affairs of club operations, including leading collaborative events, organizing internal meetings, and participating in ACM board</li>
            <li>Worked in teams to develop and teach workshop series on competitive programming</li>
            <li>Planned and hosted events such as Estimathon® and Break the Binary to bring new students into the math and computer science community at UCLA</li>
          </ul>
        </div>
        <hr />
        <div id="Projects">
          <h2>Projects</h2>
          <ul>
            <li>Implemented web router that handles incoming TCP connections and properly routes HTTP packets using a NAT table in C++</li>
            <li>Recreated a 3D modeled version of a scene from the movie Totoro including interactive features in Javascript</li>
            <li>Collaborated with a team to develop a website for interactive puzzle games with an integrated chatbot and saved account info using React and Django</li>
            <li>Created various games in Unity, Unreal Engine, Javascript, C++, and Python</li>
            <li>Developed personal website in React and hosted on Cloudflare</li>
          </ul>
        </div>
      </div>
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