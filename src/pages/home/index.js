/* Import statements */
import React, { Component } from 'react';
import EcosystemBox from '../../components/ecosystem-box';
import Subscribe from '../../components/subscribe';
import PersonBox from '../../components/person-box';

import styles from './style.scss';
import diagram from '../../assets/images/8x-diagram.png';

import redCheckmark from '../../assets/images/red-checkmark.png';
import yellowCheckmark from '../../assets/images/yellow-checkmark.png';
import greenCheckmark from '../../assets/images/green-checkmark.png';

import businessIcon from '../../assets/images/business.png';
import userIcon from '../../assets/images/user.png';
import tokenHoldersIcon from '../../assets/images/token-holders.png';

import memphisBackground from '../../assets/images/memphis-colorful.png';

import card from '../../assets/images/card.png'
import coins from '../../assets/images/coins.png'
import cash from '../../assets/images/cash.png'

import overview from '../../assets/images/overview.png';

import desk from '../../assets/images/desk.png';
import platform from '../../assets/images/platform.png';
import chip from '../../assets/images/chip.png';

import kerman from '../../assets/images/kerman.jpg';
import gal from '../../assets/images/gal.jpg';
import kevinZ from '../../assets/images/kevinz.jpg';
import kevinL from '../../assets/images/kevinl.jpg';
import daniel from '../../assets/images/daniel.jpg';
import kamal from '../../assets/images/kamal.jpg';
import rob from '../../assets/images/rob.jpg';
import andy from '../../assets/images/andy.jpg';

import teamLogo from '../../assets/images/8x-team.png';

import subscriptionsPreview from '../../assets/images/subscriptions-preview.png';

class Home extends Component {
   render() {
        return (
            <div>

                <div class="hero section">

                    <div class="container">

                        <div class="image-side">
                            <img src={diagram}/>
                        </div>

                        <div class="content-side">
                            <h1>Recurring stable payments on the blockchain.</h1>
                            <p class="description">Decentralised recurring cryptocurrency payments powered by Ethereum smart contracts and stable coin technology.</p>
                            <Subscribe/>
                        </div>

                    </div>

                </div>

                <div class="what section-alt">

                    <div class="container">

                        <div class="header-container">
                            <img src={coins}/>
                            <h1>What is 8x?</h1>
                        </div>
                        <h5>
                            8x is a protocol for facilitating recurring crypto payments without exposing consumers or businesses to the volatility of crypto currencies. McKinsey estimates the subscription economy will be worth over $500B by 2020 with 80% of software products & services moving to a subscription model.
                        </h5>
                        
                        <img class="preview-image" src={subscriptionsPreview}/>
                    </div>

                </div>

                 <div class="how section">

                    <div class="container">

                        <div class="header-container">
                            <img src={cash}/>
                            <h1 class="center-text">How does it work?</h1>
                        </div>

                        <h5 class="description">
                            The following flow is shown once a user has given the protocol permission to transfer stable coins on their behalf. 1 stable coin = $1 USD.
                        </h5>

                        <img class="overview-image" src={overview}/>

                    </div>

                </div>

                <div class="why section-alt">

                    <div class="container">

                        <div class="header-container">
                            <h1 class="center-text">Why the 8x token?</h1>
                        </div>

                        <h5 class="description">
                            Businesses and users have no utility with the 8x token<br/>as it is only required to operate a service node in the network.
                        </h5>

                        <div class="reasons-container">

                            <div class="reason">
                                <img class="icon" src={desk}/>
                                <p>
                                    8x tokens are required to be staked in order to run service nodes. 
                                    This in turns allows token holders to earn up to 1% of every transaction executed by them. The larger the transaction, the more 8x tokens are required.
                                </p>
                            </div>

                            <div class="reason">
                                <img class="icon" src={platform}/>
                                <p>
                                    If service nodes claim the right to execute a transaction 20 days before a monthly payment is due, they earn 1/3 of 1%. 
                                    The remaining 2/3 of the 1% fee are used to purchase 8x tokens on the market and then burned.
                                </p>
                            </div>

                            <div class="reason">
                                <img class="icon" src={chip}/>
                                <p>
                                    Governance rights. Any major changes to the protocol may be voted on based on the number of tokens held.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="ecosystem section">

                    <div class="container">

                        <div class="header-container">
                            <h1 className="center-text">Ecosystem</h1>
                            <h5>The 8x protocol requires an ecosystem of businesses, consumers and token holders in order to operate. </h5>
                        </div>

                        <div class="items">

                            <EcosystemBox header={businessIcon} tick={redCheckmark} title="Businesses" features={["Zero volatility through the use of Dai stable coin", "Cheaper than Stripe & PayPal", "Easy to implement SDKs"]}/>
                            <EcosystemBox header={userIcon} tick={yellowCheckmark} title="Users" features={["Zero volatility through the use of Dai stable coin", "Manage all your subscriptions through one interface", "Your funds always stay with you, in your control"]}/>
                            <EcosystemBox header={tokenHoldersIcon} tick={greenCheckmark} title="Token Holders" features={["Earn 8x tokens by processing transactions on the network", "Have a say in what changes are made to the protocol"]}/>

                        </div>

                    </div>

                </div>

                <div class="team section">

                    <div class="container">

                        <div class="header-container">
                        <h1 className="center-text" style={{color: 'white'}}>Who are we?</h1>
                        </div>

                        <div class="people">

                            <PersonBox name="Kerman" description="Engineering" photo={kerman}/>
                            <PersonBox name="Kevin L." description="Marketing" photo={kevinL}/>
                            <PersonBox name="Andy" description="Community" photo={andy}/>
                            <PersonBox name="Gal" description="Business Dev" photo={gal}/>
                            <PersonBox name="Kevin Z." description="Business Analyst" photo={kevinZ}/>
                            {/*<PersonBox name="Renee" description="Community (Mandarin)" photo={kerman}/>*/}
                            <PersonBox name="Rob" description="Advisor" photo={rob} advisor={true}/>
                            <PersonBox name="Daniel" description="Advisor" photo={daniel} advisor={true}/>
                            <PersonBox name="Kamal" description="Advisor" photo={kamal} advisor={true}/>

                        </div>
                        

                    </div>

                </div>

            </div>
        )
   }
}

export default Home;
