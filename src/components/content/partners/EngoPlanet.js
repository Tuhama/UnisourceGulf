import React, {Component} from 'react';
import './EngoPlanet.less';
import engoLogo from '../../../images/partners/engoPlanet/engo-logo.webp';
import engo1 from '../../../images/partners/engoPlanet/engo1.webp';
import engo2 from '../../../images/partners/engoPlanet/engo2.webp';
import engo3 from '../../../images/partners/engoPlanet/engo3.webp';


export default class EngoPlanet extends Component {
    render() {
        return (
            <div className='engo-container'>
                <div className="engo-title">
                    <img src={engoLogo}  alt=""/>
                    <div>
                        <h2>CASE STUDY:Kuwait Oil Company Solar Street Light project</h2>
                        <br/>
                        <p>March 12, 2018</p>
                    </div>
                </div>
                <div>
                    <span>CASE STUDY:Kuwait Oil Company Solar Street Light project
                        March 12, 2018

                        In this blog we will present you a project in Kuwait where EnGoPlanet installed 140 Smart Solar Street Lights at the headquarter of one of the largest oil companies in the world: Kuwait Oil Company. EnGoPlanet won this project in competition with the largest companies that produce Solar Street Lights.

                        The Kuwait Oil Company (KOC) is an oil company headquartered in Ahmadi, Kuwait. It is a subsidiary of the Kuwait Petroleum Corporation, a Government-owned holding company. Kuwait was world's 10th largest petroleum and other liquids producer in 2017, and fifth-largest exporter in terms of volume of crude oil and condensates.
                    </span>
                    <img src={engo1}  alt=""/>
                </div>
                <div>
                    <img src={engo2} alt=""/>
                    <span>
                        This Solar Street Light project had very strict requirements that Kuwait Oil Company set in this tender. They requested only high quality components for Solar Street Lights made in either USA or Europe.  Components and parts from China were not allowed. Chinese Solar Street Light solutions have much less price comparing to US or European producers, but the  quality and the life span of these units are very bad and many clients from other countries are starting to avoid Chinese Solar Street light solutions.
                    </span>
                </div>
                <div>
                    <span>
                        The EnGoPlanet from inception wanted to be recognized as a company who will produce and deliver high quality Solar Street Light solutions at a lower price point than other companies. The main components of Solar powered street lights are: battery, solar panel, MPPT controller, steel pole and arms. One of the most important part is definitely the battery. That is why EnGoPlanet developed strategic relationships with European and US battery producers. The battery for KOC Solar Street Light project was stored underground into the special box.
                    </span>
                    <img src={engo3} alt="" style={{objectFit: "scale-down",width:"100%",height:"100%",}}/>
                </div>
                <div>
                    <span>
                    This solution is recommended for countries with high temperatures such as Kuwait. The battery will have optimal temperature once stored underground which will expand life cycle of the battery. The access to the battery is protected but still easily accessible with the key.The LED power of this Solar Street Light unit was 80W. For this consumption we designed battery system of 2x150Ah. The Solar panel power was 270Wp. Galvanization of all metal parts had to be according to highest world standards and EnGoPlanet had to deliver a sample unit for KOC approval. The delivered sample passed all KOC requirements and they were very happy with the quality.

                    Kuwait and all Middle East and MENA countries are perfect areas for Solar Street Light installation. With so much sun and high Solar irradiance these areas can light up their streets and roads with clean and free energy.

                    We at EnGoPlanet are very happy that we successfully finalized Kuwait Oil Company Solar Street Light project and we hope that this is just the beginning of our expansion in the Middle East and MENA region.
                    </span>
                </div>
            </div>)}
}