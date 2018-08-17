import React, { Component } from 'react';
import { DevicesListWrapper } from "./devicesList.styled";
import DeviceFilters from "../deviceFilters/deviceFilters";


class DevicesList extends Component {
    render() {
        return (
            <DevicesListWrapper>
                <DeviceFilters />
            </DevicesListWrapper>    
        )
    }
}

export default DevicesList;
