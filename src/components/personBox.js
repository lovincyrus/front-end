/* Import statements */
import React, { Component } from 'react';

import {default as Images} from '../middleware/images';

class PersonBox extends Component {
  render() {
    return (
      <div className='person-container'>
        <div className='image side'>
          <img src={this.props.image}/>
        </div>
        <div className='info side'>
          <h3>{this.props.name}</h3>
          <p>{this.props.title}</p>
          <div className='social-container'>
            <a><img src={Images.linkedIn}/></a>
            <a><img src={Images.github} className='github'/></a>
            <a><img src={Images.twitterSmall}/></a>
            <a><img src={Images.medium}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonBox;

/*<div className="person-container" style={{ backgroundImage: `url(${this.props.photo})`, backgroundPosition: 'center' }}>
        <a className="overlay" href={this.props.linkedIn} target="_blank">
          <div className="content-container">
            <p className="description">{this.props.description}</p>
            <p className="heading">{this.props.name}</p>
          </div>
        </a>
    </div>*/