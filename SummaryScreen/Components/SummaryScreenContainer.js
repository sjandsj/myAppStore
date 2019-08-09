import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const SummaryScreenContainer = props => {
  return (
    <View style={myStyles.mainContainer}>
      <Text style={myStyles.headerStyle}>{props.summaryTitle}</Text>
      <Text style={myStyles.textStyle}>{props.summary}</Text>
    </View>
  );
};

const myStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  headerStyle: {
    paddingTop: 40,
    top: 20,
    fontSize: 70,
    color: "dodgerblue",
    fontWeight: "bold",
    fontFamily: "RockWell"
  },
  textStyle: {
    padding: 15,
    fontFamily: "Times New Roman",
    fontSize: 25,
    color: "orangered"
  }
});

export { SummaryScreenContainer };
