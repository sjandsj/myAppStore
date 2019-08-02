import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CatagoryScreen from './CatagoryScreen';

const App = createStackNavigator({
  HomeScreen: { screen: HomeScreen }, 
  CatagoryScreen: { screen: CatagoryScreen }}, {
    initialRouteName: 'HomeScreen'
  } 
);

export default createAppContainer(App)