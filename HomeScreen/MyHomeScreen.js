import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";

const MyList = props => {
  return (
    <FlatList
      scrollEnabled={props.scroolEnabled}
      style={myStyles.flatListStyle}
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
    />
  );
};

const myStyles = StyleSheet.create({
  flatListStyle: {
    height: "100%",
    width: "100%"
  }
});

export { MyList };
