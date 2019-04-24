import React, {Component} from 'react';
import './App.less';
import Header from "./components/header/Header";
import Home from "./components/content/home/Home";

import {Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Careers from "./components/content/about/Careers";
import CompanyHistory from "./components/content/about/CompanyHistory";
import CompanyTeam from "./components/content/about/CompanyTeam";
import Bodet from "./components/content/partners/Bodet";
import EngoPlanet from "./components/content/partners/EngoPlanet";
import GrandStream from "./components/content/partners/GrandStream";
import Loytec from "./components/content/partners/Loytec";
import TwoN from "./components/content/partners/TwoN";
import UniChatBot from "./components/ChatBot";
import RecentProjects from "./components/content/services/recentProjects/RecentProjects";
import Services from "./components/content/services/services/Services";
import Solutions from "./components/content/services/solutions/Solutions";
import CurrentProjects from "./components/content/services/currentProjects/CurrentProjects";
import { BackTop } from 'antd';

class App extends Component {
    render() {
        return (

            <div className="App">

                <Header/>

                <div className="main">

                    <div className="header-placeholder"></div>

                    <div className="l-side-margin"></div>


                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route path="/currentProjects" component={CurrentProjects}/>
                        <Route path="/recentProjects" component={RecentProjects}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/solutions" component={Solutions}/>

                        <Route path="/careers" component={Careers}/>
                        <Route path="/companyHistory" component={CompanyHistory}/>
                        <Route path="/companyTeam" component={CompanyTeam}/>

                        <Route path="/bodet" component={Bodet}/>
                        <Route path="/engoPlanet" component={EngoPlanet}/>
                        <Route path="/grandStream" component={GrandStream}/>
                        <Route path="/loytec" component={Loytec}/>
                        <Route path="/2N" component={TwoN}/>

                    </Switch>


                    <div className="r-side-margin"></div>
                    <Footer/>
                </div>

                <UniChatBot/>
                <div>
                    <BackTop  style={{ bottom:"10px",right:"10%"}}/>
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
                </div>
            </div>

        );
    }
}

export default App;
