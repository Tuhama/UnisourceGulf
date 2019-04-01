import React, {Component} from 'react';
import {Carousel} from 'antd';
import './Home.less'

export default class PartnersCarousel extends Component {

    render() {
        return <Carousel /*autoplay*/>
                <div>
                    <div className="carousel-container">
                        <img src="partners/2n-bg.webp" alt="" className="carousel-bg"/>
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
                            <img src="partners/2n-logo.webp" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="carousel-container">
                        <img src="partners/grandstream-bg.webp" alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "170px",right: "10px",width:"50%",color:"rgb(255,255,255)",display:"flex",flexDirection: "column" }}>

                            <div style={{alignSelf: "flex-end" }}>
                                <img src="partners/grandstream-logo.webp" alt=""/>
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
                        <img src="partners/loytec-bg.webp" alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "170px",left: "10px",width:"50%",display:"flex",flexDirection: "column" }}>

                            <div style={{alignSelf: "flex-start" }}>
                                <img src="partners/loytec-logo.webp" alt=""/>
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
                        <img src="partners/engo-bg.webp" alt="" className="carousel-bg"/>
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