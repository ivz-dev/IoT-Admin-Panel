import React, { Component } from 'react';
import { SidebarWrapper, LogoContainer, MenuContainer, MenuItem, ItemContainer } from "./sidebar.styled";
import dashboardIcon from './static/dashboard.svg';
import dashboardIconWhite from './static/dashboardWhite.svg';
import devicesIcon from './static/devices.svg';
import devicesIconWhite from './static/devicesWhite.svg';




class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <LogoContainer />
                <MenuContainer>
                    <ItemContainer>
                        <MenuItem src={dashboardIconWhite} />
                    </ItemContainer>

                    <ItemContainer>
                        <MenuItem src={devicesIconWhite} />
                    </ItemContainer>

                </MenuContainer>
            </SidebarWrapper>
        )
    }
}

export default Sidebar;
