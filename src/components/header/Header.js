import React, {Component} from 'react';
import './Header.less';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import {FACEBOOK_ADDRESS, TWITTER_ADDRESS, INSTAGRAM_ADDRESS} from '../../constants';

const SubMenu = Menu.SubMenu;

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
                    <img src="/logo-small.webp" alt={"logo"}/>
                </div>


                <div className="social">
                    <a href={FACEBOOK_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="facebook" className="social-icon"/></a>
                    <a href={TWITTER_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="twitter" className="social-icon"/></a>
                    <a href={INSTAGRAM_ADDRESS} rel="noopener noreferrer" target="_blank"> <Icon type="instagram" className="social-icon"/></a>
                </div>


                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className="header-menu"
                >
                    <Menu.Item key="home">
                        Home
                    </Menu.Item>

                    <SubMenu title={<span className="submenu-title-wrapper">Services</span>}>

                        <Menu.Item key="currentprojects">Current Projects</Menu.Item>
                        <Menu.Item key="recentprojects">Recent Projects</Menu.Item>
                        <Menu.Item key="services">Services</Menu.Item>
                        <Menu.Item key="solutions">Solutions</Menu.Item>

                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper">Partners</span>}>

                        <Menu.Item key="engoplanet">EngoPlanet</Menu.Item>
                        <Menu.Item key="2n">2N®</Menu.Item>
                        <Menu.Item key="grandstream">Grandstream</Menu.Item>
                        <Menu.Item key="bodet">Bodet</Menu.Item>
                        <Menu.Item key="loytec">Loytec</Menu.Item>

                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper">About</span>}>

                        <Menu.Item key="companyhistory">Company History</Menu.Item>
                        <Menu.Item key="companyteam">Company Team</Menu.Item>
                        <Menu.Item key="careers">Careers</Menu.Item>

                    </SubMenu>
                    <Menu.Item key="contactus">
                        Contact Us
                    </Menu.Item>
                </Menu>

                <div className="side-margin"></div>
            </div>);
    }
}