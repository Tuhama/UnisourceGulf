import React, {Component} from 'react';
import './Bodet.less';
import bodetLogo from '../../../images/partners/bodet/bodet-logo.webp';
import clocks from '../../../images/partners/bodet/clocks.webp';
import Bell from '../../../images/partners/bodet/Bell.webp';
import designsScoreboards from '../../../images/partners/bodet/designsScoreboards.webp';
import Sport from '../../../images/partners/bodet/Sport.webp';
import Scorepad from '../../../images/partners/bodet/Scorepad.webp';

export default class Bodet extends Component {
    render() {
        return (
            <div className="b-container">
                <div className="b-header">
                    <div className="b-header-bg"></div>
                    <img src={bodetLogo} alt="Bodet"/>
                    <span className="b-header-font">
                        Since its creation in 1868, Bodet has become the european leader in time management and time measurement - time and attendance, clocks systems.
                    </span>
                </div>


                <div className="b-section">
                    <h1>Clocks</h1>
                    <h3>Bodet, The Leader in Time Display for Over 40 Years</h3>
                    <span>
                    For more than 40 years, Bodet clocks have been trusted products in education, transport, healthcare, finance and industrial sectors, both for their quality and precision.
                    Bodet offers a wide range of analogue, LCD and LED clocks. Our clocks are synchronised via a master clock to guarantee accurate and identical time across your organisation.
                </span>
                    <img src={clocks} alt="Bodet"/>
                    <h2>Why choose Bodet clocks?</h2>
                    <ul className="b-list">
                        <li>
                            <span>Accurate and identical time across your entire clock network.</span>
                        </li>
                        <li>
                            <span>Several time synchronisation standards supported: AFNOR, Impuls, DHF, NTP.</span>
                        </li>
                        <li>
                            <span>Several clock styles: Analogue, LCD & LED clocks.</span>
                        </li>
                        <li>
                            <span>Automatic clock adjustment for DST.</span>
                        </li>
                    </ul>
                    <a href="https://www.bodet-time.com/clocks/select-a-clock.html" target="_blank"
                       rel="noopener noreferrer">
                        <button className="more-button">Read More</button>
                    </a>

                </div>


                <div className="b-section">
                    <h1>Bell System</h1>
                    <h3>Bodet, the leader for bell systems and microphone announcements</h3>
                    <span>
                    For more than 40 years, Bodet clocks have been trusted products in education, transport, healthcare, finance and industrial sectors, both for their quality and precision.

                    Bodet offers a wide range of analogue, LCD and LED clocks. Our clocks are synchronised via a master clock to guarantee accurate and identical time across your organisation.
                    Bodet offers a huge range of audio systems designed to broadcast bells, music, alerts and announcements in schools and colleges, factories, logistics hubs, and more. Our ranges feature sounders and microphones.
                    </span>
                    <img src={Bell} alt="Bodet"/>
                    <h2>Our ranges of audio systems</h2>
                    <ul className="b-list">
                        <li>
                            <span>Interior and exterior audio sounders to broadcast bells, alerts and messages.</span>
                        </li>
                        <li>
                            <span>Interior and exterior strobes synchronised with audio sounders.</span>
                        </li>
                        <li>
                            <span>Manually and remotely triggered systems for easier management of alarms and bells.</span>
                        </li>
                        <li>
                            <span>Microphones to record and send messages.</span>
                        </li>
                    </ul>
                    <a href="https://www.bodet-time.com/audio-systems.html" target="_blank" rel="noopener noreferrer">
                        <button className="more-button">Read More</button>
                    </a>
                </div>


                <div className="b-section">
                    <h1>Scoreboards</h1>
                    <h3>Scoreboards, Video Display, Chronometers, discover our solutions!</h3>
                    <span>
                        Bodet Sport has designed and manufactured scoreboards for sport facilities such as gymnasiums, stadiums and arenas: scoreboards, LED video display. Our solutions are developed in conjunction with industry experts and are certified by the major sports federations.
                    </span>
                    <div className="responsiv-3">
                        <div className="b-subsection">
                            <img src={designsScoreboards} alt="Bodet"/>
                            <span>Bodet designs Scoreboards for a wide range of sports: basketball, handball, volleyball, tennis, football, rugby and many more...</span>
                            <a href="http://www.bodet-sport.com/en/scoreboards/scoreboards.html" target="_blank"
                               rel="noopener noreferrer">
                                <button className="more-button">Read More</button>
                            </a>
                        </div>

                        <div className="b-subsection">
                            <img src={Sport} alt="Bodet"/>
                            <span>Bodet Sport develops video display solutions to boost and intensify your sporting events...</span>
                            <a href="https://www.bodet-sport.com/video-display.html" target="_blank"
                               rel="noopener noreferrer">
                                <button className="more-button">Read More</button>
                            </a>
                        </div>

                        <div className="b-subsection">
                            <img src={Scorepad} alt="Bodet"/>
                            <span>Scorepad is the keyboard to easily manage all our indoor and outdoor scoreboards as well as our LED video solutions.</span>
                            <a href="http://www.bodet-sport.com/scoreboard/scorepad.html" target="_blank"
                               rel="noopener noreferrer">
                                <button className="more-button">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>)
    }
}