import React, { Component } from "react";
import { HeaderSearchWrapper } from "./style";

class HeaderSearch extends Component {
    render() {
        return (
            <HeaderSearchWrapper>
                <input type="text" placeholder="Search a Device" />
            </HeaderSearchWrapper>
        )
    }
}

export default HeaderSearch;

