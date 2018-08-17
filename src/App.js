import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./modules/header/header";
import Sidebar from "./modules/sidebar/sidebar";
import DevicesMenu from './modules/devicesMenu/devicesMenu';
import DevicesList from './modules/devicesList/devicesList';
import Device from './modules/device/device';
import {
  DevicesListContainer,
  DeviceContainer,
  Container
} from "./Containers.styled";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />

        <Container>
        <DevicesListContainer>
          <DevicesMenu />
          <DevicesList />
        </DevicesListContainer>

        <DeviceContainer>
          <Device />
        </DeviceContainer>
        </Container>
      </div>
    );
  }
}

export default App;
