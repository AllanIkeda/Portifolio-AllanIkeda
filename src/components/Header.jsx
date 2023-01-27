import React, { Component } from 'react'
import { connect } from 'react-redux'
import imgUser from '../images/foto bonita.jpg'
import '../styles/Header.css'
import FindMe from './FindMe'
import Navbar from './Navbar'
// import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    className: 'header-top',
  }
  //receber o state Global
  render() {
    const { sobrebtn } = this.props;
    const { className } = this.state;
    return (
      <header
       id='header'
       className={ sobrebtn ? className : ''}
       >
        <div id="nome" className="container" width="50">
          <h1><a href="https://allanikeda.github.io/">Allan Ikeda</a></h1>
          <h2
            id="resumoInit"
            className={ sobrebtn ? 'displayNone' : ''}
            >
              Sou um Estudante de desenvolvimento Web <span>FullStack</span></h2>
          <Navbar />
          {sobrebtn ? '' : (
            <FindMe />
          )}
        </div>
      <img src={imgUser} className={`rounded-circle imgHome ${sobrebtn ? 'displayNone' : ''}`} width="400px" alt="" />
      </header>
    )
  }
}

const mapStateToProps = (globalState) => {
  const { sobrebtn } = globalState.reducer;
  return {
    sobrebtn,
  }
}

export default connect(mapStateToProps)(Header);