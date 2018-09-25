import React from 'react'; 

import { default as Images } from '../middleware/images';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

class ProtocolWeekly extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div style={{backgroundColor: '#100832'}}>
        <Header theme='dark'/>
        <div className='hero-section'>
          <div className='container'>
            <div className='text-section'>

              <div className='subscribe-subheading'>
                <h1>Subscribe to</h1>
                <h1> Protocol Weekly</h1>
              </div>

              <div className='description'>
                <p>Weekly updates from 8x and other</p>
                <p>Ethereum exclusive protocols.</p>
              </div>

            </div>

            <div className='subscribe-cta'>
              <p>Enter your Email Address</p>
              <div className='subscribe-button'>
                <p1>Subscribe</p1>
              </div>
            </div>

            <div className='subscribe-button-mobile'>
              <p>Subscribe</p>
            </div>

          </div>
        </div>

        <div className='participant-section'>
          <div className='container'>
            <h5>Participating Projects</h5>

            <div className='logos-container'>

              <div className='logo'>
                <img className='img' src={Images.kyberLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.civicLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.enigmaLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.liquidityLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.quantstampLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.originLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.setLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.dharmaLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.loopringLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.maticLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.codexLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.connextLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.thegraphLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.abacusLogo}/>
              </div>

              <div className='logo'>
                <img className='img' src={Images.logoBorder}/>
              </div>

            </div>


          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

export default ProtocolWeekly; 