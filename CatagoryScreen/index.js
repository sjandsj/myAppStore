import React, { Component } from "react";
import { Alert } from "react-native";
import LoadingScreen from "../Splash_Loading_Screen/LoadingScreen";
import { CatagoryScreenContainer } from "./Components/CatagoryScreenContainer";

var myNavigate;

export default class CatagoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      myId: this.props.navigation.state.params.catagoryId,
      listData: []
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

  toPressed = data => {
    myNavigate("SummaryScreen", {
      summaryTitle: data.title,
      summary: data.summary,
      appID: data.id
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    const { navigate } = this.props.navigation;
    myNavigate = navigate;
    return (
      <CatagoryScreenContainer
        source={{ uri: this.props.navigation.state.params.catagoryIcon }}
        data={this.state.listData}
        onPress={data => this.toPressed(data)}
      >
        {this.props.navigation.state.params.catagoryTitle}
      </CatagoryScreenContainer>
    );
  }
}
