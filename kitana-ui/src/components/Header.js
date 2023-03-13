import React, { Component } from 'react';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

import { SocialIcon } from "react-social-icons"

//import icons from react icons
import {
    FiHome,
    FiEdit
} from "react-icons/fi";

import { BiBookContent } from "react-icons/bi"

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar>
                    <SidebarHeader>
                        <MenuItem className="menuitemtitle">
                            <div className="logotext">
                                <p>Kitana++</p>
                            </div>
                        </MenuItem>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className="hover" icon={<FiHome />}>
                                <Link to="/" className="link">
                                    Get Started
                                </Link>
                            </MenuItem>
                            <MenuItem className="hover" icon={<FiEdit />}>
                                <Link to="/con" className="link">
                                    Become a contributor!
                                </Link>
                            </MenuItem>
                            <MenuItem className="hover" icon={<BiBookContent />}>
                                <Link to="/req" className="link">
                                    Become a requestor!
                                </Link>
                            </MenuItem>
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
