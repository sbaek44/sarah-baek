import React from 'react'

function Contact () {
  return (
    <div id='contact'>
      <h2 id='title'>Contact</h2>
      <p id='link-up'>Let's link up!</p>
      <div id='icons-container'>
        <div id='git'>
          <i onClick={()=> window.open("https://github.com/sbaek44", "_blank")}  className="fab fa-github fa-7x"></i>
        </div>
        <div id='email'>
          <i onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to=sbaek44@gmail.com", "_blank")} className="far fa-envelope fa-7x"></i>
        </div>
        <div id='linkedin'>
          <i onClick={()=> window.open("https://www.linkedin.com/in/sarah-baek/", "_blank")} className="fab fa-linkedin fa-7x"></i>
        </div>
      </div>
    </div>
  )
}

export default Contact