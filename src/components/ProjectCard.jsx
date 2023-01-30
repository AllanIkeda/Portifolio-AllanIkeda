import React, { Component } from 'react'
import { connect } from 'react-redux';
import img1 from '../images/foto bonita.jpg';

class ProjectCard extends Component {
  render() {
    const { projetosbtn } = this.props;
    console.log(projetosbtn);
    return (
      <section id="project" className={`project ${projetosbtn ? 'section-show' : 'displayNone'}`} >
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ img1 } className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </section>
    )
  }
}

const mapStateToProps = (globalState) => {
  console.log(globalState.reducer);
  const { projetosbtn, sobrebtn } = globalState.reducer;
  return {
    sobrebtn,
    projetosbtn,
  }
}

export default connect(mapStateToProps)(ProjectCard);

