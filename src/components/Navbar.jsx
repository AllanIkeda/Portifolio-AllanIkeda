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
    if (target.className.includes('active')) {
      return;
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
            case 'projetosbtn':
              return (
                this.setState({
                  projetosbtn: true,
                  homebtn: false,
                  sobrebtn: false,
                  contatobtn: false,
                })
              )
              case 'contatobtn':
                return (
                  this.setState({
                    contatobtn: true,
                    projetosbtn: false,
                    homebtn: false,
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
    const { navLink, active, homebtn, sobrebtn, projetosbtn, contatobtn } = this.state;
    const { dispatch } = this.props;

    return (
      <nav id="navbar" className={`navbar ${sobrebtn || projetosbtn ? 'flexb' : ''}`}>
        <ul>
          <li>
          <button
              id="homebtn"
              className={ homebtn ? active : navLink}
              href="/"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, false, false));
            }}
            >
              Home
              </button>
          </li>
          <li>
            <button
              className={ projetosbtn ? active : navLink}
              id="projetosbtn"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, true, false))//colocar projetobtn
            }}
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              className={ sobrebtn ? active : navLink}
              id="sobrebtn"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(true, false, false));
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
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, false, true));
            }}
              id="contatobtn"
            >
              Contato
            </button>
          </li>
          </ul>
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              className="bi bi-list mobile-nav-toggle"
              // onClick={ this.toggleOptions }
            />
          </button>

          <div className="offcanvasBg offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header bgBlack">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
              <button type="button" className="btn-close CorClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body listaBtn">
            <button
              id="homebtn"
              className={ homebtn ? active : navLink}
              href="/"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, false));
            }}
            >
              Home
              </button>
              <br />
              <button
              className={ projetosbtn ? active : navLink}
              id="projetosbtn"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, true))//colocar projetobtn
            }}
            >
              Projetos
            </button>
            <br />
            <button
              className={ sobrebtn ? active : navLink}
              id="sobrebtn"
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(true, false));
            }}
            >
              Sobre
            </button>
            <br />
            {/* <button
              className={ contatobtn ? active : navLink}
              onClick={ (e) => {
                this.changeeClass(e);
                dispatch(changeClass(false, true));
            }}
              id="contatobtn"
            >
              Contato
            </button> */}
            </div>
          </div>
      </nav>
    )
  }
}
// const mapStateToProps = (globalState) => {
//   const { sobrebtn } = globalState.reducer;
//   return {
//     sobrebtn,
//   }
// }

export default connect()(Navbar);