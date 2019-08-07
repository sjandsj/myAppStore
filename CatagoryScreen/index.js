import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import LoadingScreen from "../Splash_Loading_Screen/LoadingScreen";

var myNavigate;

export default class CatagoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      myId: this.props.navigation.state.params.catagoryId,
      listData: [],
    };
  }

  componentDidMount() {
    return fetch(
      "https://gist.githubusercontent.com/aashapure/d53fd904bd3ad4abd9250aea4aaff767/raw/0811673cde1fedee2cac67fdbb732386a2d22e9b/gistfile1.txt"
    )
      .then(response => response.json())
      .then(responseJson => {
        let data = responseJson[this.state.myId];
        this.setState(
          {
            isLoading: false,
            listData: data
          },
          function() {}
        );
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  static navigationOptions = {
    title: "Select An App"
  };

  toPressed = (appTitle, appSummary, id) => {
    myNavigate("SummaryScreen", {
      summaryTitle: appTitle,
      summary: appSummary,
      appID: id
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    const { navigate } = this.props.navigation;
    myNavigate = navigate;
    return (
      <View style={myStyles.mainContainer}>
        <Text style={myStyles.headerStyle}>
          {this.props.navigation.state.params.catagoryTitle}
        </Text>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: this.props.navigation.state.params.catagoryIcon }}
        />
        <FlatList
          style={myStyles.flatListStyle}
          data={this.state.listData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.toPressed(item.title, item.summary, item.id)}
              style={{ width: "100%" }}
            >
              <View style={myStyles.subView}>
                <Image
                  style={myStyles.iconParams}
                  source={{ uri: item.icon }}
                />
                <Text style={myStyles.listStyle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'chartreuse',
  },
  headerStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Menlo-Bold",
  },
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
  },
  flatListStyle: {
    height: "100%",
    width: "100%"
  }
});
