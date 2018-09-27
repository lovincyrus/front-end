import React from 'react';

import { default as Images } from '../middleware/images';

import TypistCycle from '../components/typist-cycle';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header theme='light'/>

        <div className='hero section'>
          <div className='container'>
            <div className='content-side'>

              <div className='text'>
                <h1>Pay for your</h1>
                
                <TypistCycle
                  content={[
                    'Subscriptions', //pushes hero section /width/padding
                    'Netflix', /*
                    'Spotify',
                    'Rent',
                    'Insurance',
                    'Loans' */
                  ]}
                  numberOfCycles={-1} // loop indefinitely
                  segmentDelay={1.2} // stop for 0.8s at end line
                />

                <h1>with crypto.</h1>
              </div>

              <div className='description'>
                <h3>8x is a protocol built on Ethereum <br/>
                that enables decentralised<br/>
                repeating payments.</h3>
              </div> 

              <div className='buttons'>
                <div className='whitepaper cta'>
                  <a href="https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf">Read our Whitepaper</a>
                </div>
                <div className='video cta'>
                  <img href="https://www.youtube.com/watch?v=ajJk2W6VF4E" src={Images.buttonplay}/>
                  <a href="https://www.youtube.com/watch?v=ajJk2W6VF4E">Watch Video</a>
                </div>
              </div>
            </div>

            <div className='image-side'>
              <img src={Images.iPhoneX}/>
            </div> 

          </div>
        </div> 

        <div className='features section'>

          <div className='sub-heading-container'>
            <h2>Subscription payments<br/>are finally coming to Ethereum</h2>
          </div>

          <div className='list-container'>    
            <div className='left-side'>
              <img src={Images.netflixsubscription}/>
            </div>

            <div className='right-side'>
              <div className='content'>
                <h4> Direct Debit </h4>
                <h5>Tokens are taken directly from a user’s wallet. No escrow account or advanced upfront payments required.</h5>
              </div>
              <div className='content'>
                <h4> Zero Volatility </h4>
                <h5>Through the use of stable coins (DAI), volatility can be eliminated for users and businesses. 8x is ERC20 agnostic.</h5>
              </div>
              <div className='content'>
                <h4> Execution </h4>
                <h5>A network of distributed service nodes run by token holders ensure payments are collected on-time.</h5>
              </div>
            </div>

          </div>
        </div>

        <div className='partner'>
          <div className='container'>
            <h2> We&apos;ve partnered with</h2>

            <div className='logos-container'>
              <img className='logos' src={Images.tenzLogo}/>
              <img className='logos' src={Images.MKRLogo}/>
              <img className='logos' src={Images.bitfwdLogo}/>
            </div>
          </div>
        </div>
        
        <div className='buidl'>
          <div className='container'>

            <div className='text-container'>
              <h2>We&apos;re #buidling the</h2>
              <h2>future of payments.</h2>
              <p>Sign up as a Beta Tester today.</p>
            </div>

            {/*<div className='email cta'>
              <p> Enter your Email Address</p>

              <div className='subscribe-button'>
                <p1>Subscribe</p1>
              </div>
              </div>*/}
            <Subscribe/>

          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

export default Home;