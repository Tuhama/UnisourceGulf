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

                        <Route path="/careers" component={Careers}/>
                        <Route path="/companyHistory" component={CompanyHistory}/>
                        <Route path="/companyTeam" component={CompanyTeam}/>

                        <Route path="/bodet" component={Bodet}/>
                        <Route path="/engoPlanet" component={EngoPlanet}/>
                        <Route path="/grandStream" component={GrandStream}/>
                        <Route path="/loytec" component={Loytec}/>
                        <Route path="/2n" component={TwoN}/>

                    </Switch>


                    <div className="r-side-margin"></div>
                    <Footer/>
                </div>
                <UniChatBot/>
            </div>

        );
    }
}

export default App;
