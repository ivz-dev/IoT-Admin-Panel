import React, { Component } from 'react';
import { DevicesListWrapper, DevicesContainer, DeviceItem, DeviceStatus, Ind, DeviceTitle, DeviceLocation } from "./devicesList.styled";
import DeviceFilters from "../deviceFilters/deviceFilters";
import { Icon } from 'react-icons-kit';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline'

const DevicesMock = [
    { title: "Router 12849", status: true, location: "West Willard"},
    { title: "Router 12859", status: true, location: "West Willard"},
    { title: "Router 12869", status: true, location: "West Willard"},
    { title: "Router 12879", status: false, location: "West Willard"},
    { title: "Router 12889", status: false, location: "West Willard"},
    { title: "Router 12859", status: true, location: "West Willard"},
    { title: "Router 12869", status: true, location: "West Willard"},
    { title: "Router 12879", status: false, location: "West Willard"},
    { title: "Router 12889", status: false, location: "West Willard"}
];

class DevicesList extends Component {
    render() {
        return (
            <DevicesListWrapper>
                <DeviceFilters />
                <DevicesContainer>
                    {
                        DevicesMock.map((item, index) => (
                            <DeviceItem >
                                <DeviceStatus> <Ind></Ind> <span> {item.status ? "On" : "Off"} </span> </DeviceStatus>
                                <DeviceTitle>  {item.title}  </DeviceTitle>
                                <DeviceLocation>
                                    <Icon icon={iosLocationOutline} /> 
                                    <span>{item.location}</span>
                                </DeviceLocation>
                            </DeviceItem>
                        ))
                    }
                </DevicesContainer>
            </DevicesListWrapper>    
        )
    }
}

export default DevicesList;
