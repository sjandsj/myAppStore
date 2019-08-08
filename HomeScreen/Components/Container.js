import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { MyButton } from "./MyButton";

const MyList = props => {
  return (
    <FlatList
      scrollEnabled={props.scroolEnabled}
      style={myStyles.flatListStyle}
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => ( 
        <MyButton 
         onPress={() => props.methodClick(item)}
         source={{ uri: item.icon }}>
          {item.title}
        </MyButton>
      )}
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
