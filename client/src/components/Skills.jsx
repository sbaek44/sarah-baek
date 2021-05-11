import React from 'react'

function Skills () {
  return (
    <div id='skills-container'>
      <div id='skills'>
        <h2 id='title'>Technical Skills</h2>
        <div id='skills-grid'>
          <ul id='front-end'>
            <p id='front-end-title'>Front-End</p>
            <li>Javascript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>
          <ul id='back-end'>
            <p id='back-end-title'>Back-End</p>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Axios</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
          <ul id='dev-tools'>
            <p id='dev-tools-title'>Dev Tools</p>
            <li>Git</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Postman</li>
            <li>React Dev Tools</li>
            <li>Google Analytics</li>
          </ul>
          <ul id='deployment'>
            <p id='deployment-title'>Deployment/Testing</p>
            <li>AWS</li>
            <li>NginX</li>
            <li>Docker</li>
            <li>k6</li>
            <li>New Relic</li>
            <li>Loader.io</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills