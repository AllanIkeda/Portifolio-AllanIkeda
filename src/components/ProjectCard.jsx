import React, { Component } from 'react'
import { connect } from 'react-redux';
import img1 from '../images/projetos/todoGif26.gif';
import img2 from '../images/projetos/pixelArt.gif';
import img3 from '../images/projetos/cambio.gif';
// import img4 from '../images/projetos/Trybewarts.gif';
import '../styles/ProjectCard.css';

class ProjectCard extends Component {
  render() {
    const { projetosbtn } = this.props;
    return (
      <section id="project" className={`project carroselContainer ${projetosbtn ? 'section-show' : 'displayNone'}`} >
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item carouselItem active" data-bs-interval="8000">
      <img src={ img1 } width='100px' className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div className='texBox'>
          <h5>To-Do List</h5>
          <p>Projeto voltado para aprender a utilizar o LocalStorage</p>
        </div>
      </div>
    </div>
    <div className="carousel-item carouselItem">
      <img src={ img2 } className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div className='texBox'>
          <h5>PixelArt</h5>
          <p>Projeto voltado ao CSS e LocalStorage, onde foi utilizado display inline-block</p>
        </div>
      </div>
    </div>
    <div className="carousel-item carouselItem">
      <img src={ img3 } className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div className='texBox'>
          <h5>Casa de Cambio</h5>
          <p>Projeto voltado para a utilização de API</p>
        </div>
      </div>
    </div>
    {/* <div className="carousel-item carouselItem">
      <img src={ img4 } className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>TrybeWarts</h5>
        <p>Projeto voltado para a utilização Formularios e LocalStorage</p>
      </div>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </section>
    )
  }
}

const mapStateToProps = (globalState) => {
  const { projetosbtn, sobrebtn } = globalState.reducer;
  return {
    sobrebtn,
    projetosbtn,
  }
}

export default connect(mapStateToProps)(ProjectCard);

