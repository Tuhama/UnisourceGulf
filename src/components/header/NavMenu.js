import React, {Component} from 'react';
import './Header.less';
import {Menu, Icon, Button, Drawer} from 'antd';
import {NavLink} from 'react-router-dom';
import Media from 'react-media';


const SubMenu = Menu.SubMenu;

export default class NavMenu extends Component {

    state = {
        visible: false,
        current: 'home',
    };

    toggleCollapsed = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };


    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <Media query=" screen and (max-width: 600px)">
                {matches =>
                    matches ? (
                        <div style={{ display: "inline-block"}}>
                            <Button type="primary" onClick={this.toggleCollapsed}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                            </Button>
                            <Drawer
                                title=""
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                width={150}
                                bodyStyle={{padding:"0",paddingTop:"95px"}}
                            >
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="inline"
                               /* className="header-menu"*/
                                inlineCollapsed={this.state.collapsed}
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
                                <SubMenu title={<span className="submenu-title-wrapper"><a
                                    href="/#Partners">Partners</a></span>}>

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
                            </Drawer>
                        </div>
                    ) : (

                        <Menu
                            className="header-menu"
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
style={{backgroundColor: "rgba(0, 0, 0, 0.0)"}}
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
                            <SubMenu title={<span className="submenu-title-wrapper"><a
                                href="/#Partners">Partners</a></span>}>

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
                    )
                }
            </Media>
        );
    }
}