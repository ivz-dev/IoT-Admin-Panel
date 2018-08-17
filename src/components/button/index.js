import React, { Component } from "react";
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/ikons/plus';
import { ButtonWrapper } from "./style";

class Button extends Component {
    render() {
        return (
            <ButtonWrapper>
                <Icon icon={plus} /> 
                Add Device
            </ButtonWrapper>
        )
    }
}

export default Button;

