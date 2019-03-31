import React, {Component} from 'react';
import {Carousel} from 'antd';
import './Home.less'

export default class PartnersCarousel extends Component {

    render() {
        return <Carousel autoplay>
                <div style={{position: "relative"}}>
                        <img src="partners/2n-bg.webp" alt=""/>
                       <div style={{position:"absolute",bottom: "8px",
                           right: "16px",zIndex:"5"}}>
                           <h2>GIVE YOUR VISITORS A FIRST CLASS WELCOME</h2>
                           <br/>
                           <h4>Welcome your visitors in style. Choose the stylish door intercom from 2N. You will see
                               the
                               benefit not only of increased security for your loved ones, but also the modern design,
                               ground-breaking functionality and materials...
                           </h4>
                       </div>
                </div>
                <div>
                        <img src="partners/grandstream-bg.webp" alt=""/>
                        <div style={{position:"absolute",bottom: "8px",
                            right: "16px",zIndex:"5"}}>
                        IP Video Phones for Android ™ are 6-line IP phones that offer a powerful multimedia
                        experience including multi-platform video calling and full access to all apps in the Google
                        Play Store – including popular business apps.
                    </div>
                </div>
                <div>
                        <img src="partners/loytec-bg.webp" alt=""/>
                        <div style={{position:"absolute",bottom: "8px",
                            right: "16px",zIndex:"5"}}>
                        LOYTEC offers a wide range of products for various applications in building automation.
                    </div>
                </div>
                <div>
                        <img src="partners/engo-bg.webp" alt=""/>
                        <div style={{position:"absolute",bottom: "8px",
                            right: "16px",zIndex:"5"}}>
                        Powered only by renewable energy sources, EnGoPLANET Smart Street Lights will illuminate
                        streets, parks, parking lots, corporate and university campuses
                    </div>
                </div>
            </Carousel>
            ;
        }
}