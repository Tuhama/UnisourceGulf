import React, {Component} from 'react';
import './Home.less';
import GalleryItem from "./GalleryItem";

import nLogo from '../../../images/partners/2n/2n-logo.webp';
import grandLogo from '../../../images/partners/grandStream/grandstream-logo.webp';
import loytecLogo from '../../../images/partners/loytec/loytec-logo.webp';
import engoLogo from '../../../images/partners/engoPlanet/engo-logo.webp';
import timeLogo from '../../../images/partners/timelink-logo.webp';
import bodetLogo from '../../../images/partners/bodet/bodet-logo.webp';


export default class PartnersGallery extends Component {

    render() {
        const partners = [
            {
                alt: "grandstream",
                address: "",
                img: grandLogo,
                text: "Grandstream has been connecting the world since 2002. The Grandstream names means quality, innovation and reliability as we have been manufacturing cutting-edge IP unified communications products for over 15 years with the main focus of maximizing business productivity, efficiency and communication."
            },
            {alt: "2N", address: "", img: nLogo, text: "2N is a leading European company engaged in the development and manufacture of products in the field of ICT and physical security. Their best-in-class portfolio of products and solutions are designed to makes life easier, better and more secure."},
            {alt: "Loytec", address: "", img: loytecLogo, text: "The expert on intelligent network infrastructure products for building automation, focuses on open and standardized communication protocols."},
            {alt: "EngoPlanet", address: "", img: engoLogo, text: "EnGoPlanet was born in New York City in 2016. The idea of forming our company came after the hurricane Sandy, during which half of Manhattan had no power for almost 7 days. The fact that one of the most important cities in world did not have a proper alternative to provide its citizens with energy for their basic needs was disconcerting."},
            {alt: "Bodet", address: "", img: bodetLogo, text: "Since its creation in 1868 to install tower clocks, Bodet has become the european leader in time and attendance management and time measurement solutions through its 5 activities. Our expertise is recognised around the world for the quality and reliability of our products."},
            {alt: "TimeLink", address: "", img: timeLogo, text: "TimeLink was founded in 2004 and became a listed company in 2016. We focus on Man-Machine Interaction (MMI) and Human-Computer Interface (HCI) research and development. TimeLink obtains many patents in Chinese multi-touch industry. It is also one of the few companies that offer multi-touch products with above 10 touch points all over the world."},

        ];
        return (
            <a id="Partners" href="#">
            <div style={{pointerEvents: "none"}}>
                <h2 style={{
                    position: "relative",
                    margin: "0.3em",
                    left: "20px", fontSize: "44px"
                }}>
                    Partners
                </h2>
                <div className="gallery">
                    {partners.map(
                        p => {
                            return <GalleryItem key={p.alt} alt={p.alt} text={p.text} address={p.address} img={p.img}/>;
                        }
                    )}
                </div>
            </div>
            </a>

        );
    }
}