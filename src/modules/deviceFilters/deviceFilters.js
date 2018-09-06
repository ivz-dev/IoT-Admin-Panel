import React, { Component } from 'react';
import { DeviceFiltersWrapper, Label, FiltersContainer } from "./deviceFilters.styled";
import Input from "../../components/input";

const FiltersMock = [
    { title: "Name", field: "name" },
    { title: "Location", field: "location" },
    { title: "Type", field: "type" }
]

class DeviceFilters extends Component {
    render() {
        return (
            <DeviceFiltersWrapper>
                <Label> filter by </Label>
                <FiltersContainer>
                    {
                        FiltersMock.map((item, key) => (
                            <Input placeholder={item.title} />
                        ))
                    }
                </FiltersContainer>
            </DeviceFiltersWrapper>
        )
    }
}

export default DeviceFilters;
