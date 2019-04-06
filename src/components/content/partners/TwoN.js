import React, {Component} from 'react';
import './TwoN.less';
import nLogo from '../../../images/partners/2n/2n-logo.webp';

import VERSO from '../../../images/partners/2n/VERSO.webp';
import SOLO from '../../../images/partners/2n/SOLO.webp';
import FORCE from '../../../images/partners/2n/FORCE.webp';
import SAFETY from '../../../images/partners/2n/SAFETY.webp';
import VARIO from '../../../images/partners/2n/VARIO.webp';
import BASE from '../../../images/partners/2n/BASE.webp';
import UNI from '../../../images/partners/2n/UNI.webp';

import Fingerprint from '../../../images/partners/2n/Fingerprint.webp';
import TouchKeypad from '../../../images/partners/2n/TouchKeypad.webp';
import RFID from '../../../images/partners/2n/RFID.webp';
import Bluetooth from '../../../images/partners/2n/Bluetooth.webp';

import VoiceBlueMAX from '../../../images/partners/2n/VoiceBlueMAX.webp';
import VoiceBlueNEXT from '../../../images/partners/2n/VoiceBlueNEXT.webp';

import AudioConverter from '../../../images/partners/2n/AudioConverter.webp';
import SPEAKER from '../../../images/partners/2n/SPEAKER.webp';
import MIC from '../../../images/partners/2n/MIC.webp';
import HORN from '../../../images/partners/2n/HORN.webp';

import AUDIODECODERLite from '../../../images/partners/2n/AUDIO DECODER Lite.webp';
import AUDIOENCODER from '../../../images/partners/2n/AUDIOENCODER.webp';
import AUDIOMANAGER from '../../../images/partners/2n/AUDIOMANAGER.webp';
import NETSpeaker from '../../../images/partners/2n/NETSpeaker.webp';

import AUDIODECODER from '../../../images/partners/2n/AUDIO DECODER.webp';
import NETMIC from '../../../images/partners/2n/NET MIC.webp';


export default class TwoN extends Component {
    render() {
        return (
            <div className="n-container">
                <div className="n-header">
                    <div className="n-header-bg"></div>
                    <img src={nLogo} alt="2N"/>
                    <span className="n-header-font">
                        2N is a leading European company engaged in the development and manufacture of products in the field of ICT and physical security. Their best-in-class portfolio of products and solutions are designed to makes life easier, better and more secure.
                    </span>
                </div>

                <div className="gs-anchors">

                    <a href="#IPIntercoms">IP INTERCOMS </a>
                    <a href="#IPAccessControl">IP ACCESS CONTROL</a>
                    <a href="#GSMGATEWAYS">GSM GATEWAYS</a>
                    <a href="#SIPAudioSystems">Enterprise IP Phones </a>
                    <a href="#NETAudioSystems">SIP Audio Systems </a>

                </div>

                <a id="IPIntercoms" href="#">
                <div className="n-main-title">IP Intercoms</div>
                <div className={"n-2c-product-section"}>
                    <div>
                        <img src={VERSO} alt="2N® IP VERSO"/>
                        <br/>
                        <span className="n-product-code">2N® IP VERSO</span>
                    </div>
                    <div>
                        <img src={SOLO} alt="2N® IP SOLO"/>
                        <br/>
                        <span className="n-product-code">2N® IP SOLO</span>
                    </div>
                    <div>
                        <img src={FORCE} alt="2N® IP FORCE"/>
                        <br/>
                        <span className="n-product-code">2N® IP FORCE</span>
                    </div>
                    <div>
                        <img src={SAFETY} alt="2N® IP SAFETY"/>
                        <br/>
                        <span className="n-product-code">2N® IP SAFETY</span>
                    </div>
                    <div>
                        <img src={VARIO} alt="2N® IP VARIO"/>
                        <br/>
                        <span className="n-product-code">2N® IP VARIO</span>
                    </div>
                    <div>
                        <img src={BASE} alt="2N® IP BASE"/>
                        <br/>
                        <span className="n-product-code">2N® IP BASE</span>
                    </div>
                    <div>
                        <img src={UNI} alt="2N® IP UNI"/>
                        <br/>
                        <span className="n-product-code">2N® IP UNI</span>
                    </div>
                </div>
                </a>
                <a id="IPAccessControl" href="#">
                <div className="n-main-title">IP Access Control</div>
                <div className={"n-2c-product-section"}>
                    <div>
                        <img src={Fingerprint} alt="2N® ACCESS Fingerprint Reader"/>
                        <br/>
                        <span className="n-product-code">2N® ACCESS Fingerprint Reader</span>
                    </div>
                    <div>
                        <img src={TouchKeypad} alt="2N® ACCESS UNIT Touch Keypad"/>
                        <br/>
                        <span className="n-product-code">2N® ACCESS UNIT Touch Keypad</span>
                    </div>
                    <div>
                        <img src={RFID} alt="2N® ACCESS UNIT RFID"/>
                        <br/>
                        <span className="n-product-code">2N® ACCESS UNIT RFID</span>
                    </div>
                    <div>
                        <img src={Bluetooth} alt="2N® ACCESS UNIT Bluetooth"/>
                        <br/>
                        <span className="n-product-code">2N® ACCESS UNIT Bluetooth</span>
                    </div>
                 </div>
                </a>
                <a id="GSMGATEWAYS" href="#">
                <div className="n-main-title">GSM GATEWAYS</div>
                <div className={"n-2c-product-section"}>
                    <div>
                        <img src={VoiceBlueMAX} alt="2N® VoiceBlue MAX"/>
                        <br/>
                        <span className="n-product-code">2N® VoiceBlue MAX</span>
                    </div>
                    <div>
                        <img src={VoiceBlueNEXT} alt="2N® VoiceBlue NEXT"/>
                        <br/>
                        <span className="n-product-code">2N® VoiceBlue NEXT</span>
                    </div>
                </div>
                </a>
                <a id="SIPAudioSystems" href="#">
                <div className="n-main-title">SIP Audio Systems</div>
                <div className={"n-4c-product-section"}>
                    <div>
                        <img src={HORN} alt="2N® SIP SPEAKER HORN"/>
                        <span className="n-product-code">2N® SIP SPEAKER HORN</span>
                    </div>
                    <div>
                        <img src={SPEAKER} alt="2N® SIP SPEAKER"/>
                        <span className="n-product-code">2N® SIP SPEAKER</span>
                    </div>
                    <div>
                        <img src={MIC} alt="2N® SIP MIC"/>
                        <span className="n-product-code">2N® SIP MIC</span>
                    </div>
                    <div>
                        <img src={AudioConverter} alt="2N® SIP Audio Converter"/>
                        <span className="n-product-code">2N® SIP Audio Converter</span>
                    </div>
                </div>
                </a>
                <a id="NETAudioSystems" href="#">
                <div className="n-main-title">NET Audio Systems</div>
                <div className={"gs-3c-product-section"}>
                    <div>
                        <img src={AUDIOMANAGER} alt="2N® IP AUDIO MANAGER"/>
                        <span className="n-product-code">2N® IP AUDIO MANAGER</span>
                    </div>
                    <div>
                        <img src={NETSpeaker} alt="2N® NET Speaker"/>
                        <span className="n-product-code">2N® NET Speaker</span>
                    </div>
                    <div>
                        <img src={AUDIODECODER} alt="2N® NET AUDIO DECODER"/>
                        <span className="n-product-code">2N® NET AUDIO DECODER</span>
                    </div>
                    <div>
                        <img src={AUDIODECODERLite} alt="2N® NET AUDIO DECODER Lite"/>
                        <span className="n-product-code">2N® NET AUDIO DECODER Lite</span>
                    </div>
                    <div>
                        <img src={NETMIC} alt="2N® NET MIC"/>
                        <span className="n-product-code">2N® NET MIC</span>
                    </div>
                    <div>
                        <img src={AUDIOENCODER} alt="2N® NET AUDIO ENCODER"/>
                        <span className="n-product-code">2N® NET AUDIO ENCODER</span>
                    </div>
                </div>
                </a>
            </div>)}
}