import React, { Component } from 'react';
import Skills from './Skills';
import '../styles/AboutMe.css';
import { connect } from 'react-redux';
import imgUser from '../images/foto bonita.jpg'

class AboutMe extends Component {
  state = {
    age: 0
  }

  //receber state global

  componentDidMount() {
    this.idade();
  }

  idade =  () =>{
    const today = new Date();
    const birthDate = new Date('1998/05/03');
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.setState({
      age,
    })

}

  render() {
    const { age } = this.state;
    const { sobrebtn } = this.props;
    return (
      <article id="about" className={`about ${sobrebtn ? 'section-show' : 'displayNone'}`}>
        <section className="about-me container" >

        <div className="section-title">
        <h2>Sobre</h2>
        <p>Mais sobre mim</p>
      </div>
      <section className="row">
        <div className="col-lg-4 imgContainer">
          <img src={imgUser} className={`rounded-circle imgSobre`} alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" >
          <h3>Estudante de Desenvolvimento Web FullStack</h3>
          <p className="fst-italic">
            Sempre aprendendo competências novas, atualmente estou em transição de carreira para a área de desenvolvimento web (Full-Stack).<br />
            Apaixonado por tecnologias, foguetes e espaço.</p>
          <section className="row">
            <div className="col-lg-6">
              <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Nascido:</strong> <p id="anoNasc">1998</p></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Telefone:</strong> <p>+55 41 9 9232-2667</p></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Cidade:</strong> <p>Porto Alegre-RS</p></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <p id="idade">{ age }</p></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Formação:</strong> <p>Marketing - Estácio (2019-2021), <br />Desenvolvedor FullStack - Trybe (2022-Agora)</p></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <p>Allanikeda@Outlook.com</p></li>
              </ul>
            </div>
          </section>
          <p>
            Atualmente estou cursando desenvolvimento web na <strong>Trybe</strong> visando a transição de carreira para o mundo da tecnologia.
            Estou desenvolvendo minhas SoftSkills & HardSkills, estou buscando esse mercado pelas oportunidades de crescimento e a área de tecnologia sempre me fascinou, e vi a Trybe como uma boa oportunidade.
          </p>
        <br />
        </div>
        <section className="skills container" id="gradeSkill">
          <div className="row skills-content1">
            <div className="col-lg-6">

            <div className="section-title">
                <h2>Hard Skills</h2>
            </div>
            <Skills  percent={ '92%' } skill={'HTML'} />
            <Skills  percent={ '83%' } skill={'CSS'} />
            <Skills  percent={ '76%' } skill={'JavaScript'} />
            <Skills  percent={ '22%' } skill={'Python'} />
            <div className="section-title">
                <h2>FrameWork/Lib</h2>
            </div>
            <Skills  percent={ '87%' } skill={'Bootstrap'} />
            <Skills  percent={ '71%' } skill={'Jest/RTL'} />
            <Skills  percent={ '60%' } skill={'React'} />

            </div>
          </div>
          <div className="row skills-content2">
            <div className="col-lg-6">

            <div className="section-title">
                <h2>Soft Skills</h2>
            </div>
            <Skills  percent={ '96%' } skill={'Learn to learn'} />
            <Skills  percent={ '98%' } skill={'Comunicação'} />
            <Skills  percent={ '100%' } skill={'Empatia'} />
            <Skills  percent={ '95%' } skill={'Organização'} />
            <Skills  percent={ '80%' } skill={'Agilidade'} />
            <Skills  percent={ '100%' } skill={'Trabalho em Equipe'} />
            <div className="section-title">
                <h2>Outros</h2>
            </div>
            <Skills  percent={ '60%' } skill={`API's`} />
            <Skills  percent={ '49%' } skill={'Redux/React-Redux'} />
            <Skills  percent={ '80%' } skill={'Web Storage'} />
            <Skills  percent={ '80%' } skill={'Prompt Search'} />
            <Skills  percent={ '62%' } skill={'Inglês'} />

            </div>
          </div>
        </section>
      </section>
        </section>
      </article>
    )
  }
}

const mapStateToProps = (globalState) => {
  const { sobrebtn } = globalState.reducer;
  return {
    sobrebtn,
  }
}

export default connect(mapStateToProps)(AboutMe);
