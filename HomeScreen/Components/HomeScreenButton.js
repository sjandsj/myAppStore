import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Text
} from "react-native";

const MyButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={myStyles.TOStyle}>
      <View style={myStyles.cellView}>
        <ImageBackground source={props.source} style={myStyles.imageBackground}>
          <Text style={myStyles.textStyle}>{props.children}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const myStyles = StyleSheet.create({
  TOStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "Noteworthy-Bold",
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  cellView: {
    height: 266,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
export { MyButton };
