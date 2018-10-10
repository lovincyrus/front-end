import React from 'react';

import { default as Images } from '../middleware/images';

import Header from '../components/header';
import Footer from '../components/footer';

class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <Header theme='light'/>

        <div className='about-title'>
          <div className='large-title'>
            <h1>About Us</h1>
          </div>
          <h5>We&apos;re real people too.<br/>Learn about our journey.</h5>
        </div>

        <div className='content-container'>
          <div className='how-container'>
            <div className='how-text'>
              <h4>How it all started</h4>
              <h5>At the age of 12, Kerman started coding iOS apps. When he was 14, he wanted an easy to use app that would let him remember his homework. So, he developed The Homework App. Till date it’s been downloaded over 2,000,000+ times, has 50,000 monthly users and featured on prominent news outlets. </h5>
            </div>

            <div className='how-image'>
              <img src={Images.homeworkapp}/>
            </div>

            <div className='how-image-mobile'>
              <img src={Images.homeworkappmobile}/>
            </div>
          </div>

          <div className='intro-container'>
            <div className='intro-image'>
              <img src={Images.team}/>
            </div>
            <div className='intro-text'>
              <h4>Introduction to crypto</h4>
              <h5>Late 2017, Kerman met an entrepreneur called Rob Morris who converted Kerman from being a no-coiner to reading the Bitcoin white paper to developing on Ethereum. During this time he met Andy Chen Fang, Kevin Lu & Kevin Zheng at a crypto meetup.</h5>
            </div>
          </div>

          <div className='project-container'>
            <div className='project-text'>
              <h4>First project</h4>
              <h5>The team’s first project was a masternode hosting site with a monthly subscription model using Stripe. However one week later we got shut down since the business was providing “prohibited” activities according to banks.</h5>
            </div>
            <div className='project-image'>
              <img src={Images.project}/>
            </div>
          </div>

          <div className='born-container'>
            <div className='born-image'>
              <img src={Images.born}/>
            </div>
            <div className='born-text'>
              <h4>8x is born</h4>
              <h5>To our surprise there wasn’t a solution to enable recurring payments. Hence we spent a few weeks researching ways to solve the three main problems with recurring payments:<br/><br/>
                <b>1. Volatility:</b><br/> Merchants don’t want to deal with volatility. Using a stable coin for transactions, we solved this problem.<br/><br/>
                <b>2. Push based:</b><br/> Blockchains require a private key to sign and make a transaction. Using the ERC20 approve function, we can gain pre-authorisation to pull funds from a user’s wallet directly.<br/><br/>
                <b>3. Scheduling:</b><br/> You can’t schedule a smart contract to call itself at a later point in time. 8x token holders earn a fee for executing transactions billing period on behalf of subscribers.</h5>
            </div>
          </div>

          <div className='community-container'>
            <div className='community-text'>
              <h4>Community initiative</h4>
              <h5>We wanted to unite all the layer 2 protocols built on Ethereum. So we decided to start a grass-roots effort to reach out to all the protocols and unite them via a newsletter. The result was Protocol Weekly which contains updates from each project and one thing they need help with.</h5>
            </div>
            <div className='community-image'>
              <img src={Images.community}/>
            </div>
            <div className='community-image-mobile'>
              <img src={Images.protocolweeklylogo}/>
            </div>
          </div>
        </div>

        <div className='our-team'>

          <div className='our-title'>
            <h1>Our Team</h1>
          </div>

          <div className='team-grid-container'>

            <div className='team-image'>
              <img className='img' src={Images.kerman}/>
              <div className='team-text'>
                <h6>Kerman</h6>
                <h5>Founder/Engineer</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/kermankohli' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://github.com/kermankohli'rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.githubteam}/>
                </a>
                <a href='https://medium.com/@kermankohli' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/kermankohli/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>

            <div className='team-image'>
              <img className='img' src={Images.andy}/>
              <div className='team-text'>
                <h6>Andy</h6>
                <h5>Marketing</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/vndicrypto' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://github.com/andytcf' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.githubteam}/>
                </a>
                <a href='https://medium.com/@andycf' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/andy-chen-fang/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>

            <div className='team-image'>
              <img className='img' src={Images.kevinl}/>
              <div className='team-text'>
                <h6>Kevin L</h6>
                <h5>Product</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/sydneykevinlu' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://github.com/sydneykevinlu' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.githubteam}/>
                </a>
                <a href='https://medium.com/@kevinjaylu' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/kevin-lu-a95017147/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>

            <div className='team-image'>
              <img className='img' src={Images.kevinz}/>
              <div className='team-text'>
                <h6>Kevin Z</h6>
                <h5>Operations</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/Kadesda' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://medium.com/@kevin.zheng' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/kevin-zheng-04470a58/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>

            <div className='team-image'>
              <img className='img' src={Images.rob}/>
              <div className='team-text'>
                <h6>Rob</h6>
                <h5>Advisor</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/rob_prismatik' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://medium.com/@rob_prismatik' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/robmorris/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>

            <div className='team-image'>
              <img className='img' src={Images.daniel}/>
              <div className='team-text'>
                <h6>Daniel</h6>
                <h5>Advisor</h5>
              </div>
              <div className='team-socials'>
                <a href='https://twitter.com/danieltbar' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.twitterteam}/>
                </a>
                <a href='https://medium.com/@damndaniel' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.mediumteam}/>
                </a>
                <a href='https://www.linkedin.com/in/dtbar/' rel='noopener noreferrer' target="_blank">
                  <img className='social-logo' src={Images.linkedinteam}/>
                </a>
              </div>
            </div>
          </div>

        </div>

        <Footer/>
      </div>
    );
  }
}

export default About;