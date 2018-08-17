import React, { Component } from "react";
import { HeaderSearchWrapper } from "./style";
import Input from "../input";

class HeaderSearch extends Component {
    render() {
        return (
            <HeaderSearchWrapper>
                <Input type="text" placeholder="Search a Device" />
            </HeaderSearchWrapper>
        )
    }
}

export default HeaderSearch;

