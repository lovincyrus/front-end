/* Import statements */
import React from 'react';
import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';
import TypistCycle from '../components/typist-cycle';
import FeatureBox from '../components/feature-box';

import {default as Images} from '../middleware/images';

class About extends React.Component {
  render() {
    return (
      <div>

        <div className='how-it-started section'>
          <div className='container'>
            <h1>How it all started</h1>
            <p>
              At the age of 12, Kerman started coding iOS apps.
              When he was 14, he wanted an easy to use app that
              would let him remember his homework.
              So, he developed The Homework App.
              Till date it’s been downloaded over 2,000,000+ times,
              has 50,000 monthly users and featured on prominent
              news outlets.
            </p>
            <div className='showcase'>
              <div className='screenshots-container'>
                <img src={Images.thaScreenshotOne}/>
                <img src={Images.thaScreenshotTwo}/>
                <img className='hide-mobile' src={Images.thaScreenshotThree}/>
              </div>
              <div className='media-container'>
                <img src={Images.forbes}/>
                <img src={Images.yahoo}/>
                <img src={Images.lifehacker}/>
              </div>
            </div>
          </div>
        </div>

        <div className='first-project section' style={{ background: '#FAFAFA'}}>
          <div className='container'>
            <div className='info side'>
              <h1>First project</h1>
              <p>
                The team’s first project was a masternode hosting site with a monthly subscription model.
                However one week later it got shut down since the business was providing “prohibited” activities according to banks.
              </p>
            </div>
            <div className='image side'>
              <img src={Images.masternodeHosting}/>
            </div>
          </div>
        </div>

        <div className='protocol-born section' style={{ background: `url(${Images.confettiLarge})`, backgroundPosition: 'center' }}>
          <div className='container'>
            <div className='image side'>
              <img src={Images.overview}/>
            </div>
            <div className='info side'>
              <h1>8x is born</h1>
              <p>
                To our surprise there wasn’t a solution to enable recurring payments.
                Hence we spent a few weeks researching ways to solve the three main problems with recurring payments:<br/><br/>

                1. <span className='bold'>Volatility</span>. Merchants don’t want to deal with volatility.
                Using a stable coin for transactions, we solved this problem.<br/><br/>

                2. <span className='bold'>Push based</span>. Blockchains require a private key to sign and make a transaction.
                Using the ERC20 approve function, we can gain pre-authorisation to pull funds from a user’s wallet directly.<br/><br/>

                3. <span className='bold'>Scheduling</span>. You can’t schedule a smart contract to call itself at a later point in time.
                8x token holders earn a fee for executing transactions billing period on behalf of subscribers.<br/><br/>
              </p>
            </div>
          </div>
        </div>

        <div className='community section'>
          <div className='container'>
            <div className='info side'>
              <h1>Community initiative</h1>
              <p>
                We wanted to unite all the layer 2 protocols built on Ethereum.
                So we decided to start a grass-roots effort to reach out to all the protocols and unite them via a newsletter.
                The result was Protocol Weekly which contains updates from each project and one thing they need help with.
                <br/><br/>We&apos;re also part of the Consensys ERC948 working group which aims to define a standard for recurring payments.
              </p>
            </div>
            <div className='image side'>
              <img src={Images.newsletter}/>
            </div>
          </div>
        </div>

        <div className='our-team section'>
          <div className='container'>
            <h1>Our team</h1>
            <div className='people-container'>
              <PersonBox
                name={'Kerman'}
                title={'Founder/Engineer'}
                image={Images.kerman}
                twitter={'https://twitter.com/kermankohli'}
                github={'https://github.com/kermankohli'}
                linkedin={'https://www.linkedin.com/in/kermankohli/'}
                medium={'https://medium.com/@kermankohli/introducing-the-8x-protocol-4051e8df3000'}/>
              <PersonBox
                name={'Andy'}
                title={'Marketing'}
                image={Images.andy}
                twitter={'https://www.linkedin.com/in/dtbar/'}
                github={''}
                linkedin={'https://www.linkedin.com/in/andy-chen-fang/'}
                medium={'https://medium.com/@andy8xprotocol'}/>
              <PersonBox
                name={'Kevin L'}
                title={'Community'}
                image={Images.kevinL}
                twitter={'https://twitter.com/sydneykevinlu'}
                github={''}
                linkedin={'https://www.linkedin.com/in/kevin-lu-a95017147/'}
                medium={'https://medium.com/@kevinjaylu'}/>
              <PersonBox
                name={'Kevin Z'}
                title={'Operations'}
                image={Images.kevinZ}
                twitter={'https://twitter.com/Kadesda'}
                github={''}
                linkedin={'https://www.linkedin.com/in/kevin-zheng-04470a58/'}
                medium={'https://medium.com/@kevin.zheng/'}/>
              <PersonBox
                name={'Rob'}
                title={'Advisor'}
                image={Images.rob}
                twitter={'https://twitter.com/rob_prismatik'}
                github={''}
                linkedin={'https://www.linkedin.com/in/robmorris/'}
                medium={'https://blog.prismatik.com.au/@rob_prismatik'}/>
              <PersonBox
                name={'Daniel'}
                title={'Advisor'}
                image={Images.daniel}
                twitter={'https://twitter.com/danieltbar'}
                github={''}
                linkedin={'https://www.linkedin.com/in/dtbar/'}
                medium={'https://medium.com/@damndaniel'}/>
            </div>
          </div>
        </div>

        <div className='hero-separator'>
          <img src={Images.blueWaves}/>
        </div>

      </div>
    );
  }
}

export default About;
