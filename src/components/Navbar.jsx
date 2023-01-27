import React, { Component } from 'react';
import '../styles/Navbar.css';
import { connect } from 'react-redux';
import { changeClass } from '../Redux/action/action';

class Navbar extends Component {
  state = {
    navLink: 'nav-link',
    active: 'nav-link active',
    homebtn: true,
    sobrebtn: false,//passar esse state para o Global
    contatobtn: false,
    projetosbtn: false,
  }

  changeeClass = ({target}) => {
    // const { homebtn, sobrebtn, contatobtn } = this.state;
    // console.log('primeiro', sobrebtn);
    if (target.className.includes('active')) {
      return target.className;
    } else {
      switch (target.id) {
        case 'sobrebtn':
          return (
            this.setState({
              sobrebtn: true,
              homebtn: false,
              contatobtn: false,
              projetosbtn: false,
            })
          )
          case 'homebtn':
            return (
              this.setState({
                homebtn: true,
                contatobtn: false,
                sobrebtn: false,
                projetosbtn: false,
              })
            )
            case 'contatobtn':
              return (
                this.setState({
                  contatobtn: true,
                  homebtn: false,
                  sobrebtn: false,
                  projetosbtn: false,
                })
              )
              case 'projetosbtn':
                return (
                  this.setState({
                    projetosbtn: true,
                    homebtn: false,
                    contatobtn: false,
                    sobrebtn: false,
                  })
                )

        default:
          break;
      }
      const newClass = target.className + ' active';
      target.className = newClass
  }
  }

  render() {
    const { navLink, active, homebtn, sobrebtn, contatobtn, projetosbtn } = this.state;
    const { dispatch } = this.props;

    return (
      <nav id="navbar" className={`navbar ${sobrebtn ? 'flexb' : ''}`}>
        <ul>
          <li>
          <button
              id="homebtn"
              className={ homebtn ? active : navLink}
              href="/"
              onClick={ async (e) => {
                await this.changeeClass(e);
                dispatch(changeClass(sobrebtn))
            }}
            >
              Home
              </button>
          </li>
          <li>
            <button
              className={ projetosbtn ? active : navLink}
              id="projetosbtn"
              onClick={ async (e) => {
                await this.changeeClass(e);
                dispatch(changeClass(sobrebtn))//colocar projetobtn
            }}
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              className={ sobrebtn ? active : navLink}
              id="sobrebtn"
              onClick={ async (e) => {
                await this.changeeClass(e);
                dispatch(changeClass(sobrebtn))
            }}
            >
              Sobre
            </button>
          </li>
          {/* <li><a className="nav-link" href="#resume">Resume</a></li> */}
          {/* <li><a className="nav-link" href="#services">Services</a></li> */}
          <li><a className="nav-link" target="_blank" href="https://github.com/AllanIkeda/allanikeda.github.io" rel="noreferrer">Portfólio Code</a></li>
          <li>
            <button
              className={ contatobtn ? active : navLink}
              onClick={ async (e) => {
                await this.changeeClass(e);
                await dispatch(changeClass(sobrebtn))
            }}
              id="contatobtn"
            >
              Contato
            </button>
          </li>
          </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    )
  }
}
const mapStateToProps = (globalState) => {
  const { sobrebtn } = globalState.reducer;
  console.log(sobrebtn);
  return {
    sobrebtn,
  }
}

export default connect(mapStateToProps)(Navbar);