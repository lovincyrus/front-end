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
                                    This in turns allows token holders to earn a fee from every transaction executed by them. The larger the transaction, the more 8x tokens are required.
                                </p>
                            </div>

                            <div class="reason">
                                <img class="icon" src={platform}/>
                                <p>
                                    Token holders can set the strategy they would like to play in order to claim subscriptions. High risk, high reward? Or balanced risk with consistent returns?
                                </p>
                            </div>

                            <div class="reason">
                                <img class="icon" src={chip}/>
                                <p>
                                    Service nodes earn in the stable coin being transacted, not 8x tokens. In addition, gas costs are pre-paid by the user so extra costs do not have to be factored into expected profts.
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

                            <EcosystemBox header={businessIcon} tick={redCheckmark} title="Businesses" features={["Zero volatility through the use of Dai stable coin", "Set your own transaction fee based on your business model", "Easy to implement SDKs"]}/>
                            <EcosystemBox header={userIcon} tick={yellowCheckmark} title="Users" features={["Zero volatility through the use of Dai stable coin", "Manage all your subscriptions through one interface", "Your funds always stay with you, in your control"]}/>
                            <EcosystemBox header={tokenHoldersIcon} tick={greenCheckmark} title="Token Holders" features={["Earn by processing transactions on the network", "Select your service node's strategy"]}/>

                        </div>

                    </div>

                </div>

                <div class="team section">

                    <div class="container">

                        <div class="header-container">
                        <h1 className="center-text" style={{color: 'white'}}>Who are we?</h1>
                        </div>

                        <div class="people">

                            <PersonBox name="Kerman" description="Engineering" photo={kerman} linkedIn="https://www.linkedin.com/in/kermankohli/"/>
                            <PersonBox name="Kevin L." description="Marketing" photo={kevinL} linkedIn="https://www.linkedin.com/in/kevin-lu-a95017147/"/>
                            <PersonBox name="Andy" description="Community" photo={andy} linkedIn="https://www.linkedin.com/in/andy-chen-fang/"/>
                            <PersonBox name="Gal" description="Business Dev" photo={gal} linkedIn="https://www.linkedin.com/in/gal-stern-90058713a/"/>
                            <PersonBox name="Kevin Z." description="Business Analyst" photo={kevinZ} linkedIn="https://www.linkedin.com/in/kevin-zheng-04470a58/"/>
                            {/*<PersonBox name="Renee" description="Community (Mandarin)" photo={kerman}/>*/}
                            <PersonBox name="Rob" description="Advisor" photo={rob} advisor={true} linkedIn="https://www.linkedin.com/in/robmorris/"/>
                            <PersonBox name="Daniel" description="Advisor" photo={daniel} advisor={true} linkedIn="https://www.linkedin.com/in/dtbar/"/>
                            <PersonBox name="Kamal" description="Advisor" photo={kamal} advisor={true} linkedIn="https://www.linkedin.com/in/kamalsarma/"/>

                        </div>
                        

                    </div>

                </div>

            </div>
        )
   }
}

export default Home;
