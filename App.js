import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CatagoryScreen from './CatagoryScreen';
import SummaryScreen from './SummaryScreen';

const App = createStackNavigator({
  HomeScreen: { screen: HomeScreen }, 
  CatagoryScreen: { screen: CatagoryScreen },
  SummaryScreen: { screen: SummaryScreen }  
}, {
    initialRouteName: 'HomeScreen'
  } 
);

export default createAppContainer(App)