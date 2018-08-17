import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {grid_1} from 'react-icons-kit/ikons/grid_1';
import {flower} from 'react-icons-kit/entypo/flower'
import { DevicesMenuWrapper, Label, DeviceTypesList, DeviceTypeItem } from "./devicesMenu.styled";

const devicesMockData = [
    { title: "All Devices", icon: grid_1},
    { title: "Wattering system", icon: flower},
]

class DevicesMenu extends Component {
    render() {
        return (
            <DevicesMenuWrapper>
                <Label> Choose Device Type </Label>
                <DeviceTypesList>
                    { devicesMockData.map((item, index) => 
                        <DeviceTypeItem key={index}> 
                            <Icon icon={item.icon} /> 
                            <span> {item.title} </span> 
                        </DeviceTypeItem>)
                    }
                </DeviceTypesList>
            </DevicesMenuWrapper>
        )
    }
}

export default DevicesMenu;
