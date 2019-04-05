import React, {Component} from 'react';
import {Carousel} from 'antd';
import './Home.less';
import nLogo from '../../../images/partners/2n/2n-logo.webp';
import nBg from '../../../images/partners/2n/2n-bg.webp';
import grandLogo from '../../../images/partners/grandStream/grandstream-logo.webp';
import grandBg from '../../../images/partners/grandStream/grandstream-bg.webp';
import loytecLogo from '../../../images/partners/loytec/loytec-logo.webp';
import loytecBg from '../../../images/partners/loytec/loytec-bg.webp';
import engoBg from '../../../images/partners/engoPlanet/engo-bg.webp';

export default class PartnersCarousel extends Component {

    render() {
        return <Carousel autoplay>
                <div>
                    <div className="carousel-container">
                        <img src={nBg} alt="" className="carousel-bg"/>
                      <div style={{position:"absolute",bottom: "30px",right: "10px",width:"55%"}}>
                            <div>
                                <span style={{letterSpacing:"0.15em",fontSize:"21px"}}>GIVE YOUR VISITORS A FIRST CLASS WELCOME</span>
                                <br/>
                                <span>Welcome your visitors in style. Choose the stylish door intercom from 2N. You will see
                                    the
                                    benefit not only of increased security for your loved ones, but also the modern design,
                                    ground-breaking functionality and materials...
                                </span>
                            </div>
                          <br/>
                          <br/>
                            <div style={{float:"right"}}>
                            <img src={nLogo} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="carousel-container">
                        <img src={grandBg} alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "170px",right: "10px",width:"50%",color:"rgb(255,255,255)",display:"flex",flexDirection: "column" }}>

                            <div style={{alignSelf: "flex-end" }}>
                                <img src={grandLogo} alt=""/>
                            </div>
                            <div style={{height:"20vh"}}></div>
                                <span>
                                    IP Video Phones for Android ™ are 6-line IP phones that offer a powerful multimedia
                                    experience including multi-platform video calling and full access to all apps in the Google
                                    Play Store – including popular business apps.
                                </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-container">
                        <img src={loytecBg} alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "170px",left: "10px",width:"50%",display:"flex",flexDirection: "column" }}>

                            <div style={{alignSelf: "flex-start" }}>
                                <img src={loytecLogo} alt=""/>
                            </div>
                            <div style={{height:"10vh"}}></div>
                            <span  style={{letterSpacing:"0.15em",fontSize:"21px"}}>
                        LOYTEC offers a wide range of products for various applications in building automation.
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-container">
                        <img src={engoBg} alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "50px",right: "10px",width:"50%",display:"flex",flexDirection: "column" }}>
                            <span  style={{letterSpacing:"0.15em",fontSize:"21px"}}>
                        Powered only by renewable energy sources, EnGoPLANET Smart Street Lights will illuminate
                        streets, parks, parking lots, corporate and university campuses
                            </span>
                        </div>
                    </div>
                </div>
            </Carousel>
            ;
        }
}