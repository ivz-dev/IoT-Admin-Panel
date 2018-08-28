import React, { Component } from 'react';
import { UserProfileWrapper } from "./header.styled";
import UserPhoto from "./static/user.jpeg";

class UserProfile extends Component {
    render() {
    return ( <UserProfileWrapper src={UserPhoto} /> );
    }
}

export default UserProfile;
