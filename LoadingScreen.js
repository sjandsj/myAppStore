import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={myStyles.mainContainer}>
        <Text style={myStyles.textStyle}>Loading</Text>
        <ActivityIndicator color="chocolate" size="large" />
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 70,
    fontFamily: "Party LET",
    fontWeight: "bold",
    color: "firebrick"
  }
});
