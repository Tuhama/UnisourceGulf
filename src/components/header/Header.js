import React, {Component} from 'react';
import './Header.less';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import {FACEBOOK_ADDRESS, TWITTER_ADDRESS, INSTAGRAM_ADDRESS} from '../../constants';
import logo from '../../images/app/logo-small.webp';

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
                    <img src={logo} alt={"logo"}/>
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
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </Menu.Item>

                    <SubMenu title={<span className="submenu-title-wrapper">Services</span>}>

                        <Menu.Item key="currentProjects">
                            <NavLink to={"/currentProjects"}>
                                Current Projects
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="recentProjects">
                            <NavLink to={"/recentProjects"}>
                                Recent Projects
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="services">
                            <NavLink to={"/services"}>Services
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="solutions">
                            <NavLink to={"/solutions"}>
                                Solutions
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper"><a href="/#Partners">Partners</a></span>}>

                        <Menu.Item key="engoPlanet">
                            <NavLink to={"/engoPlanet"}>
                                EngoPlanet
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2N">
                            <NavLink to={"/2N"}>
                            2N®
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="grandStream">
                            <NavLink to={"/grandStream"}>
                                Grandstream
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="bodet">
                            <NavLink to={"/bodet"}>
                                Bodet
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="loytec">
                            <NavLink to={"/loytec"}>
                                Loytec
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper">About</span>}>

                        <Menu.Item key="companyHistory">
                            <NavLink to={"/companyHistory"}>
                                Company History
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="companyTeam">
                            <NavLink to={"/companyTeam"}>
                                Company Team
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="careers">
                            <NavLink to={"/careers"}>
                                Careers
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>
                    <Menu.Item key="contactus">
                        <a href="/#ContactInfo">
                        Contact Us
                        </a>
                    </Menu.Item>
                </Menu>

                <div className="side-margin"></div>
            </div>);
    }
}