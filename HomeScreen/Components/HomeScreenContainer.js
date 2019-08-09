import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MyButton } from "./HomeScreenButton";

const MyList = props => {
  return (
    <View style={myStyles.mainContainer}>
      <FlatList
        scrollEnabled={props.scroolEnabled}
        style={myStyles.flatListStyle}
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <MyButton
            onPress={() => props.methodClick(item)}
            source={{ uri: item.icon }}
          >
            {item.title}
          </MyButton>
        )}
      />
    </View>
  );
};

const myStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "yellowgreen",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flatListStyle: {
    height: "100%",
    width: "100%",
  }
});
export { MyList };
