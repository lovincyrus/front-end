import React from 'react';

import { default as Images } from '../middleware/images';
import { Link } from 'react-router-dom';

import TypistCycle from '../components/typist-cycle';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <Header theme='light'/>

        <div className='hero section'>
          <div className='container'>
            <div className='content-side'>

              <div className='text'>
                <h1>Pay for your</h1>

                <TypistCycle
                  content={[
                    'Subscriptions', //pushes hero section /width/padding
                    'Netflix',
                    'Spotify',
                    'Rent',
                    'Insurance',
                    'Loans'
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
                  <Link to='/beta'>Try out our beta now!</Link>
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
              <p>Sign to receive updates.</p>
            </div>

            <Subscribe
              backgroundColor='#ffffff'
              url='https://8xprotocol.us18.list-manage.com/subscribe/post?u=a6505d4982ebb2a66c4f9dcea&amp;id=7a717337e6'
            />

          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

export default Home;