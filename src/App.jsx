import React, { Component } from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';


export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <AboutMe />
        <ProjectCard />
      </main>
    )
  }
}

