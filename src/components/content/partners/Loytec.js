import React, {Component} from 'react';
import './Loytec.less'

import loytecLogo from '../../../images/partners/loytec/loytec-logo.webp';
import loytec1 from '../../../images/partners/loytec/loytec1.webp';
import loytec2 from '../../../images/partners/loytec/loytec2.webp';
import loytec3 from '../../../images/partners/loytec/loytec3.webp';

export default class Loytec extends Component {
    render() {
        return (
            <div  className="content">
                <div className="loytec-title">
                    <div>
                        <img src={loytecLogo} alt=""  style={{
                            width: "80%",
                            height: "80%",
                            display: "block",
                            objectFit: "scale-down",
                        }}/>
                    </div>

                    <div>
                        <h3>The expert on intelligent network infrastructure products for building automation, focuses
                            on open and standardized communication protocols.</h3>
                    </div>
                </div>
                <div className="loytec-section">
                    <h2>Ishbylia Intermediate Boys School, Kuwait, 2017 </h2>
                    <div>

                    </div>
                   <div>
                       <img src={loytec1} alt="" style={{
                           width: "80%",
                           height: "80%",
                           display: "block",
                           objectFit: "scale-down",
                           margin: "0 auto"
                       }}/>
                   </div>
                    <span>
                        Ishbylia Intermediate Boys School, Kuwait, 2017
                        <br/>
                        After successfully implementing a central BMS at Ishblyia Intermediate Girls School the Ministry of education Kuwait country contracts AHMED ISHAG once again.
                        <br/>
                        The good impressions AHMED ISHAG, LOYTEC competence partner, led to an even bigger project. The ministry of education asked for a central building management system that operates and integrates with the electrical, mechanical and low voltage system for monitoring controlling and reporting. Ahmed Ishaq Co. as LOYTEC System Integrator/Full-Service Operator Asia showed an innovative solution with reliable and dependable system that ensure cost reduction, energy saving, easier maintenance and an operator-friendly user interface.
                        <br/>
                        The Intermediate Boys school consisting of two main buildings, several educational classrooms and labs and administration buildings in addition to basketball playground, mosque, theater, electrical building, and reception building. The school is serviced by mechanical, electrical, low voltage and security systems.
                    </span>
                    <a href="http://www.loytec.com/case-studies/5530-case-study-ishbylia-boys-school-2017" target="_blank" rel="noopener noreferrer">
                     <button className="more-button">Read More </button>
                    </a>
                </div>
                <div className="loytec-section">
                    <h2>Ishbylia Intermediate Girls School, Kuwait, 2017</h2>
                   <div>
                       <img src={loytec1} alt="" style={{
                           width: "80%",
                           height: "80%",
                           display: "block",
                           objectFit: "scale-down",
                           margin: "0 auto"
                       }}/>
                   </div>
                    <span>
                        For the development of the educational buildings the Ministry of Education in Kuwait asked for a central BMS. This building management systems has to operate and integrate with the mechanical, electrical, and low voltage system for monitoring, controlling, and reporting. Ahmed Ishaq Co. as LOYTEC System Integrator/Full-Service Operator Asia presented an innovative solution with a reliable system that ensures cost reduction, energy savings, easier maintenance, and an operator-friendly user interface.

                        The school consists of two main buildings, educational classrooms and labs, an administration building, an additional basketball court, a mosque, and an building for power supply as well as a reception building. The school is serviced by mechanical, electrical low voltage and security systems.
                    </span>
                    <a href="http://www.loytec.com/case-studies/5277-case-study-ishbylia-girls-school-2017" target="_blank" rel="noopener noreferrer">
                        <button className="more-button">Read More </button>
                    </a>
                </div>
                <div  className="loytec-section">
                    <h2>PAMA fahd al ahmad branch, Kuwait, 2015</h2>
                   <div>
                       <img src={loytec2} alt="" style={{
                           width: "80%",
                           height: "80%",
                           display: "block",
                           objectFit: "scale-down",
                           margin: "0 auto"
                       }}/>
                   </div>
                    <span>
                        The PAMA fahd al ahmad branch in Kuwait is the seat of the public authority of minority affairs in Kuwait. It is Kuwait’s first building that runs with a LonMark integrated building management system. The branch is connected with the headquarters via web interface for monitoring purposes. During the entire project, the ministry of public work was observing the building and the work progress.
                    </span>
                    <a href="http://www.loytec.com/case-studies/4054-pama-fahd-al-ahmad-branch-kuwait-2015" target="_blank" rel="noopener noreferrer">
                        <button className="more-button">Read More </button>
                    </a>
                </div>
                <div className="loytec-section">
                    <h2>PAMA west Al Jahra branch, Kuwait, 2015</h2>
                   <div>
                       <img src={loytec2} alt="" style={{
                           width: "80%",
                           height: "80%",
                           display: "block",
                           objectFit: "scale-down",
                           margin: "0 auto"
                       }}/>
                   </div>
                    <span>
                        Another PAMA branch, the seat of the public authority of minority affairs in Kuwait was automated by the LOYTEC Competence Partner Ahmed Isaq Co. However, this building is more advanced than the fahd al ahmad branch as additionally L-DALI lighting control is used for all building offices and corridors. The building is likewise connected with the headquarters through web interface for monitoring purposes.
                    </span>
                    <a href="http://www.loytec.com/case-studies/4056-pama-west-al-jahra-branch-kuwait-2015" target="_blank" rel="noopener noreferrer">
                        <button className="more-button">Read More </button>
                    </a>
                </div>
                <div className="loytec-section">
                    <h2>Fire Directorate, Kuwait, 2015</h2>
                    <div>
                        <img src={loytec3} alt="" style={{
                            width: "80%",
                            height: "80%",
                            display: "block",
                            objectFit: "scale-down",
                            margin: "0 auto"
                        }}/>
                    </div>

                    <span>
                        The Kuwait fire directorate is Kuwait’s first building that is considered to be a smart and green building. The building was automated by the LOYTEC Competence Partner AHMED ISHAQ CO. using LOYTEC components. This made the entire automation project easy and effective and delivered satisfying results for the building owner.
                        In the project, BACNet/IP is used for the management system for electrical and mechanical systems. For the lighting control in meeting and training rooms, LON L-DALI controllers are deployed.
                    </span>
                    <a href="http://www.loytec.com/case-studies/2320-fire-directorate-kuwait" target="_blank" rel="noopener noreferrer">
                        <button className="more-button">Read More </button>
                    </a>
                </div>
            </div>)
    }
}