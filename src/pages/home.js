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
                <Link to='/beta'>
                  <div>
                    <button className='whitepaper cta'>Try out our beta now!</button>
                  </div>
                </Link>
                <a href="https://www.youtube.com/watch?v=ajJk2W6VF4E" target="_blank">
                  <div>
                    <button className='video cta'>Watch Video</button>
                  </div>
                </a>
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

        <div className='developers section'>
          <div className='container'>
            <h2> Developer Friendly</h2>
            <h5>
              We’ve made implementing subscription payments as simple as a few lines of code.<br/><br/>
              Don’t want to build UI components? You can use the EightExPay popup modal as shown above to charge your users.
            </h5>
            <img src={Images.code}/>
            <a href="https:/docs.8xprotocol.com" target="_blank">
              <div>
                <button className='build cta'>Start building</button>
              </div>
            </a>
          </div>
        </div>

        <div className='buidl section'>
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