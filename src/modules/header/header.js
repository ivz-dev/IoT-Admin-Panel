import React, { Component } from 'react';
import { HeaderWrapper } from "./header.styled";
import HeaderSearch from "../../components/headerSearch";


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderSearch />
            </HeaderWrapper>
        )
    }
}

export default Header;
