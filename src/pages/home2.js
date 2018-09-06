import React from 'react';
import {default as Images} from '../middleware/images';

class HomeRevised extends React.Component {

  render(){
    return (
      <div className="hello">
        <p>Hello person</p>
        <img src={Images.fullLogo}/>
      </div>
    );
  };

}

export default HomeRevised;