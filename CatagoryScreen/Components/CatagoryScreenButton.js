import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

const CatagoryScreenButton = catagoryProps => {
  return (
    <TouchableOpacity onPress={catagoryProps.onPress} style={{ width: '100%' }}>
      <View style={myStyles.subView}>
        <Image style={myStyles.iconParams} source={catagoryProps.source} />
        <Text style={myStyles.listStyle}>{catagoryProps.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const myStyles = StyleSheet.create({
  listStyle: {
    height: "100%",
    width: "100%",
    fontSize: 40,
    color: "chocolate",
    fontWeight: "bold",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subView: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  iconParams: {
    height: 50,
    width: 50
  }
});

export { CatagoryScreenButton };
