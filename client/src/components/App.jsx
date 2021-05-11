import React from 'react'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

function App () {
  return (
    <div>
      <nav id='navbar'>
        <a href='#about'>ABOUT</a>
        <a href='#projects'>PROJECTS</a>
        <a href='#skills'>SKILLS</a>
        <a href='#contact'>CONTACT</a>
      </nav>
      <h1 id='name'>Sarah Baek</h1>
      <h2 id='engineer'>Full Stack Software Engineer</h2>
      <img id='banner' src='images/1575327200441.jpg' />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer id='footer'>
        <button id='back-to-top'>
          <a href='#name'>BACK TO TOP</a>
        </button>
        <p>Last Updated May 2021 By Yours Truly, Sarah</p>
      </footer>
    </div>
  )
}

export default App