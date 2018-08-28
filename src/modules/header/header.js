import React, { Component } from 'react';
import { HeaderWrapper } from "./header.styled";
import HeaderSearch from "../../components/headerSearch";
import UserProfile from "./userProfile";


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderSearch />
                <UserProfile />
            </HeaderWrapper>
        )
    }
}

export default Header;
