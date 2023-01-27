import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    const { percent, skill } = this.props
    return (
            <div className="progress">
              <span className="skill">{ skill } <i className="val">{ percent }</i></span>
              <div className="progress-bar-wrap">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-label="Success
                example"
                style={{ width: percent }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
              </div>
            </div>
    )
  }
}
