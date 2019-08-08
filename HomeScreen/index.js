import React, { Component } from "react";
import { Alert } from "react-native";
import SplashScreen from "../Splash_Loading_Screen/Splash_Screen";
import { MyList } from "./Components/HomeScreenContainer";

var myNavigate;

export default class HomeScreen extends Component {
  static navigationOptions = {
    fontSize: 50,
    title: "MyApp Store"
  };

  constructor(props) {
    super(props);
    this.state = {
      scroolEnabled: true,
      isLoading: true,
      imageField: ""
    };
  }

  componentDidMount() {
    return fetch(
      "https://gist.githubusercontent.com/aashapure/7af28cbab39507f9a53b81de2a3e31fb/raw/169bec90b66bd7dbe706ecdee79c5df916453fb1/gistfile1.txt"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.catalogue
          },
          function() {}
        );
      })
      .catch(error => {
        Alert.alert("Not able to Connet to Server");
      });
  }

  TOPressed = data => {
    myNavigate("CatagoryScreen", {
      catagoryTitle: data.title,
      catagoryIcon: data.icon,
      catagoryId: data.id
    });
  };

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    const { navigate } = this.props.navigation;
    myNavigate = navigate;
    return (
      <MyList
        scrollEnabled={this.state.scroolEnabled}
        data={this.state.dataSource}
        methodClick={data => this.TOPressed(data)}
      />
    );
  }
}
