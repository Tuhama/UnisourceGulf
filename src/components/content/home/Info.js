import React, {Component} from 'react';
import './Home.less';


export default class Info extends Component {

    render() {
        return (
            <div className="info">
                <div className="info-bg"></div>


            <div style={{marginLeft:"5vw"}}>
                <br/>
                <br/>
                <br/>
                <span className="info-font-bold">Who We Are</span>

                <br/>
                <br/>

                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                        <span style={{fontWeight: "700"}}>Uni Source</span>
                    &nbsp;is a general trading company.
                    </span>
                <br/>
                <br/>
                <br/>
                <span  className="info-font-bold">Our Mission</span>
                <br/>
                <br/>

                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                        To provide advanced technology yet easy and bring it to your hand.
                    </span>
                <br/>
                <br/>
                <br/>
                <span  className="info-font-bold">Field Of Work</span>
                <br/>
                <br/>
                <span style={{fontFamily: "open sans,sans-serif", fontSize: "17px"}}>
                    <ul className="info-list">
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