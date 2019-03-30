import React, {Component} from 'react';
import './App.less';
import Header from "./components/header/Header";
import Home from "./components/content/home/Home";

import {Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (

                <div className="App">

                    <Header/>

                    <div className="main">

                        <div className="header-placeholder"></div>

                        <div className="l-side-margin"></div>
                        <Switch>
                        <Route path="/" component={Home}/>
            </Switch>

                        <div className="r-side-margin"></div>

                        <Footer/>
                    </div>
                </div>

        );
    }
}

export default App;
