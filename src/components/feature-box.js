/* Import statements */
import React from 'react';

class FeatureBox extends React.Component {
  render() {
    return (
      <div className='feature-box-container card'>
        <div className='header'>
          <img className='icon' src={this.props.icon}/>
          <h5 className='direct-debit' style={{color: this.props.color}}>{this.props.title}</h5>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
};

export default FeatureBox;
