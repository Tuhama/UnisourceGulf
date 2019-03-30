import React, {Component} from 'react';
import {Carousel} from 'antd';
import './Home.less'

export default class PartnersCarousel extends Component {

    render() {
        return <Carousel autoplay>
                <div>

                    <div
                        style={{
                            backgroundImage: 'url(partners/2n-bg.webp)',
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%"
                        }}>
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
                    <div
                        style={{
                            backgroundImage: 'url(partners/grandstream-bg.webp)',
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%"
                        }}>
                        IP Video Phones for Android ™ are 6-line IP phones that offer a powerful multimedia
                        experience including multi-platform video calling and full access to all apps in the Google
                        Play Store – including popular business apps.
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: 'url(partners/loytec-bg.webp)',
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%"
                        }}>
                        LOYTEC offers a wide range of products for various applications in building automation.
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: 'url(partners/engo-bg.webp)',
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%"
                        }}>
                        Powered only by renewable energy sources, EnGoPLANET Smart Street Lights will illuminate
                        streets, parks, parking lots, corporate and university campuses
                    </div>
                </div>
            </Carousel>
            ;
        }
}