import React, {Component} from 'react';
import './Home.less';


export default class Info extends Component {

    render() {
        return (
            <div className="info" style={{zIndex: "1", width: "100%", position: "relative"}}>
                <div style={{
                    position: "absolute",
                    zIndex: "-1",
                    backgroundImage: 'url(info-bg.webp)',
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    opacity: "0.3",
                    backgroundAttachment: "fixed",
                    backgroundSize:"cover",
                }}></div>
                {/*            <div className="info" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(info-bg.webp)',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundAttachment: "fixed"
            }}>*/}


            <div style={{marginLeft:"5vw"}}>
                <br/>
                <br/>
                <br/>
                <span style={{
                    fontFamily: "signika,sans-serif",
                    fontSize: "22px",
                    fontWeight: "bold"
                }}>Who We Are</span>

                <br/>
                <br/>

                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                        <span style={{fontWeight: "700"}}>Uni Source</span>
                    &nbsp;is a general trading company.
                    </span>
                <br/>
                <br/>
                <br/>
                <span style={{
                    fontFamily: "signika,sans-serif",
                    fontSize: "22px",
                    fontWeight: "bold"
                }}>Our Mission</span>
                <br/>
                <br/>

                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                        To provide advanced technology yet easy and bring it to your hand.
                    </span>
                <br/>
                <br/>
                <br/>
                <span style={{
                    fontFamily: "signika,sans-serif",
                    fontSize: "22px",
                    fontWeight: "bold"
                }}>Field Of Work</span>
                <br/>
                <br/>
                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                    <ul style={{
                        font: "normal normal normal 17px/1.4em 'open sans',sans-serif",
                        listStyleType: "disc",
                        paddingLeft: "1.3em",
                        paddingRight: "0",
                        marginLeft: "0.5em",
                        marginRight: "0",
                        lineHeight: "normal",
                        letterSpacing: "normal"
                    }}>
                            <li>
                                CCTV systems
                            </li>
                            <li>
                                Low Voltage
                            </li>
                            <li>
                                Computer Networks
                            </li>
                            <li>
                                IP telephone system
                            </li>
                            <li>
                                Security systems
                            </li>
                            <li>
                                IBMS systems
                            </li>
                            <li>
                                IP Public address systems
                            </li>
                            <li>
                                Satellite systems
                            </li>
                            <li>
                                Barrier Gates
                            </li>
                            <li>
                                Metal Detection
                            </li>
                    </ul>
                </span>
            </div>

            </div>
        );

    }}