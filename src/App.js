import React, { Component } from 'react';
import './App.css';
import Header from "./modules/header/header";
import Sidebar from "./modules/sidebar/sidebar";
import DevicesMenu from './modules/devicesMenu/devicesMenu';
import DevicesList from './modules/devicesList/devicesList';
import Device from './modules/device/device';
import SubHeader from "./modules/subHeader/subHeader"

import {
  DevicesListContainer,
  DeviceContainer,
  Container,
  ContentContainer
} from "./Containers.styled";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />

        <Container>
        
        <ContentContainer>
          <SubHeader />
          <DevicesListContainer>
            <DevicesMenu />
            <DevicesList />
          </DevicesListContainer>
        </ContentContainer>
        <DeviceContainer>
          <Device />
        </DeviceContainer>
        </Container>
      </div>
    );
  }
}

export default App;
