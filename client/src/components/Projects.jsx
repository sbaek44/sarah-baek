import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

function Projects () {
  return (
    <div id='projects'>
      <h2 id='title'>Projects</h2>
      <div id='project-container'>
        <h4 id='project-title'>Citizens United</h4>
        <p id='project-desc'>Volunteer matching application offering assistance to any persons in need</p>
        <Carousel itemsToShow={1}>
          <img id='thumbnail' src='images/CitizensUnited1.png' />
          <img id='thumbnail' src='images/CitizensUnited2.png' />
          <img id='thumbnail' src='images/CitizensUnited3.png' />
          <img id='thumbnail' src='images/CitizensUnited4.png' />
        </Carousel>
      </div>
      <div id='project-container'>
        <h4 id='project-title'>Creadible</h4>
        <p id='project-desc'>Recipe application that finds recipes using the ingredients the user inputs</p>
        <Carousel itemsToShow={1}>
          <img id='thumbnail' src='images/Creadible1.png' />
          <img id='thumbnail' src='images/Creadible2.png' />
          <img id='thumbnail' src='images/Creadible3.png' />
          <img id='thumbnail' src='images/Creadible4.png' />
        </Carousel>
      </div>
      <div id='project-container'>
        <h4 id='project-title'>Forever 32</h4>
        <p id='project-desc'>Mock e-commerce application for apparel, shoes, and accessories</p>
        <Carousel itemsToShow={1}>
          <img id='thumbnail' src='images/Forever32-1.png' />
          <img id='thumbnail' src='images/Forever32-2.png' />
          <img id='thumbnail' src='images/Forever32-3.png' />
          <img id='thumbnail' src='images/Forever32-4.png' />
        </Carousel>
      </div>
      <div id='project-container'>
        <h4 id='project-title'>Forever 32 System Optimization</h4>
        <p id='project-desc'>System design of Forever 32 server and database with scalability</p>
        <Carousel itemsToShow={1}>
          <img id='thumbnail' src='images/SDO1.png' />
          <img id='thumbnail' src='images/SDO2.png' />
          <img id='thumbnail' src='images/SDO3.png' />
          <img id='thumbnail' src='images/SDO4.png' />
        </Carousel>
      </div>
    </div>
  )
}

export default Projects