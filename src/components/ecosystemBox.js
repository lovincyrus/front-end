/* Import statements */
import React from 'react';

class EcosystemBox extends React.Component {
  processFeatures() {
    let tickImage = this.props.tick;
    return this.props.features.map(function(text, index){
      return (
        <div className='feature-container' key={index}>
          <img className='tick-image' src={tickImage}/>
          <p>{text}</p>
        </div>
      );
    });
  }
  
  render() {
    return (
      <div className='ecosystem-box-header-container card'>
        <div className='header-container'>
          <img className='header-image' src={this.props.header}/>
          <h4>{this.props.title}</h4>
        </div>
        {this.processFeatures()}
      </div>
    );
  }
};

export default EcosystemBox;
