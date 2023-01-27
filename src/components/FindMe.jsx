import React, { Component } from 'react'
import { connect } from 'react-redux';

class FindMe extends Component {
  render() {
    const { sobrebtn } = this.props;
    return (
      <div id="socialLinks" className={`social-links ${sobrebtn ? 'displayNone' : ''}`}>
        <a href="https://github.com/AllanIkeda" target="_blank" className="github" rel="noreferrer"><i className="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/allan-ikeda/" target="_blank" className="linkedin" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992322667" target="_blank" className="whatsapp" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
        <a href="mailto:allanikeda@outlook.com" target="blank" className="whatsapp"><i className="bi bi-envelope"></i></a>
      </div>    )
  }
}

const mapStateToProps = (globalState) => {
  const { sobrebtn } = globalState.reducer;
  return {
    sobrebtn,
  }
}

export default connect(mapStateToProps)(FindMe);
