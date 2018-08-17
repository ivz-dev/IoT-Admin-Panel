import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { layers, grid_1 } from 'react-icons-kit/ikons';
import { SidebarWrapper, LogoContainer, MenuContainer, ItemContainer } from "./sidebar.styled";




class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <LogoContainer>
                    D
                </LogoContainer>
                <MenuContainer>
                    <ItemContainer active>
                        <Icon size={20} icon={layers} /> 
                    </ItemContainer>

                    <ItemContainer>
                        <Icon size={20} icon={grid_1} /> 
                    </ItemContainer>

                </MenuContainer>
            </SidebarWrapper>
        )
    }
}

export default Sidebar;
