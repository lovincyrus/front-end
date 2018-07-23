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
            <a href={this.props.linkedin}><img src={Images.linkedIn}/></a>
            {this.props.github ? <a href={this.props.github}><img src={Images.github} className='github'/></a> : null}
            <a href={this.props.twitter}><img src={Images.twitterSmall}/></a>
            <a href={this.props.medium}><img src={Images.medium}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonBox;