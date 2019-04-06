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
        return <Carousel >
                <div>
                    <div className="carousel-container">
                        <img src={nBg} alt="" className="carousel-bg"/>
                      <div style={{position:"absolute",bottom: "1vh",right: "10px",width:"55%",height:"100%",
                          display:"grid",
                          gridTemplateRows:"2fr 2fr 1fr",
                          gridGap:"2vmin"}}>

                                <div style={{letterSpacing:"0.15em",fontSize:"4vmin",alignSelf:"end"}}>GIVE YOUR VISITORS A FIRST CLASS WELCOME</div>
                                <div style={{letterSpacing:"0.15em",fontSize:"3vmin"}}>Welcome your visitors in style. Choose the stylish door intercom from 2N. You will see
                                    the
                                    benefit not only of increased security for your loved ones, but also the modern design,
                                    ground-breaking functionality and materials...
                                </div>
                            <img src={nLogo} alt="" style={{objectFit: "scale-down",width:"50%",height:"100%",display: "block",justifySelf:"right"}}/>

                        </div>
                    </div>

                </div>
                <div>
                    <div className="carousel-container">
                        <img src={grandBg} alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "1vh",right: "10px",width:"60%",height:"100%",color:"rgb(255,255,255)",
                            display:"grid",
                            gridTemplateRows:"2fr 3fr",
                            gridGap:"5vmin",}}>

                                <img src={grandLogo} alt="" style={{objectFit: "scale-down",width:"60%",height:"100%",display: "block",justifySelf:"right"}}/>

                                <div style={{letterSpacing:"0.15em",fontSize:"3vmin"}}>
                                    IP Video Phones for Android ™ are 6-line IP phones that offer a powerful multimedia
                                    experience including multi-platform video calling and full access to all apps in the Google
                                    Play Store – including popular business apps.
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-container">
                        <img src={loytecBg} alt="" className="carousel-bg"/>
                        <div style={{
                            display:"grid",
                            gridTemplateRows:"1fr 2fr",
                            gridGap:"5vh",
                            position:"absolute",left: "10px",width:"50%",height:"100%" }}>


                                <img src={loytecLogo} alt="" style={{objectFit: "scale-down",width:"80%",display: "block",alignSelf:"center"}}/>

                            <div  style={{letterSpacing:"0.15em",fontSize:"3vmin"}}>
                        LOYTEC offers a wide range of products for various applications in building automation.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-container">
                        <img src={engoBg} alt="" className="carousel-bg"/>
                        <div style={{position:"absolute",bottom: "0.5vh",right: "10px",width:"50%",height:"50%",display:"flex",flexDirection: "column" }}>
                            <span  style={{letterSpacing:"0.15em",fontSize:"3vmin"}}>
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