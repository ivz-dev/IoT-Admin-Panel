import React, { Component } from 'react';
import { SubHeaderWrapper } from "./subHeader.styled";
import Button from "../../components/button";

class SubHeader extends Component {
    render() {
        return (
            <SubHeaderWrapper>
                <span> Devices </span>
                <Button />
            </SubHeaderWrapper>
        )
    }
}

export default SubHeader;
