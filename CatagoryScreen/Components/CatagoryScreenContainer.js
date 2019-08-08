import React, { Component } from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { CatagoryScreenButton } from "./CatagoryScreenButton";

const CatagoryScreenContainer = props => {
  return (
    <View style={myStyles.mainContainer}>
      <Text style={myStyles.headerStyle}>{props.children}</Text>
      <Image style={{ width: 150, height: 150 }} source={props.source} />
      <FlatList
        style={myStyles.FlatList}
        data={props.data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <CatagoryScreenButton
            onPress={() => props.onPress(item)}
            source={{ uri: item.icon }}
          >
            {item.title}
          </CatagoryScreenButton>
        )}
      />
    </View>
  );
};
const myStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "chartreuse"
  },
  headerStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Menlo-Bold"
  },
  listStyle: {
    height: "100%",
    width: "100%",
    fontSize: 40,
    color: "chocolate",
    fontWeight: "bold",
    justifyContent: "space-evenly",
    alignItems: "center"
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
  },
  flatListStyle: {
    height: "100%",
    width: "100%"
  }
});

export { CatagoryScreenContainer };
