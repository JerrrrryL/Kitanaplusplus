import React, { Component } from 'react';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
} from 'react-icons/fa';

import { SocialIcon } from "react-social-icons"

import {
    FiHome,
    FiEdit
} from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        }
    }

    handleCollapsedChange = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <ProSidebar collapsed={this.state.collapsed}>
                    <SidebarHeader className="headerHeight">
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{this.state.collapsed ? ":D" : "Kitana++"}</p>
                        </div>
                        <div className="closemenu" onClick={this.handleCollapsedChange}>
                            {/* changing menu collapse icon on click */}
                            {this.state.collapsed ? (
                                <FaAngleDoubleRight />
                            ) : (
                                <FaAngleDoubleLeft />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className="hover" icon={<FiHome />}>
                                <Link to="/" className="link">
                                    <div className="link">Get Started</div>
                                </Link>
                            </MenuItem>
                            <SubMenu defaultOpen title={"Become a contributor!"} icon={<FiEdit />}>
                                <MenuItem className="hover" icon={<FiEdit />}>
                                    <Link to="/con">
                                        <div className="link">Upload Datasets</div>
                                    </Link>
                                </MenuItem>
                                <MenuItem className="hover" icon={<FiEdit />}>View Uploaded Datasets</MenuItem>
                            </SubMenu>
                            <SubMenu defaultOpen title={"Become a requestor!"} icon={<FiEdit />}>
                                <MenuItem className="hover" icon={<FiEdit />}>
                                    <Link to="/req">
                                        <div className="link">AutoML</div>
                                    </Link>
                                </MenuItem>
                                <MenuItem className="hover" icon={<FiEdit />}>Get Datasets</MenuItem>
                            </SubMenu>
                            {/* <MenuItem className="hover" icon={<BiBookContent />}>
                                <Link to="/req" className="link">
                                    Become a requestor!
                                </Link>
                            </MenuItem> */}
                            <MenuItem>
                                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                                <div class="elfsight-app-d207b586-e6ac-4708-8898-8ebb0d3bee79"></div>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem className="menuitem">
                                <a href='https://github.com/JerrrrryL/Kitanaplusplus'>
                                    <SocialIcon className='social-buttons' network="github" bgColor="white" fgColor="#000" style={{ height: 50, width: 50 }} />
                                </a>
                                <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=ffb6accef6643324fe380ae95b73a0e655c61789'></script>
                                <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/964976/t/0"></script>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        )
    }
};

export default Header;
