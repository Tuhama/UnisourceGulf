import React, {Component} from 'react';
import './Home.less';
import PartnersCarousel from "./PartnersCarousel";
import Info from "./Info";
import PartnersGallery from "./PartnersGallery";
import ContactInfo from "./ContactInfo";


export default class Home extends Component {
    render() {
        return <div className="content">

            <PartnersCarousel />

            <Info />

            <PartnersGallery />
<ContactInfo/>
        </div>;
    }
}