import React, {Component} from 'react';
import './Header.less';
import { Icon} from 'antd';
import {FACEBOOK_ADDRESS, TWITTER_ADDRESS, INSTAGRAM_ADDRESS} from '../../constants';
import logo from '../../images/app/logo-small.webp';
import NavMenu from "./NavMenu";


export default class Header extends Component {
    state = {
        current: 'home',
    };

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className='header'>

                <div className="side-margin"></div>

                <div className="header-logo">
                    <img src={logo} alt={"logo"}/>
                </div>


                <div className="social">
                    <a href={FACEBOOK_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="facebook"
                                                                                                className="social-icon"/></a>
                    <a href={TWITTER_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="twitter"
                                                                                               className="social-icon"/></a>
                    <a href={INSTAGRAM_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="instagram"
                                                                                                 className="social-icon"/></a>
                </div>

                <NavMenu/>
                <div className="side-margin"></div>
            </div>);
    }
}