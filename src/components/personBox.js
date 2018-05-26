/* Import statements */
import React, { Component } from 'react';

class PersonBox extends Component {
  render() {
    return (
      <div className="person-container" style={{ backgroundImage: `url(${this.props.photo})`, backgroundPosition: 'center' }}>
        <a className="overlay" href={this.props.linkedIn} target="_blank">
          <div className="content-container">
            <p className="description">{this.props.description}</p>
            <p className="heading">{this.props.name}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default PersonBox;