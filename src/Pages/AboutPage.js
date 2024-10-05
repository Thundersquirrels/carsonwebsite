import React from 'react';
import HUD from './HUD';
import "./AboutPage.css";

const Content = () => (
  <div id="Content">
    <h1>About Me</h1>
    <p>Hi! I'm Carson Cox. I'm a software developer based in Los Angeles. I like to make games and websites.</p>
    <Resume />
  </div>
);

const Resume = () => (
  <div id="Resume">
    <h1>Resume</h1>
    <div id="ResumeBox">
      <div id="Header">
        <h1>Carson Cox</h1>
      </div>
      <div id="Main">
        <div id="LeftColumn">
          <div id="Contact">
            <h2>Contact</h2>
            <p>Los Angeles, CA</p>
            <p>+1 (415) 747-5311</p>
            <p>carson@reality.net</p>
          </div>
          <hr />
          <div id="Education">
            <h2>Education</h2>
            <p>September 2020 - June 2024</p>
            <p>B.S. Computer Science</p>
            <p>University of California, Los Angeles</p>
            <p>GPA: 3.5</p>
            <p>Relevant Coursework</p>
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
              <li>Linear Algebra</li>
              <li>Real Analysis</li>
              <li>Optimization</li>
              <li>Graph Theory</li>
              <li>Engineering Ethics</li>
            </ul>
          </div>
          <hr />
          <div id="Skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
            </ul>
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
        <div id="RightColumn">
          <div id="Summary">
            Seeking to secure a position that offers professional challenges utilizing interpersonal and problem-solving skills
          </div>
          <hr />
          <div id="Experience">
            <h2>Experience</h2>
            <p>June 2022 - August 2022</p>
            <div className="subtitle">
              <strong>Full Stack Engineer</strong>
              <em>Solutions.io</em>
              <p>Berlin, Germany</p>
            </div>
            <ul>
              <li>Worked on a team to develop company web hosting portal incorporating Laravel and Vue.js</li>
              <li>Coded in SQL, PHP, and HTML for front-end design, internal and external facing request handling, SQL database organization, and code refactoring</li>
            </ul>
            <p>June 2023 - January 2024</p>
            <div className="subtitle">
              <strong>Computer Science Instructor</strong>
              <em>ID Tech</em>
              <p>Los Angeles, CA</p>
            </div>
            <ul>
              <li>Instructed students aged 6-17 in computer science topics ranging from Machine Learning to Roblox Lua Scripting</li>
              <li>Developed lesson plans and led team-based activities to meet students' academic and interpersonal needs</li>
            </ul>
          </div>
          <hr />
          <div id="Extracurriculars">
            <h2>Extracurriculars</h2>
            <p>Fall 2021 - March 2024</p>
            <div className="subtitle">
              <strong>ICPC Vice President</strong>
              <em>UCLA Association for Computing Machinery</em>
            </div>
            <ul>
              <li>Held the role of Vice President and Track Lead of the ACM International Collegiate Programming Contest committee</li>
              <li>Managed internal affairs of club operations, including leading collaborative events, organizing internal meetings, and participating in ACM board</li>
              <li>Worked in teams to develop and teach workshop series on competitive programming</li>
              <li>Planned and hosted events such as Estimathon® and Break the Binary to bring new students into the math and computer science community at UCLA</li>
            </ul>
          </div>
          <hr />
          <div id="Projects">
            <h2>Projects</h2>
            <ul>
              <li>Created web router that handles incoming TCP connections and properly routes HTTP packets using a NAT table in C++</li>
              <li>Developed a 3D modeled version of a scene from the movie Totoro including interactive features in Javascript</li>
              <li>Developed interactive puzzle games with an integrated chatbot and saved account info using React and Django</li>
              <li>Developed various games in Unity, Unreal Engine, Javascript, C++, and Python</li>
              <li>Developed this website! (Currently hosting on Cloudflare)</li>
            </ul>
          </div>
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